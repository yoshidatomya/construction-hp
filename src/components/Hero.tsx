import React from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Aurora } from './ui/Aurora';
import { SplitText } from './ui/SplitText';
import { BlurText } from './ui/BlurText';
import { ClickSpark } from './ui/ClickSpark';
import { GradientText } from './ui/GradientText';

export const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-10" /> {/* Gradient */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/assets/site-1.jpg"
        >
          <source src="/assets/video-1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Aurora Effect */}
      <div className="absolute inset-0 z-15 opacity-60">
        <Aurora
          colorStops={['#f97316', '#ea580c', '#c2410c']}
          speed={0.3}
          amplitude={1.2}
          blend={0.4}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg md:text-xl font-medium tracking-widest mb-6 uppercase">
            <GradientText
              colors={['#f97316', '#fbbf24', '#f97316']}
              animationSpeed={4}
            >
              Building The Future
            </GradientText>
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
            <SplitText
              text="未来のインフラを創造する"
              delay={0.3}
              duration={0.6}
              stagger={0.04}
            />
          </h1>

          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto mb-10 md:mb-12 leading-loose md:leading-relaxed px-2">
            <BlurText
              text="確かな技術と信頼で、社会の基盤を支えます。私たちは、次世代へ繋ぐ価値ある建設を提供します。"
              delay={0.8}
              duration={0.6}
            />
          </div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <ClickSpark sparkColor="#f97316" sparkCount={12}>
              <a href="#about">
                <Button size="lg" className="min-w-[200px]">
                  事業案内を見る
                </Button>
              </a>
            </ClickSpark>
            <ClickSpark sparkColor="#ffffff" sparkCount={12}>
              <a href="#contact">
                <Button variant="outline" size="lg" className="min-w-[200px] border-white text-white hover:bg-white hover:text-corporate-black">
                  お問い合わせ
                </Button>
              </a>
            </ClickSpark>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="w-8 h-8 opacity-80" />
      </motion.div>
    </section>
  );
};