import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function QuickQuoteBar() {
  const [inn, setInn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const el = document.querySelector("#request");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 h-12 glass-strong border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between gap-4">
        <span className="hidden sm:block text-xs text-muted-foreground tracking-widest uppercase">
          Быстрый расчёт
        </span>
        <form onSubmit={handleSubmit} className="flex items-center gap-3 flex-1 max-w-md">
          <input
            type="text"
            placeholder="Введите ИНН для начала работы"
            value={inn}
            onChange={(e) => setInn(e.target.value)}
            className="flex-1 bg-transparent border-b border-white/10 text-sm text-foreground placeholder:text-muted-foreground/50 py-1 px-0 focus:outline-none focus:border-primary transition-colors font-mono"
          />
          <button
            type="submit"
            className="flex items-center gap-1.5 text-primary text-sm font-medium hover:text-primary/80 transition-colors"
          >
            <span className="hidden sm:inline">Начать</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </motion.div>
  );
}