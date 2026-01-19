import React, { useState } from 'react';
import { Section } from './ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { BlurText } from './ui/BlurText';
import { ArrowRight, X } from 'lucide-react';

export const News = () => {
    const [selectedNews, setSelectedNews] = useState<typeof newsItems[0] | null>(null);

    const newsItems = [
        {
            date: "2024.01.19",
            category: "お知らせ",
            title: "ホームページをリニューアルいたしました。",
            content: "平素は格別のご高配を賜り、厚く御礼申し上げます。この度、弊社ウェブサイトを全面的にリニューアルいたしました。より分かりやすく、使いやすいサイトを目指して構成やデザインを見直しました。今後ともよろしくお願い申し上げます。"
        },
        {
            date: "2023.12.15",
            category: "採用情報",
            title: "現場スタッフ（正社員）の募集を開始しました。",
            content: "業務拡大に伴い、現場スタッフ（鉄骨・鍛冶・鳶工事）の募集を開始しました。未経験者も大歓迎です。詳細は採用情報ページをご覧ください。"
        },
        {
            date: "2023.11.20",
            category: "実績",
            title: "千葉県内の大型物流倉庫の鉄骨工事が完了しました。",
            content: "千葉県船橋市内で施工しておりました、大型物流倉庫の鉄骨工事が無事完了いたしました。関係者の皆様、ご協力ありがとうございました。"
        }
    ];

    return (
        <Section id="news" background="white" className="py-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <motion.h3
                        className="text-corporate-accent font-bold tracking-wider uppercase mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        News & Topics
                    </motion.h3>
                    <h2 className="text-3xl font-bold text-corporate-black">
                        <BlurText text="新着情報" delay={0.1} />
                    </h2>
                </div>

                <div className="space-y-4">
                    {newsItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group flex flex-col md:flex-row items-start md:items-center gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md hover:border-corporate-accent/30 transition-all duration-300 cursor-pointer"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedNews(item)}
                        >
                            <div className="flex items-center gap-4 min-w-[200px]">
                                <span className="text-gray-500 font-medium text-sm">{item.date}</span>
                                <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.category === 'お知らせ' ? 'bg-blue-100 text-blue-600' :
                                    item.category === '採用情報' ? 'bg-green-100 text-green-600' :
                                        'bg-orange-100 text-orange-600'
                                    }`}>
                                    {item.category}
                                </span>
                            </div>
                            <h4 className="flex-grow text-gray-800 font-medium group-hover:text-corporate-accent transition-colors">
                                {item.title}
                            </h4>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-corporate-accent transform group-hover:translate-x-1 transition-all" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedNews && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                        onClick={() => setSelectedNews(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedNews(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <div className="mb-6">
                                <span className="text-sm text-gray-500 block mb-2">{selectedNews.date}</span>
                                <h3 className="text-xl font-bold text-gray-900">{selectedNews.title}</h3>
                            </div>
                            <div className="text-gray-600 leading-relaxed">
                                {selectedNews.content}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
};
