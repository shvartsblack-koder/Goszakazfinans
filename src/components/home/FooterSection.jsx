import React from "react";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const footerLinks = {
  "Услуги": [
    "Банковские гарантии",
    "Тендерное кредитование",
    "Финансирование контрактов",
    "Факторинг",
    "Лизинг",
    "Привлечение инвестиций",
  ],
  "Для участников": [
    "Юридические лица",
    "Индивидуальные предприниматели",
    "44-ФЗ",
    "223-ФЗ",
    "ГЧП и ФЦП",
    "Межбюджетные трансферты",
  ],
  "Компания": [
    "О компании",
    "Партнёры",
    "Новости госзаказа",
    "Контакты",
    "Политика конфиденциальности",
    "Реквизиты",
  ],
};

export default function FooterSection() {
  return (
    <footer id="contacts" className="relative border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand & contacts */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src="https://media.base44.com/images/public/6a31381eb797dcc10bc2dd54/459c8e3d9_LOGO7.png"
                alt="ГосЗаказФинанс"
                className="h-24 w-96 object-contain object-left -ml-4"
              />
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Комплексное финансирование системы государственного заказа. 
              Оперативно и профессионально.
            </p>

            <div className="space-y-3">
              <a href="tel:+74997535628" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-mono">8 (499) 753-56-28</span>
              </a>
              <a href="mailto:info@goszakazfinans.ru" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@goszakazfinans.ru</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Москва, Россия</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <span className="text-sm text-muted-foreground/70 hover:text-foreground cursor-pointer transition-colors">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/50">
            © 2010—{new Date().getFullYear()} ООО «ГОСЗАКАЗФИНАНС». Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground/50 font-mono">ИНН 7702123456</span>
            <span className="text-xs text-muted-foreground/50 font-mono">ОГРН 1127700000001</span>
          </div>
        </div>
      </div>

      {/* Bottom spacer for QuickQuoteBar */}
      <div className="h-12" />
    </footer>
  );
}