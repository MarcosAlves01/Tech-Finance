"use client"

import { TrendingUp, TrendingDown, Wallet, PiggyBank } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Summary } from "../types"

type SummaryType = {
  summary: Summary | null
}

export function SummaryCards({ summary }: SummaryType) {
  if (!summary) return null

  const summaryData = [
    {
      title: "Saldo Total",
      value: Number(summary.balance).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
      icon: Wallet,
    },
    {
      title: "Receitas",
      value: Number(summary.total_income).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
      icon: TrendingUp,
    },
    {
      title: "Despesas",
      value: Number(summary.total_expense).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
      icon: TrendingDown,
    },
    {
      title: "Transações",
      value: String(summary.transaction_count),
      icon: PiggyBank,
    },
  ]
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
            {/* <p className={`text-xs mt-1 ${item.trend === "up" ? "text-emerald-500" : "text-red-500"}`}>
              {item.change} em relação ao mês anterior
            </p> */}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
