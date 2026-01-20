import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Section } from './ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';
import { BlurText } from './ui/BlurText';

export const Gallery = () => {
    const images = [
        { src: '/assets/site-5.jpg', alt: 'Project 1', span: 'col-span-1 md:col-span-2 row-span-2' },
        { src: '/assets/site-6.jpg', alt: 'Project 2', span: 'col-span-1 row-span-1' },
        { src: '/assets/site-7.jpg', alt: 'Project 3', span: 'col-span-1 row-span-1' },
        { src: '/assets/site-8.jpg', alt: 'Project 4', span: 'col-span-1 md:col-span-2 row-span-1' },
        { src: '/assets/site-9.jpg', alt: 'Project 5', span: 'col-span-1 row-span-1' },
        { src: '/assets/site-10.jpg', alt: 'Project 6', span: 'col-span-1 row-span-1' },
        { src: '/assets/site-13.jpg', alt: 'Project 7', span: 'col-span-1 row-span-1' },
        { src: '/assets/site-14.jpg', alt: 'Project 8', span: 'col-span-1 row-span-1' },
        { src: '/assets/site-15.jpg', alt: 'Project 9', span: 'col-span-1 row-span-1' },
        { src: '/assets/site-16.jpg', alt: 'Project 10', span: 'col-span-1 row-span-1' },
    ];

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [mobileIndex, setMobileIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);

    useEffect(() => {
        // Extended to 1024px to include iPad in mobile/tablet view
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const selectedImage = selectedIndex !== null ? images[selectedIndex].src : null;

    // Pause auto-scroll temporarily when user manually navigates (mobile only)
    const pauseAutoScroll = useCallback(() => {
        setIsPaused(true);
        if (pauseTimeoutRef.current) {
            clearTimeout(pauseTimeoutRef.current);
        }
        pauseTimeoutRef.current = setTimeout(() => {
            setIsPaused(false);
        }, 4000); // Resume after 4 seconds
    }, []);

    // Auto-play for mobile gallery
    useEffect(() => {
        if (isMobile && !isPaused && selectedIndex === null) {
            autoPlayRef.current = setInterval(() => {
                setMobileIndex((prev) => (prev + 1) % images.length);
            }, 3000); // Auto-advance every 3 seconds
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [isMobile, isPaused, selectedIndex, images.length]);

    // Mobile navigation handlers
    const handleMobileNext = useCallback(() => {
        setMobileIndex((prev) => (prev + 1) % images.length);
        pauseAutoScroll();
    }, [images.length, pauseAutoScroll]);

    const handleMobilePrev = useCallback(() => {
        setMobileIndex((prev) => (prev - 1 + images.length) % images.length);
        pauseAutoScroll();
    }, [images.length, pauseAutoScroll]);

    // Touch handlers for swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50;

        if (Math.abs(diff) > minSwipeDistance) {
            if (diff > 0) {
                handleMobileNext(); // Swipe left = next
            } else {
                handleMobilePrev(); // Swipe right = prev
            }
        }
    };

    // Lightbox handlers
    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % images.length);
        }
    };

    const handlePrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
        }
    };

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') setSelectedIndex(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex]);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (pauseTimeoutRef.current) {
                clearTimeout(pauseTimeoutRef.current);
            }
        };
    }, []);

    return (
        <Section id="gallery" background="white">
            <div className="text-center mb-16">
                <motion.h3
                    className="text-corporate-accent font-bold tracking-wider uppercase mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Projects
                </motion.h3>
                <h2 className="text-3xl md:text-4xl font-bold text-corporate-black mb-4">
                    <BlurText text="施工風景" delay={0.1} />
                </h2>
                <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed px-4">
                    私たちが手掛けた代表的なプロジェクトをご紹介します。
                </p>
            </div>

            {/* Mobile Gallery with Swipe */}
            {isMobile ? (
                <div className="relative w-full">
                    {/* Swipeable Image Container */}
                    <div
                        className="relative w-full overflow-hidden"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <motion.div
                            className="flex"
                            animate={{ x: `-${mobileIndex * 100}%` }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className="min-w-full px-4"
                                    onClick={() => setSelectedIndex(index)}
                                >
                                    <div className="relative h-[280px] rounded-xl overflow-hidden">
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 active:opacity-100 transition-opacity">
                                            <span className="text-white font-bold border border-white px-4 py-1 rounded-full backdrop-blur-sm">VIEW</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Arrows Below Gallery (Mobile Only) */}
                    <div className="flex items-center justify-center gap-6 mt-6">
                        <button
                            onClick={handleMobilePrev}
                            className="w-12 h-12 rounded-full bg-corporate-black/10 hover:bg-corporate-accent/20 flex items-center justify-center transition-colors"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-6 h-6 text-corporate-black" />
                        </button>

                        {/* Dot Indicators */}
                        <div className="flex gap-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setMobileIndex(index);
                                        pauseAutoScroll();
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all ${index === mobileIndex
                                        ? 'bg-corporate-accent w-4'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    aria-label={`Go to image ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleMobileNext}
                            className="w-12 h-12 rounded-full bg-corporate-black/10 hover:bg-corporate-accent/20 flex items-center justify-center transition-colors"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-6 h-6 text-corporate-black" />
                        </button>
                    </div>

                    {/* Image Counter */}
                    <div className="text-center mt-3 text-sm text-gray-500">
                        {mobileIndex + 1} / {images.length}
                    </div>
                </div>
            ) : (
                /* Desktop: Infinite Scrolling Marquee (unchanged) */
                <div className="relative w-full overflow-hidden py-10">
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <motion.div
                        className="flex gap-6"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear"
                            }
                        }}
                    >
                        {/* Duplicate images array to create seamless loop */}
                        {[...images, ...images].map((img, index) => (
                            <motion.div
                                key={index}
                                className="relative min-w-[300px] h-[250px] rounded-xl overflow-hidden cursor-pointer flex-shrink-0 group"
                                onClick={() => setSelectedIndex(index % images.length)}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-bold border border-white px-4 py-1 rounded-full backdrop-blur-sm">VIEW</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            )}

            {/* Lightbox */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-50"
                            onClick={() => setSelectedIndex(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <button
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white p-4 hover:bg-white/10 rounded-full transition-colors z-50"
                            onClick={handlePrev}
                        >
                            <ChevronLeft className="w-10 h-10" />
                        </button>

                        <button
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white p-4 hover:bg-white/10 rounded-full transition-colors z-50"
                            onClick={handleNext}
                        >
                            <ChevronRight className="w-10 h-10" />
                        </button>

                        <motion.img
                            key={selectedIndex}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={images[selectedIndex].src}
                            alt="Full size"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
};
