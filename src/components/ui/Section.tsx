import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string;
  fullWidth?: boolean;
  background?: 'white' | 'light' | 'dark' | 'black';
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, containerClassName, fullWidth = false, background = 'white', children, ...props }, ref) => {
    const bgColors = {
      white: 'bg-white',
      light: 'bg-corporate-light',
      dark: 'bg-corporate-dark text-white',
      black: 'bg-corporate-black text-white',
    };

    return (
      <section
        ref={ref}
        className={cn('py-16 md:py-24', bgColors[background], className)}
        {...props}
      >
        <div className={cn(
          'mx-auto px-4 sm:px-6 lg:px-8',
          fullWidth ? 'w-full' : 'max-w-7xl',
          containerClassName
        )}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {children}
          </motion.div>
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';
