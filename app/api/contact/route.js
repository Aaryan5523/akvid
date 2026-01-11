import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// 🔐 In-memory IP tracking (resets on server restart)
const ipStore = new Map();

const MAX_ATTEMPTS = 3; // attempts allowed
const BAN_TIME = 24 * 60 * 60 * 1000; // 24 hours

export async function POST(req) {
    try {
        // 📌 Get IP address
        const ip =
            req.headers.get('x-forwarded-for')?.split(',')[0] ||
            'unknown-ip';

        const now = Date.now();

        // 🚫 Check if IP is banned
        const record = ipStore.get(ip);
        if (record && record.bannedUntil && now < record.bannedUntil) {
            return NextResponse.json(
                { error: 'Your IP has been temporarily blocked due to spam activity.' },
                { status: 403 }
            );
        }

        const {
            name,
            email,
            phone,
            subject,
            message,
            captchaToken,
            botField,
        } = await req.json();

        // 🛑 Honeypot bot detection
        if (botField) {
            registerFailure(ip);
            return NextResponse.json({ error: 'Bot detected' }, { status: 403 });
        }

        // 🛑 Required fields
        if (!name || !email || !subject || !message) {
            registerFailure(ip);
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // 🛑 Captcha required
        if (!captchaToken) {
            registerFailure(ip);
            return NextResponse.json(
                { error: 'Captcha not verified' },
                { status: 400 }
            );
        }

        // 🔐 Verify reCAPTCHA
        const captchaRes = await fetch(
            'https://www.google.com/recaptcha/api/siteverify',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
            }
        );

        const captchaData = await captchaRes.json();

        if (!captchaData.success) {
            registerFailure(ip);
            return NextResponse.json(
                { error: 'Captcha verification failed' },
                { status: 400 }
            );
        }

        // 📧 Email transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"AKVID Contact" <${process.env.EMAIL_USER}>`,
            to: 'akvidbathfittings@gmail.com',
            subject: `New Contact: ${subject}`,
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <hr/>
        <p>IP: ${ip}</p>
      `,
        });

        // ✅ Success → reset IP attempts
        ipStore.delete(ip);

        return NextResponse.json(
            { success: true, message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('CONTACT API ERROR:', error);
        return NextResponse.json(
            { error: 'Server error' },
            { status: 500 }
        );
    }
}

// 🔁 Register failed attempt
function registerFailure(ip) {
    const now = Date.now();
    const record = ipStore.get(ip) || { attempts: 0 };

    record.attempts += 1;

    if (record.attempts >= MAX_ATTEMPTS) {
        record.bannedUntil = now + BAN_TIME;
        console.warn(`IP BANNED: ${ip}`);
    }

    ipStore.set(ip, record);
}
