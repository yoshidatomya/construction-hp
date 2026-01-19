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
    "鉄骨工事・鍛冶工事一式",
    "重量鳶・足場工事のプロフェッショナル",
    "徹底した安全管理と現場管理",
    "スピーディーで高品質な施工"
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
          <h3 className="font-bold tracking-wider uppercase mb-2 text-sm">
            <GradientText colors={['#f97316', '#ea580c', '#f97316']}>
              About Us
            </GradientText>
          </h3>
          <h2 className="text-2xl md:text-4xl font-bold text-corporate-black mb-4 md:mb-6 leading-tight">
            <BlurText text="確かな技術で、安心の未来を。" delay={0.2} />
          </h2>
          <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
            合同会社健組（けんぐみ）は、鉄骨工事、鍛冶工事、重量鳶工事、足場工事など、建設現場における重要な専門工事を一式で請け負います。現場管理も含め、安全かつ高品質な施工をお約束いたします。
          </p>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
            <h4 className="font-bold text-corporate-black mb-4 border-b border-gray-200 pb-2">会社概要</h4>
            <dl className="grid grid-cols-1 gap-y-3 text-sm">
              <div className="grid grid-cols-3">
                <dt className="text-gray-500">社名</dt>
                <dd className="col-span-2 font-medium text-gray-900">合同会社健組（けんぐみ）</dd>
              </div>
              <div className="grid grid-cols-3">
                <dt className="text-gray-500">代表者</dt>
                <dd className="col-span-2 font-medium text-gray-900">野崎 健治</dd>
              </div>
              <div className="grid grid-cols-3">
                <dt className="text-gray-500">所在地</dt>
                <dd className="col-span-2 font-medium text-gray-900">〒274-0063<br />千葉県船橋市習志野台4-29-26</dd>
              </div>
            </dl>
          </div>

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
            <a href="#contact">
              <Button>お問い合わせ</Button>
            </a>
          </ClickSpark>
        </motion.div>
      </div>
    </Section>
  );
};

