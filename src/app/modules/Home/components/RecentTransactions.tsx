"use client"

import { ArrowDownLeft, ArrowUpRight } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const transactions = [
  { id: 1, description: "Salário", value: "R$ 5.200,00", type: "receita", date: "01/06", category: "Trabalho" },
  { id: 2, description: "Aluguel", value: "R$ 1.500,00", type: "despesa", date: "05/06", category: "Moradia" },
  { id: 3, description: "Freelance", value: "R$ 3.000,00", type: "receita", date: "10/06", category: "Trabalho" },
  { id: 4, description: "Supermercado", value: "R$ 850,00", type: "despesa", date: "12/06", category: "Alimentação" },
  { id: 5, description: "Internet", value: "R$ 120,00", type: "despesa", date: "15/06", category: "Serviços" },
]

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transações Recentes</CardTitle>
        <CardDescription>Últimas movimentações financeiras</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactions.map((t) => (
          <div key={t.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`flex size-9 items-center justify-center rounded-full ${
                t.type === "receita" ? "bg-emerald-500/10" : "bg-red-500/10"
              }`}>
                {t.type === "receita"
                  ? <ArrowUpRight className="size-4 text-emerald-500" />
                  : <ArrowDownLeft className="size-4 text-red-500" />
                }
              </div>
              <div>
                <p className="text-sm font-medium">{t.description}</p>
                <p className="text-xs text-muted-foreground">{t.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary">{t.category}</Badge>
              <span className={`text-sm font-semibold ${
                t.type === "receita" ? "text-emerald-500" : "text-red-500"
              }`}>
                {t.type === "receita" ? "+" : "-"}{t.value}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
