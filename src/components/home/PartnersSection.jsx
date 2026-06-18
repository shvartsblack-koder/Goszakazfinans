import React from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "Сбербанк", metric: "400+ гарантий" },
  { name: "ВТБ", metric: "350+ гарантий" },
  { name: "Газпромбанк", metric: "200+ гарантий" },
  { name: "Альфа-Банк", metric: "180+ гарантий" },
  { name: "Россельхозбанк", metric: "150+ гарантий" },
  { name: "Промсвязьбанк", metric: "120+ гарантий" },
  { name: "Открытие", metric: "100+ гарантий" },
  { name: "Совкомбанк", metric: "90+ гарантий" },
  { name: "Росбанк", metric: "80+ гарантий" },
  { name: "МКБ", metric: "70+ гарантий" },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs text-primary font-mono tracking-widest uppercase mb-4 block">
            Партнёры
          </span>
          <h2 className="font-heading font-bold text-foreground leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Банки-партнёры
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            Работаем с ведущими банками из реестра Минфина для обеспечения 
            максимальной надёжности и выгодных условий.
          </p>
        </motion.div>
      </div>

      {/* Scrolling logos - Row 1 */}
      <div className="relative mb-4">
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 whitespace-nowrap"
        >
          {[...partners, ...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="glass flex-shrink-0 px-8 py-5 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-500 group cursor-default"
            >
              <div className="text-lg font-bold text-foreground/30 group-hover:text-foreground transition-colors duration-500 tracking-wide">
                {p.name}
              </div>
              <div className="text-xs text-muted-foreground/40 group-hover:text-primary transition-colors duration-500 font-mono mt-1">
                {p.metric}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scrolling logos - Row 2 (reverse) */}
      <div className="relative">
        <motion.div
          animate={{ x: [-1500, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 whitespace-nowrap"
        >
          {[...partners.reverse(), ...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="glass flex-shrink-0 px-8 py-5 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-500 group cursor-default"
            >
              <div className="text-lg font-bold text-foreground/30 group-hover:text-foreground transition-colors duration-500 tracking-wide">
                {p.name}
              </div>
              <div className="text-xs text-muted-foreground/40 group-hover:text-primary transition-colors duration-500 font-mono mt-1">
                {p.metric}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Trust badges */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mt-16">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {[
            "Реестр Минфина РФ",
            "44-ФЗ / 223-ФЗ",
            "Все регионы России",
            "Аккредитация ЕИС",
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <span className="text-xs text-muted-foreground tracking-wide uppercase font-mono">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}