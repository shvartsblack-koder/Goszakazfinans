import React from "react";
import { motion } from "framer-motion";
import { FileText, Search, CheckCircle, Send, HandshakeIcon } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Подача заявки",
    description: "Заполните форму на сайте или позвоните по телефону. Для экспресс-оценки достаточно ИНН и номера тендера.",
  },
  {
    icon: Search,
    number: "02",
    title: "Анализ и подбор",
    description: "Наши специалисты анализируют вашу заявку и подбирают оптимальные условия среди 40+ банков-партнёров.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Согласование",
    description: "Формируем пакет документов и проводим согласование с банком. Минимум бюрократии и формальностей.",
  },
  {
    icon: Send,
    number: "04",
    title: "Выдача",
    description: "Получение банковской гарантии, кредита или другого финансового продукта в кратчайшие сроки.",
  },
  {
    icon: HandshakeIcon,
    number: "05",
    title: "Сопровождение",
    description: "Полное сопровождение на всех этапах исполнения контракта. Решение вопросов в оперативном режиме.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <span className="text-xs text-primary font-mono tracking-widest uppercase mb-4 block">
            Процесс
          </span>
          <h2 className="font-heading font-bold text-foreground leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Как это работает
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="relative group"
              >
                {/* Step indicator */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-secondary border border-white/10 flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                  <step.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <span className="text-5xl font-mono font-bold text-white/[0.03] absolute top-0 right-0 select-none">
                  {step.number}
                </span>

                <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}