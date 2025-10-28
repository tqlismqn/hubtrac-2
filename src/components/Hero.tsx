'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Truck } from 'lucide-react';
import { Dictionary } from '@/lib/i18n';
import { animations } from '@/styles/design-system';

interface HeroProps {
  dict: Dictionary;
  onLanguageChange?: (locale: string) => void;
  currentLocale?: string;
}

export default function Hero({ dict }: HeroProps) {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="p-4 bg-red-600 rounded-2xl">
              <Truck className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Logo/Brand */}
          <motion.div
            {...animations.fadeIn}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-2 tracking-tight">
              HUBTRAC
            </h1>
            <div className="h-1 w-32 bg-red-600 mx-auto" />
          </motion.div>

          {/* Main headline */}
          <motion.h2
            {...animations.slideUp}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight"
          >
            {dict.hero.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            {...animations.slideUp}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {dict.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...animations.slideUp}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-red-600/50 hover:scale-105"
            >
              {dict.hero.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToServices}
              className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10"
            >
              {dict.hero.ctaSecondary}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
