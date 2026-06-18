import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Shield, Clock, Activity } from "lucide-react";

const tickerItems = [
  { icon: TrendingUp, label: "Ставка от", value: "1.5% / мес", color: "text-green-400" },
  { icon: Shield, label: "Гарантий выдано", value: "12,400+", color: "text-primary" },
  { icon: Clock, label: "Срок рассмотрения", value: "от 1 дня", color: "text-amber-400" },
  { icon: Activity, label: "Одобрение", value: "94%", color: "text-green-400" },
  { icon: TrendingUp, label: "Сумма до", value: "500 млн ₽", color: "text-primary" },
  { icon: Shield, label: "Банков-партнёров", value: "40+", color: "text-amber-400" },
];

export default function LiveTicker() {
  return (
    <div className="w-full overflow-hidden border-b border-white/5 bg-black/40 backdrop-blur-sm">
      <motion.div
        animate={{ x: [0, -1200] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-12 py-2.5 px-4 whitespace-nowrap"
      >
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <item.icon className={`w-3 h-3 ${item.color}`} />
            <span className="text-xs text-muted-foreground">{item.label}</span>
            <span className={`text-xs font-mono font-semibold ${item.color}`}>{item.value}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}