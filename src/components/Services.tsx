import React from 'react';
import { Section } from './ui/Section';
import { Hammer, Flame, Anchor, Grid, ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './ui/SpotlightCard';
import { BlurText } from './ui/BlurText';

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <SpotlightCard
      className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full"
      spotlightColor="rgba(249, 115, 22, 0.12)"
      spotlightSize={350}
    >
      <div className="w-14 h-14 bg-gradient-to-br from-corporate-accent/20 to-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-corporate-accent transition-all duration-300">
        <Icon className="w-8 h-8 text-corporate-accent" />
      </div>
      <h3 className="text-xl font-bold text-corporate-black mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </SpotlightCard>
  </motion.div>
);

export const Services = () => {
  const services = [
    {
      icon: Grid,
      title: "鉄骨工事一式",
      description: "建物の骨格となる鉄骨の組立・設置を行います。高層ビルから工場まで、あらゆる形状・規模の鉄骨工事に精通しています。"
    },
    {
      icon: Flame,
      title: "鍛冶工事一式",
      description: "鉄骨の溶接・加工から現場での微調整まで。熟練の技術で、設計図通りの強固な接合を実現します。"
    },
    {
      icon: Anchor,
      title: "重量鳶工事",
      description: "大型機械や重量物の搬入・据付・撤去。特殊な機材と高度な技術で、重量物を安全かつ正確に配置します。"
    },
    {
      icon: Grid, // Using Grid for Scaffolding as well or maybe Network? Let's use Grid for simplicity as it represents structure
      title: "足場工事",
      description: "作業員の安全を守る作業床の設置。現場の状況に合わせた最適な工法で、効率的で安全な足場を組み上げます。"
    },
    {
      icon: ClipboardCheck,
      title: "現場管理",
      description: "工程管理、安全管理、品質管理を一元化。円滑な現場運営をサポートし、工期遵守と無事故・無災害を目指します。"
    }
  ];

  return (
    <Section id="services" background="light">
      <div className="text-center mb-16">
        <motion.h3
          className="text-corporate-accent font-bold tracking-wider uppercase mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h3>
        <h2 className="text-3xl md:text-4xl font-bold text-corporate-black mb-4">
          <BlurText text="事業内容" delay={0.1} />
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          多角的な視点と専門技術で、あらゆる建設ニーズにお応えします。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            delay={index * 0.1}
          />
        ))}
      </div>
    </Section>
  );
};
