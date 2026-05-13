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
import { Transaction } from "../types"

type RecentTransactionsProps = {
  transactions: Transaction[] | null
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  if (!transactions) return null

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
              <div className={`flex size-9 items-center justify-center rounded-full ${t.type === "income" ? "bg-emerald-500/10" : "bg-red-500/10"
                }`}>
                {t.type === "income"
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
              <Badge variant="secondary">{t.category_name}</Badge>
              <span className={`text-sm font-semibold ${t.type === "income" ? "text-emerald-500" : "text-red-500/90"
                }`}>
                {t.type === "income" ? "+" : "-"}
                {Number(t.amount).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
