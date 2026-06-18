import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import LiveTicker from "./LiveTicker";

export default function HeroSection({ heroImage }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Modern architectural building"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 grid-overlay opacity-40" />
      </div>

      {/* Ticker */}
      <div className="relative z-10 mt-16 lg:mt-20">
        <LiveTicker />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 w-full py-20 lg:py-0">
          <div className="max-w-4xl">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-muted-foreground tracking-widest uppercase font-mono">
                Система работает
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-heading font-bold text-foreground leading-[0.95] mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              Финансирование
              <br />
              <span className="text-primary">государственных</span>
              <br />
              закупок
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            >
              Банковские гарантии, тендерное кредитование, факторинг и финансирование 
              исполнения контрактов. Комплексные решения для участников и заказчиков госзаказа.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo("#request")}
                className="group flex items-center gap-3 px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300"
              >
                Получить расчёт
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="flex items-center gap-3 px-8 py-4 border border-white/10 text-foreground font-medium rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                Наши услуги
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-8 lg:gap-16 mt-16 pt-8 border-t border-white/5"
            >
              {[
                { value: "15+", label: "лет на рынке" },
                { value: "40+", label: "банков-партнёров" },
                { value: "12 400+", label: "выданных гарантий" },
                { value: "94%", label: "одобрений" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl lg:text-3xl font-bold font-mono text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollTo("#services")}
          className="text-muted-foreground/50 hover:text-muted-foreground transition-colors"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}