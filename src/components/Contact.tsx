import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { MapPin, Phone, Mail } from 'lucide-react';
import { BlurText } from './ui/BlurText';
import { ClickSpark } from './ui/ClickSpark';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <Section id="contact" background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-corporate-accent font-bold tracking-wider uppercase mb-2">Contact Us</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-black mb-6">
            <BlurText text="お問い合わせ" delay={0.1} />
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            建設・土木工事に関するご相談、お見積りなど、お気軽にお問い合わせください。
            お急ぎの方はお電話にてご連絡ください。
          </p>

          <div className="space-y-6">
            {[
              {
                icon: MapPin,
                title: "所在地",
                content: "〒100-0001",
                subcontent: "東京都千代田区千代田1-1"
              },
              {
                icon: Phone,
                title: "お電話",
                content: "03-1234-5678",
                subcontent: "平日 9:00 - 18:00"
              },
              {
                icon: Mail,
                title: "メール",
                content: "info@yamadabuild.co.jp",
                subcontent: null
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-corporate-accent/20 to-orange-100 p-3 rounded-xl group-hover:from-corporate-accent group-hover:to-orange-500 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-corporate-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-corporate-black">{item.title}</h4>
                  <p className="text-gray-600">{item.content}</p>
                  {item.subcontent && <p className="text-sm text-gray-500">{item.subcontent}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          className="bg-gradient-to-br from-corporate-light to-white p-8 rounded-2xl shadow-lg border border-gray-100"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                お名前 <span className="text-corporate-accent">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-corporate-accent focus:border-transparent outline-none transition-all bg-white"
                placeholder="山田 太郎"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                メールアドレス <span className="text-corporate-accent">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-corporate-accent focus:border-transparent outline-none transition-all bg-white"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                お問い合わせ内容 <span className="text-corporate-accent">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-corporate-accent focus:border-transparent outline-none transition-all bg-white resize-none"
                placeholder="ご相談内容をご記入ください"
              ></textarea>
            </div>
            <ClickSpark sparkColor="#f97316" sparkCount={12}>
              <Button fullWidth size="lg">送信する</Button>
            </ClickSpark>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};
