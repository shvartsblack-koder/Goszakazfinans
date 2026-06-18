import React from "react";
import { motion } from "framer-motion";
import { Building2, Users, Award, Globe } from "lucide-react";

const features = [
  { icon: Building2, title: "Системный подход", text: "Комплексное финансирование всех этапов участия в госзакупках" },
  { icon: Users, title: "Экспертная команда", text: "Специалисты с опытом работы в банковской сфере и госзаказе" },
  { icon: Award, title: "Надёжность", text: "Работаем только с аккредитованными финансовыми институтами" },
  { icon: Globe, title: "Вся Россия", text: "Оказываем услуги компаниям во всех регионах Российской Федерации" },
];

export default function AboutSection({ bgImage }) {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgImage} alt="City grid aerial view" className="w-full h-full object-cover opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs text-primary font-mono tracking-widest uppercase mb-4 block">
              О компании
            </span>
            <h2 className="font-heading font-bold text-foreground leading-tight mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
              Комплексное финансирование
              <br />
              <span className="text-muted-foreground">системы госзаказа</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ООО «ГОСЗАКАЗФИНАНС» — профессиональный финансовый оператор, специализирующийся 
                на комплексном финансировании участников системы государственного заказа.
              </p>
              <p>
                Мы предоставляем полный спектр финансовых услуг: банковские гарантии, тендерное 
                кредитование, финансирование исполнения контрактов, лизинг, факторинг и привлечение 
                инвестиций для реализации проектов ГЧП, ФЦП и межбюджетных трансфертов.
              </p>
              <p>
                Наша задача — оперативно и профессионально решить финансовые вопросы 
                участников и заказчиков системы госзаказа во всех регионах России.
              </p>
            </div>
          </motion.div>

          {/* Right column - feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-500 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}