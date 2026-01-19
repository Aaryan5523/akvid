import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, phone, subject, message, botField } = await req.json();

        // 🛑 1. Security: Honeypot Check
        // If the hidden 'botField' is filled, it's a bot. Reject it.
        if (botField) {
            return NextResponse.json({ error: 'Bot detected' }, { status: 403 });
        }

        // 🛑 2. Validation: Check required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // 📝 3. Debugging: Log to VS Code Terminal
        console.log("--- NEW EMAIL REQUEST ---");
        console.log("To:", process.env.EMAIL_USER);
        console.log("From:", email);
        console.log("Message:", message);

        // 📧 4. Configure Email Transporter
        // Make sure these variables are in your .env.local file!
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address
                pass: process.env.EMAIL_PASS, // Your Gmail App Password
            },
        });

        // 🚀 5. Send the Email
        await transporter.sendMail({
            from: `"Website Contact" <${process.env.EMAIL_USER}>`,
            to: 'akvidbathfittings@gmail.com', // Where you want to receive emails
            replyTo: email,
            subject: `New Message: ${subject || 'No Subject'}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <hr/>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
        });

        return NextResponse.json(
            { success: true, message: 'Email sent successfully!' },
            { status: 200 }
        );

    } catch (error) {
        console.error('SERVER ERROR:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Check server logs.' },
            { status: 500 }
        );
    }
}