import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Loader2, Phone, Mail, Building2, MapPin, Calendar, Banknote } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function RequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    phone: "",
    email: "",
    company: "",
    city: "",
    regDate: "",
    amount: "",
    term: "",
    deadline: "",
    lotUrl: "",
    lotNumber: "",
    note: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="request" className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-strong rounded-2xl p-12 lg:p-16 text-center max-w-2xl mx-auto"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Заявка отправлена</h3>
            <p className="text-muted-foreground">
              Наш специалист свяжется с вами в течение рабочего дня. 
              Спасибо за обращение в ГОСЗАКАЗФИНАНС.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="request" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs text-primary font-mono tracking-widest uppercase mb-4 block">
                Заявка
              </span>
              <h2 className="font-heading font-bold text-foreground leading-tight mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
                Оставьте заявку
                <br />
                <span className="text-muted-foreground">и мы перезвоним</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Заполните форму, и наш специалист перезвонит в любой регион России 
                в течение рабочего дня. Для экспресс-оценки достаточно указать тип 
                услуги, контакты и сумму.
              </p>

              <div className="space-y-4">
                <a href="tel:+74997535628" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-mono font-medium">8 (499) 753-56-28</div>
                    <div className="text-xs text-muted-foreground">Телефон для консультаций</div>
                  </div>
                </a>
                <a href="mailto:info@goszakazfinans.ru" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">info@goszakazfinans.ru</div>
                    <div className="text-xs text-muted-foreground">Электронная почта</div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-6 lg:p-8 space-y-6">
              {/* Service type */}
              <div>
                <label className="text-xs text-muted-foreground mb-2 block tracking-wide uppercase">Тип услуги *</label>
                <Select value={formData.service} onValueChange={(v) => handleChange("service", v)}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-foreground">
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="guarantee">Банковская гарантия</SelectItem>
                    <SelectItem value="tender_credit">Тендерное кредитование</SelectItem>
                    <SelectItem value="contract_finance">Финансирование исполнения контракта</SelectItem>
                    <SelectItem value="factoring">Лизинг и факторинг</SelectItem>
                    <SelectItem value="investment">Привлечение инвестиций</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Contact info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block tracking-wide uppercase">Контактное лицо *</label>
                  <Input
                    placeholder="ФИО"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/40"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block tracking-wide uppercase">Телефон *</label>
                  <Input
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/40 font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block tracking-wide uppercase">E-mail</label>
                  <Input
                    placeholder="email@company.ru"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/40"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block tracking-wide uppercase">Компания</label>
                  <Input
                    placeholder="Название организации"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/40"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block tracking-wide uppercase">Город</label>
                  <Input
                    placeholder="Город"
                    value={formData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/40"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block tracking-wide uppercase">Дата регистрации</label>
                  <Input
                    type="date"
                    value={formData.regDate}
                    onChange={(e) => handleChange("regDate", e.target.value)}
                    className="bg-white/5 border-white/10 text-foreground"
                  />
                </div>
              </div>

              {/* Financial details */}
              <div className="rule-line" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block tracking-wide uppercase">Сумма, ₽</label>
                  <Input
                    placeholder="Сумма кредита/гарантии"
                    value={formData.amount}
                    onChange={(e) => handleChange("amount", e.target.value)}
                    className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/40 font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block tracking-wide uppercase">Срок</label>
                  <Input
                    placeholder="Срок использования"
                    value={formData.term}
                    onChange={(e) => handleChange("term", e.target.value)}
                    className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/40"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block tracking-wide uppercase">Крайний срок</label>
                  <Input
                    type="date"
                    value={formData.deadline}
                    onChange={(e) => handleChange("deadline", e.target.value)}
                    className="bg-white/5 border-white/10 text-foreground"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block tracking-wide uppercase">Номер лота</label>
                  <Input
                    placeholder="Только цифры"
                    value={formData.lotNumber}
                    onChange={(e) => handleChange("lotNumber", e.target.value)}
                    className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/40 font-mono"
                  />
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="text-xs text-muted-foreground mb-2 block tracking-wide uppercase">Примечание</label>
                <Textarea
                  placeholder="Специализация компании, описание заказа и пр."
                  value={formData.note}
                  onChange={(e) => handleChange("note", e.target.value)}
                  rows={3}
                  className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/40 resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="pd-consent"
                  checked={consentChecked}
                  onCheckedChange={(checked) => setConsentChecked(checked === true)}
                  className="mt-0.5"
                />
                <label
                  htmlFor="pd-consent"
                  className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                >
                  Я даю согласие на обработку персональных данных в соответствии с{" "}
                  <span className="text-primary hover:underline">политикой конфиденциальности</span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || !consentChecked}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-all duration-300"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Отправить заявку
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}