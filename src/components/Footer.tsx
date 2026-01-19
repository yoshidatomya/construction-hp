import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from './ui/GradientText';

export const Footer = () => {
  return (
    <footer className="bg-corporate-black text-white py-16 border-t border-gray-800 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-corporate-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-corporate-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#" className="mb-6 block">
              <img src="/assets/logo.png" alt="Kengumi LLC" className="h-16 w-auto object-contain bg-white rounded-lg p-1" />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              鉄骨・鍛冶・鳶・足場工事のプロフェッショナル集団。<br />
              合同会社健組（けんぐみ）
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-6 text-gray-200 text-lg">Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { name: 'ホーム', href: '#hero' },
                { name: '会社概要', href: '#about' },
                { name: '事業内容', href: '#services' },
                { name: '採用情報', href: '#recruit' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-corporate-accent transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-corporate-accent mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-6 text-gray-200 text-lg">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { name: 'プライバシーポリシー', href: '#' },
                { name: 'サイトマップ', href: '#' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-corporate-accent transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-corporate-accent mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          &copy; {new Date().getFullYear()} Kengumi LLC. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};
