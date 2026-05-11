"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { toast } from "sonner"
import { Category } from "@/app/modules/Categories/types"
import { CreateTransactionPayload } from "../types"

type TransactionFormProps = {
    categories: Category[]
    initialData?: Partial<CreateTransactionPayload>
    onSubmit: (payload: CreateTransactionPayload) => Promise<void>
    onCancel: () => void
    submitLabel: string
}

export function TransactionForm({ categories, initialData, onSubmit, onCancel, submitLabel }: TransactionFormProps) {
    const [form, setForm] = useState<CreateTransactionPayload>({
        amount: initialData?.amount || 0,
        description: initialData?.description || "",
        category_id: initialData?.category_id || 0,
        date: initialData?.date || "",
        type: initialData?.type || "expense",
    })
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        if (!form.description || !form.amount || !form.category_id || !form.date) {
            toast.error("Preencha todos os campos")
            return
        }

        setLoading(true)
        await onSubmit(form)
        setLoading(false)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="description">Descrição</Label>
                    <Input
                        id="description"
                        placeholder="Ex: Compras no supermercado"
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="amount">Valor</Label>
                    <Input
                        id="amount"
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        value={form.amount || ""}
                        onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })}
                    />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                    <Label>Tipo</Label>
                    <Select value={form.type} onValueChange={(value) => setForm({ ...form, type: value as "income" | "expense" })}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="income">Receita</SelectItem>
                            <SelectItem value="expense">Despesa</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-2">
                    <Label>Categoria</Label>
                    <Select value={String(form.category_id || "")} onValueChange={(value) => setForm({ ...form, category_id: Number(value) })}>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((cat) => (
                                <SelectItem key={cat.id} value={String(cat.id)}>
                                    {cat.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="date">Data</Label>
                    <Input
                        id="date"
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                    />
                </div>
            </div>

            <div className="flex gap-3">
                <Button type="submit" disabled={loading}>
                    {submitLabel}
                </Button>
                <Button type="button" variant="outline" onClick={onCancel}>
                    Cancelar
                </Button>
            </div>
        </form>
    )
}
