"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { IncomeVsExpense } from "../types"

const chartConfig = {
  receitas: { label: "Receitas", color: "var(--chart-1)" },
  despesas: { label: "Despesas", color: "var(--chart-3)" },
} satisfies ChartConfig

type OverviewChartProps = {
  data: IncomeVsExpense[] | null
}

export function OverviewChart({ data }: OverviewChartProps) {
  if (!data) return null

  const chartData = data.reduce((acc, item) => {
    const existing = acc.find((entry) => entry.month === item.month)
    if (existing) {
      if (item.type === "income") existing.receitas = Number(item.total)
      else existing.despesas = Number(item.total)
    } else {
      acc.push({
        month: item.month,
        receitas: item.type === "income" ? Number(item.total) : 0,
        despesas: item.type === "expense" ? Number(item.total) : 0,
      })
    }
    return acc
  }, [] as { month: string; receitas: number; despesas: number }[])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Visão Geral</CardTitle>
        <CardDescription>Receitas vs Despesas - Últimos meses</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="receitas" fill="var(--color-receitas)" radius={4} />
            <Bar dataKey="despesas" fill="var(--color-despesas)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
