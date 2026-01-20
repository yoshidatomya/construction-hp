import React from 'react';
import { motion } from 'framer-motion';
import { CountUp } from './ui/CountUp';
import { Briefcase, Users, MapPin, Shield } from 'lucide-react';

export const Stats = () => {
    const stats = [
        {
            icon: Briefcase,
            value: 100,
            suffix: '+',
            label: '施工実績',
            sublabel: 'Projects Completed'
        },
        {
            icon: Users,
            value: 30,
            suffix: '+',
            label: 'スタッフ数',
            sublabel: 'Team Members'
        },
        {
            icon: MapPin,
            value: 10,
            suffix: '+',
            label: '対応エリア',
            sublabel: 'Service Areas'
        },
        {
            icon: Shield,
            value: 99,
            suffix: '%',
            label: '安全達成率',
            sublabel: 'Safety Record'
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-corporate-black via-gray-900 to-corporate-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-corporate-accent rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-corporate-accent rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-corporate-accent/20 mb-4">
                                <stat.icon className="w-7 h-7 text-corporate-accent" />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                <CountUp
                                    end={stat.value}
                                    duration={2.5}
                                    suffix={stat.suffix}
                                />
                            </div>
                            <p className="text-white font-medium text-lg">{stat.label}</p>
                            <p className="text-gray-400 text-sm">{stat.sublabel}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
