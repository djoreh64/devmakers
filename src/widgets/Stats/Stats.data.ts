import { Award, Users, TrendingUp, Zap } from "lucide-react";

export interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

export const stats: Stat[] = [
  { icon: Award, value: 150, suffix: "+", label: "Завершенных проектов" },
  { icon: Users, value: 98, suffix: "%", label: "Довольных клиентов" },
  { icon: TrendingUp, value: 5, suffix: "x", label: "Средний ROI" },
  { icon: Zap, value: 24, suffix: "/7", label: "Поддержка" },
];
