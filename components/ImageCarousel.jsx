'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageCarousel({ images, productName }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    // Auto-play carousel
    useEffect(() => {
        if (!autoPlay || !images || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [autoPlay, images]);

    if (!images || images.length === 0) return null;

    const goToPrevious = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
        setAutoPlay(false);
    };

    const goToNext = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setAutoPlay(false);
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
        setAutoPlay(false);
    };

    return (
        <div
            className="relative h-64 overflow-hidden bg-gray-100 rounded-lg"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
        >
            {/* Image Display */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                >
                    <Image
                        src={images[currentImageIndex]}
                        alt={`${productName} - Image ${currentImageIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Previous Button */}
            {images.length > 1 && (
                <button
                    onClick={goToPrevious}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                >
                    <ChevronLeft size={20} />
                </button>
            )}

            {/* Next Button */}
            {images.length > 1 && (
                <button
                    onClick={goToNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                >
                    <ChevronRight size={20} />
                </button>
            )}

            {/* Dot Indicators */}
            {images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToImage(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentImageIndex
                                ? 'bg-white w-8'
                                : 'bg-white/50 hover:bg-white/70'
                                }`}
                        />
                    ))}
                </div>
            )}

            {/* Image Counter */}
            {images.length > 1 && (
                <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    {currentImageIndex + 1}/{images.length}
                </div>
            )}
        </div>
    );
}
