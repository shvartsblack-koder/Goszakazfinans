import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie_consent_accepted";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) !== "true") {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-background/95 backdrop-blur-md"
      role="dialog"
      aria-label="Уведомление об использовании cookie"
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          Мы используем файлы cookie для корректной работы сайта и улучшения
          пользовательского опыта. Продолжая пользоваться сайтом, вы соглашаетесь
          с их использованием.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={accept}
            className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}
