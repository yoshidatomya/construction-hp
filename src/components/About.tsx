import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { CheckCircle2 } from 'lucide-react';
import { CountUp } from './ui/CountUp';
import { GradientText } from './ui/GradientText';
import { BlurText } from './ui/BlurText';
import { ClickSpark } from './ui/ClickSpark';
import { motion } from 'framer-motion';

export const About = () => {
  const features = [
    "創業50年以上の実績と信頼",
    "最新技術を駆使した施工管理",
    "徹底した安全管理体制",
    "環境に配慮した持続可能な建設"
  ];

  return (
    <Section id="about" background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Side */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/assets/site-2.jpg"
              alt="Construction Site"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-corporate-black/40 to-transparent" />
          </div>
          {/* Decorative Element */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-corporate-light -z-10 rounded-2xl" />
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-corporate-accent/10 -z-10 rounded-full blur-3xl" />

          {/* Experience Badge with CountUp */}
          <motion.div
            className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-xl max-w-[220px] backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-5xl font-bold text-corporate-accent">
              <CountUp end={50} duration={2.5} suffix="+" />
            </p>
            <p className="text-sm text-gray-600 font-medium mt-1">Years of Excellence</p>
          </motion.div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-bold tracking-wider uppercase mb-2">
            <GradientText colors={['#f97316', '#ea580c', '#f97316']}>
              About Us
            </GradientText>
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-black mb-6 leading-tight">
            <BlurText text="技術と信頼で、安心できる社会基盤を築く" delay={0.2} />
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            私たちは、建設・土木・インフラ整備を通じて、地域社会の発展に貢献してきました。
            長年の経験で培った技術力と、最新のテクノロジーを融合させ、
            お客様のニーズに応える高品質な施工を提供します。
          </p>

          <div className="space-y-4 mb-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle2 className="w-5 h-5 text-corporate-accent flex-shrink-0" />
                <span className="text-corporate-dark font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>

          <ClickSpark sparkColor="#f97316" sparkCount={10}>
            <Button>会社概要を見る</Button>
          </ClickSpark>
        </motion.div>
      </div>
    </Section>
  );
};
