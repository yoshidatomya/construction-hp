import React from 'react';
import { Section } from './ui/Section';
import { BlurText } from './ui/BlurText';
import { motion } from 'framer-motion';

export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "お問い合わせ・ご相談",
      description: "お電話またはメールフォームよりお気軽にご相談ください。専門スタッフが丁寧に対応いたします。"
    },
    {
      number: "02",
      title: "現地調査・プラン提案",
      description: "現地を確認し、お客様のご要望に合わせた最適なプランとお見積りをご提案します。"
    },
    {
      number: "03",
      title: "ご契約・着工",
      description: "プランにご納得いただけましたらご契約となります。安全第一で工事を進めてまいります。"
    },
    {
      number: "04",
      title: "完了・お引き渡し",
      description: "厳密な検査を行った後、お引き渡しとなります。アフターフォローも万全です。"
    }
  ];

  return (
    <Section id="process" background="light">
      <div className="text-center mb-16">
        <motion.h3
          className="text-corporate-accent font-bold tracking-wider uppercase mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Workflow
        </motion.h3>
        <h2 className="text-3xl md:text-4xl font-bold text-corporate-black">
          <BlurText text="ご依頼の流れ" delay={0.1} />
        </h2>
      </div>

      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-corporate-accent/20 via-corporate-accent to-corporate-accent/20 -translate-y-1/2 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg md:shadow-none md:bg-transparent text-center md:text-left relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-corporate-dark to-corporate-black text-white rounded-xl flex items-center justify-center text-xl font-bold mb-4 mx-auto md:mx-0 relative z-10 group-hover:from-corporate-accent group-hover:to-orange-600 transition-all duration-500 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-corporate-black mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
