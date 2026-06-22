import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { isValidInn, VALIDATION_MESSAGES } from "@/lib/formValidation";

export default function QuickQuoteBar() {
  const [inn, setInn] = useState("");
  const [innError, setInnError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inn.trim() && !isValidInn(inn)) {
      setInnError(VALIDATION_MESSAGES.inn);
      return;
    }

    setInnError("");
    if (inn.trim()) {
      sessionStorage.setItem("quickQuoteInn", inn.trim());
    }

    const el = document.querySelector("#request");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 h-12 glass-strong border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between gap-4">
        <span className="hidden sm:block text-xs text-muted-foreground tracking-widest uppercase">
          Быстрый расчёт
        </span>
        <form onSubmit={handleSubmit} noValidate className="flex flex-col flex-1 max-w-md">
          <div className="flex items-center gap-3">
            <input
              type="text"
              inputMode="numeric"
              placeholder="Введите ИНН для начала работы"
              value={inn}
              onChange={(e) => {
                setInn(e.target.value);
                if (innError) setInnError("");
              }}
              className={`flex-1 bg-transparent border-b text-sm text-foreground placeholder:text-muted-foreground/50 py-1 px-0 focus:outline-none transition-colors font-mono ${innError ? 'border-destructive' : 'border-white/10 focus:border-primary'}`}
            />
            <button
              type="submit"
              className="flex items-center gap-1.5 text-primary text-sm font-medium hover:text-primary/80 transition-colors"
            >
              <span className="hidden sm:inline">Начать</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          {innError && <p className="text-destructive text-[10px] mt-0.5">{innError}</p>}
        </form>
      </div>
    </motion.div>
  );
}
