"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const goals = [
  { name: "Limite de gastos", current: 3750, target: 5000 },
  { name: "Meta de economia", current: 4450, target: 6000 },
  { name: "Investimentos", current: 1200, target: 2000 },
]

export function MonthlyGoals() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Metas do Mês</CardTitle>
        <CardDescription>Acompanhe seu progresso</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {goals.map((goal) => {
          const percentage = Math.round((goal.current / goal.target) * 100)
          return (
            <div key={goal.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{goal.name}</span>
                <span className="text-muted-foreground">{percentage}%</span>
              </div>
              <Progress value={percentage} className="h-2" />
              <p className="text-xs text-muted-foreground">
                R$ {goal.current.toLocaleString("pt-BR")} / R$ {goal.target.toLocaleString("pt-BR")}
              </p>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
