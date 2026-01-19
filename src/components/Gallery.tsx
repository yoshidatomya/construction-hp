import React, { useState } from 'react';
import { Section } from './ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
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

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                    <BlurText text="施工実績" delay={0.1} />
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    私たちが手掛けた代表的なプロジェクトをご紹介します。
                </p>
            </div>

            {/* Infinite Scrolling Marquee */}
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
                            onClick={() => setSelectedImage(img.src)}
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

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white p-3 hover:bg-white/10 rounded-full transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
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
