"use client"

import { ArrowDownLeft, ArrowUpRight, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Transaction } from "../types"

type TransactionsListProps = {
    transactions: Transaction[]
    onEdit: (transaction: Transaction) => void
    onDelete: (id: number) => void
}

export function TransactionsList({ transactions, onEdit, onDelete }: TransactionsListProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Transações</CardTitle>
                <CardDescription>Histórico de movimentações financeiras</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                {transactions.length === 0 && (
                    <p className="text-sm text-muted-foreground">Nenhuma transação cadastrada.</p>
                )}
                {transactions.map((t) => (
                    <div key={t.id} className="flex items-center justify-between rounded-lg border p-3">
                        <div className="flex items-center gap-3">
                            <div className={`flex size-9 items-center justify-center rounded-full ${
                                t.type === "income" ? "bg-emerald-500/10" : "bg-red-500/10"
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
                            <span className={`text-sm font-semibold ${
                                t.type === "income" ? "text-emerald-500" : "text-red-500"
                            }`}>
                                {t.type === "income" ? "+" : "-"}
                                {Number(t.amount).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                            </span>
                            <Button variant="ghost" size="icon" onClick={() => onEdit(t)}>
                                <Pencil className="size-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => onDelete(t.id)}>
                                <Trash2 className="size-4 text-red-500" />
                            </Button>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
