import React from "react";
import { motion } from "framer-motion";
import { Zap, Lock, BarChart3, Headphones, FileCheck, Clock } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    number: "01",
    title: "Скорость",
    description: "Рассмотрение заявки от 1 рабочего дня. Оперативное принятие решений на каждом этапе.",
  },
  {
    icon: Lock,
    number: "02",
    title: "Гарантия результата",
    description: "94% одобрений заявок. Работаем с 40+ банками, подбираем оптимальное решение для каждого клиента.",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Выгодные условия",
    description: "Минимальные ставки от 1.5% в месяц (18% годовых) благодаря прямым партнёрским отношениям с ведущими банками России.",
  },
  {
    icon: Headphones,
    number: "04",
    title: "Персональный менеджер",
    description: "За каждым клиентом закреплён выделенный специалист, который ведёт проект от заявки до закрытия.",
  },
  {
    icon: FileCheck,
    number: "05",
    title: "Минимум документов",
    description: "Упрощённая процедура подачи заявки. Для экспресс-оценки достаточно ИНН и номера тендера.",
  },
  {
    icon: Clock,
    number: "06",
    title: "Работа 24/7",
    description: "Приём заявок в круглосуточном режиме. Звонок в любой регион России в течение рабочего дня.",
  },
];

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-xs text-primary font-mono tracking-widest uppercase mb-4 block">
            Почему мы
          </span>
          <h2 className="font-heading font-bold text-foreground leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Преимущества
            <br />
            <span className="text-muted-foreground">работы с нами</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {advantages.map((adv, index) => (
            <motion.div
              key={adv.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-background p-8 lg:p-10 group hover:bg-white/[0.02] transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <adv.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-3xl font-mono font-bold text-white/5 group-hover:text-primary/10 transition-colors">
                  {adv.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{adv.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{adv.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}