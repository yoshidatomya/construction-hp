import React from 'react';
import { Section } from './ui/Section';
import { ShieldCheck, Users, Clock, Award } from 'lucide-react';
import { Squares } from './ui/Squares';
import { BlurText } from './ui/BlurText';
import { motion } from 'framer-motion';

export const Strengths = () => {
  const strengths = [
    {
      icon: ShieldCheck,
      title: "安全第一",
      description: "徹底した安全管理体制で、無事故・無災害を目指します。"
    },
    {
      icon: Users,
      title: "プロフェッショナル集団",
      description: "経験豊富な有資格者が多数在籍し、高品質な施工を実現します。"
    },
    {
      icon: Clock,
      title: "工期厳守",
      description: "綿密な工程管理により、確実な納期遵守をお約束します。"
    },
    {
      icon: Award,
      title: "品質保証",
      description: "熟練した作業員・管理者の元 最高水準の品質を保証します。"
    }
  ];

  return (
    <Section id="strengths" background="dark" className="relative overflow-hidden">
      {/* Animated Squares Background */}
      <div className="absolute inset-0 z-0">
        <Squares
          color="rgba(249, 115, 22, 0.15)"
          size={50}
          speed={0.3}
          squareCount={25}
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h3
            className="text-corporate-accent font-bold tracking-wider uppercase mb-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            <BlurText text="選ばれる理由" delay={0.1} />
          </h2>
          <p className="text-gray-300 mb-10 leading-relaxed">
            私たちは単に建物を建てるだけではありません。
            お客様のビジョンを共有し、共に未来を創るパートナーとして、
            誠実かつ確実にプロジェクトを遂行します。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {strengths.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-start group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 p-3 rounded-lg mb-4 group-hover:from-corporate-accent/30 group-hover:to-corporate-accent/10 transition-all duration-300 border border-white/10">
                  <item.icon className="w-6 h-6 text-corporate-accent" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative h-[600px] hidden lg:block">
          <motion.div
            className="absolute top-0 right-0 w-4/5 h-4/5 rounded-xl overflow-hidden shadow-2xl z-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/assets/site-3.jpg" alt="Strength 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark/50 to-transparent" />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-xl overflow-hidden shadow-2xl z-20 border-4 border-corporate-dark"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="/assets/site-4.jpg" alt="Strength 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark/50 to-transparent" />
          </motion.div>
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-corporate-accent/20 rounded-full blur-3xl" />
        </div>
      </div>
    </Section>
  );
};
