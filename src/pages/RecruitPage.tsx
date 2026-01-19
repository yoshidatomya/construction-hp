import React from 'react';
import { Section } from '../components/ui/Section';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/Button';
import { CheckCircle2, HardHat, DollarSign, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlurText } from '../components/ui/BlurText';
import { ClickSpark } from '../components/ui/ClickSpark';

export const RecruitPage = () => {
    return (
        <div className="min-h-screen bg-corporate-light font-sans text-corporate-black">
            <Navbar />
            <main>
                {/* Hero */}
                <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img src="/assets/site-12.jpg" alt="Recruit Hero" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>
                    <div className="relative z-10 text-center text-white max-w-4xl px-4">
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <BlurText text="未来を共に創る仲間を募集" delay={0.2} />
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-gray-200"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            経験者も未経験者も歓迎。あなたの力を健組で活かしませんか？
                        </motion.p>
                    </div>
                </div>

                {/* Requirements */}
                <Section id="requirements" background="white">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-corporate-black mb-4">募集要項</h2>
                            <p className="text-gray-600">現在、以下の職種で正社員を募集しています。</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-corporate-accent/50 transition-colors">
                                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                                    <HardHat className="w-6 h-6 text-corporate-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">現場スタッフ（鉄骨・鍛冶・鳶鳶）</h3>
                                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-corporate-accent shrink-0 mt-0.5" />
                                        <span>鉄骨建方、鍛冶工事、足場組立など</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-corporate-accent shrink-0 mt-0.5" />
                                        <span>未経験者歓迎（丁寧に指導します）</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-corporate-accent shrink-0 mt-0.5" />
                                        <span>資格取得支援制度あり</span>
                                    </li>
                                </ul>
                                <div className="flex items-center gap-2 text-corporate-black font-bold text-lg">
                                    <DollarSign className="w-5 h-5 text-gray-400" />
                                    月給 25万円〜90万円
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-corporate-accent/50 transition-colors">
                                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                                    <Users className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">現場管理（施工管理技士）</h3>
                                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-corporate-accent shrink-0 mt-0.5" />
                                        <span>現場の工程管理、安全管理、品質管理</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-corporate-accent shrink-0 mt-0.5" />
                                        <span>経験者優遇、有資格者手当あり</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-corporate-accent shrink-0 mt-0.5" />
                                        <span>キャリアアップを目指したい方</span>
                                    </li>
                                </ul>
                                <div className="flex items-center gap-2 text-corporate-black font-bold text-lg">
                                    <DollarSign className="w-5 h-5 text-gray-400" />
                                    月給 30万円〜120万円
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-corporate-accent/50 transition-colors">
                                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                                    <Clock className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">勤務条件・福利厚生</h3>
                                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-corporate-accent shrink-0 mt-0.5" />
                                        <span>8:00 - 17:00 (休憩あり)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-corporate-accent shrink-0 mt-0.5" />
                                        <span>日曜、祝日、GW、夏季、年末年始</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-corporate-accent shrink-0 mt-0.5" />
                                        <span>社会保険完備、昇給賞与あり</span>
                                    </li>
                                </ul>
                                <div className="text-sm text-gray-500">
                                    ※ 現場により早出・残業あり
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Entry Form */}
                <Section id="entry" background="light">
                    <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold mb-2">エントリーフォーム</h2>
                            <p className="text-gray-500 text-sm">下記フォームよりご応募ください。担当者より折り返しご連絡いたします。</p>
                        </div>

                        <form
                            action="https://formsubmit.co/ken.yo2678@gmail.com"
                            method="POST"
                            className="space-y-6"
                        >
                            <input type="hidden" name="_subject" value="採用への応募 - 合同会社健組HP" />
                            <input type="hidden" name="_next" value={window.location.href} />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">お名前</label>
                                    <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-corporate-accent outline-none" placeholder="健組 太郎" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">フリガナ</label>
                                    <input type="text" name="kana" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-corporate-accent outline-none" placeholder="ケングミ タロウ" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">電話番号</label>
                                    <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-corporate-accent outline-none" placeholder="090-1234-5678" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">メールアドレス</label>
                                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-corporate-accent outline-none" placeholder="example@email.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">希望職種</label>
                                <select name="job_type" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-corporate-accent outline-none">
                                    <option>現場スタッフ</option>
                                    <option>現場管理</option>
                                    <option>その他</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">志望動機・質問など</label>
                                <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-corporate-accent outline-none resize-none"></textarea>
                            </div>

                            <ClickSpark sparkColor="#f97316" sparkCount={12}>
                                <Button fullWidth size="lg" type="submit">応募する</Button>
                            </ClickSpark>
                        </form>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
};
