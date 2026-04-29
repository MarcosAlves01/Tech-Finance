"use client"

import { TrendingUp, TrendingDown, Wallet, PiggyBank } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const summaryData = [
  {
    title: "Saldo Total",
    value: "R$ 12.450,00",
    change: "+4.5%",
    trend: "up" as const,
    icon: Wallet,
  },
  {
    title: "Receitas",
    value: "R$ 8.200,00",
    change: "+12.3%",
    trend: "up" as const,
    icon: TrendingUp,
  },
  {
    title: "Despesas",
    value: "R$ 3.750,00",
    change: "-2.1%",
    trend: "down" as const,
    icon: TrendingDown,
  },
  {
    title: "Economia",
    value: "R$ 4.450,00",
    change: "+8.7%",
    trend: "up" as const,
    icon: PiggyBank,
  },
]

export function SummaryCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {summaryData.map((item) => (
        <Card key={item.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {item.title}
            </CardTitle>
            <item.icon className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className={`text-xs mt-1 ${item.trend === "up" ? "text-emerald-500" : "text-red-500"}`}>
              {item.change} em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
