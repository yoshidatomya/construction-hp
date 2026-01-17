import React from 'react';
import { Section } from './ui/Section';
import { Building2, HardHat, Truck, Ruler } from 'lucide-react';
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
      icon: Building2,
      title: "建築工事",
      description: "オフィスビル、商業施設、マンションなど、多岐にわたる建築物の施工を行います。機能性とデザイン性を両立させた空間を創造します。"
    },
    {
      icon: Truck,
      title: "土木工事",
      description: "道路、橋梁、トンネルなどの社会インフラ整備。確かな技術で、地域の安全と利便性を支える基盤を作ります。"
    },
    {
      icon: HardHat,
      title: "インフラ整備",
      description: "上下水道、ガス、電気などのライフライン整備。人々の生活に欠かせない重要なインフラを守り、更新します。"
    },
    {
      icon: Ruler,
      title: "設計・施工管理",
      description: "企画・設計から施工管理まで、トータルでサポート。徹底した品質管理と工程管理で、プロジェクトを成功に導きます。"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
