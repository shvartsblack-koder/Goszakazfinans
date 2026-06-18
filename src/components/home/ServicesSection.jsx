import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, CreditCard, Landmark, TrendingUp, Briefcase, ArrowRight, X } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Банковские гарантии",
    subtitle: "Обеспечение контрактов",
    description: "Оформление банковских гарантий для участия в государственных закупках по 44-ФЗ и 223-ФЗ. Работаем с реестром банковских гарантий Минфина.",
    details: [
      "Гарантии на обеспечение заявок",
      "Гарантии на исполнение контрактов",
      "Гарантии возврата аванса",
      "Гарантии гарантийных обязательств",
    ],
    rate: "от 1.5% / мес",
    term: "от 1 дня",
  },
  {
    icon: CreditCard,
    title: "Тендерное кредитование",
    subtitle: "Обеспечение заявок",
    description: "Кредитование для обеспечения заявок на участие в конкурсах и аукционах. Быстрое рассмотрение и гибкие условия.",
    details: [
      "Кредиты на обеспечение заявок",
      "Овердрафт для тендеров",
      "Кредитные линии",
      "Бридж-финансирование",
    ],
    rate: "от 1.5% / мес",
    term: "от 1 дня",
  },
  {
    icon: Landmark,
    title: "Финансирование контрактов",
    subtitle: "Исполнение госконтрактов",
    description: "Целевое финансирование на исполнение государственных контрактов. Средства направляются непосредственно на выполнение работ.",
    details: [
      "Кредит на исполнение контракта",
      "Финансирование под контракт",
      "Целевое кредитование",
      "Проектное финансирование",
    ],
    rate: "от 18% годовых",
    term: "от 3 дней",
  },
  {
    icon: TrendingUp,
    title: "Факторинг",
    subtitle: "Финансирование поставок",
    description: "Факторинговое финансирование для поставщиков государственных заказчиков. Получите оплату сразу после отгрузки.",
    details: [
      "Факторинг с регрессом",
      "Факторинг без регресса",
      "Реверсивный факторинг",
      "Международный факторинг",
    ],
    rate: "от 1.5% / мес",
    term: "от 1 дня",
  },
  {
    icon: Briefcase,
    title: "Лизинг и инвестиции",
    subtitle: "Привлечение капитала",
    description: "Лизинговые программы и привлечение инвестиций для реализации крупных государственных проектов.",
    details: [
      "Лизинг оборудования",
      "Лизинг транспорта",
      "ГЧП-проекты",
      "Инвестиционное финансирование",
    ],
    rate: "индивидуально",
    term: "от 5 дней",
  },
];

export default function ServicesSection({ bgImage }) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="services" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img src={bgImage} alt="Financial architecture" className="w-full h-full object-cover opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <span className="text-xs text-primary font-mono tracking-widest uppercase mb-4 block">
            Продукты
          </span>
          <h2 className="font-heading font-bold text-foreground leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Финансовые инструменты
            <br />
            <span className="text-muted-foreground">для госзаказа</span>
          </h2>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
              className={`group relative p-6 lg:p-8 rounded-xl border cursor-pointer transition-all duration-500 ${
                activeCard === index
                  ? "glass-strong border-primary/30 scale-[1.02]"
                  : "glass border-white/5 hover:border-white/10"
              } ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300 ${
                activeCard === index ? "bg-primary/20" : "bg-white/5"
              }`}>
                <service.icon className={`w-5 h-5 transition-colors duration-300 ${
                  activeCard === index ? "text-primary" : "text-muted-foreground"
                }`} />
              </div>

              <p className="text-xs text-muted-foreground font-mono tracking-wider uppercase mb-2">{service.subtitle}</p>
              <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.description}</p>

              {/* Rate & term */}
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <span className="text-xs text-muted-foreground/60 block">Ставка</span>
                  <span className="text-sm font-mono font-semibold text-primary">{service.rate}</span>
                </div>
                <div className="rule-line-v h-8" />
                <div>
                  <span className="text-xs text-muted-foreground/60 block">Срок</span>
                  <span className="text-sm font-mono font-semibold text-foreground">{service.term}</span>
                </div>
              </div>

              {/* Expanded details */}
              <AnimatePresence>
                {activeCard === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="rule-line mb-4" />
                    <ul className="space-y-2">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Arrow */}
              <div className="flex justify-end mt-4">
                <ArrowRight className={`w-4 h-4 transition-all duration-300 ${
                  activeCard === index ? "text-primary translate-x-1" : "text-muted-foreground/30"
                }`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}