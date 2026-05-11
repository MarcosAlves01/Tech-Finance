"use client"

import { useEffect, useState } from "react"
import { toast } from "sonner"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Transaction, CreateTransactionPayload } from "@/app/modules/Transactions/types"
import { Category } from "@/app/modules/Categories/types"
import { TransactionsList } from "@/app/modules/Transactions/components/TransactionsList"
import { TransactionForm } from "@/app/modules/Transactions/components/TransactionForm"
import { TransactionsFilters } from "@/app/modules/Transactions/components/TransactionsFilters"
import {
    getTransactionsServices,
    createTransactionServices,
    updateTransactionServices,
    deleteTransactionServices
} from "@/app/modules/Transactions/transactions.services"
import { getCategoriesServices } from "@/app/modules/Categories/categories.services"

export default function TransactionsPage() {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [categories, setCategories] = useState<Category[]>([])
    const [showForm, setShowForm] = useState(false)
    const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null)

    const [filterType, setFilterType] = useState("all")
    const [filterDateFrom, setFilterDateFrom] = useState("")
    const [filterDateTo, setFilterDateTo] = useState("")

    useEffect(() => {
        loadTransactions()
        loadCategories()
    }, [])

    async function loadCategories() {
        const data = await getCategoriesServices()
        if (data) setCategories(data.items)
    }

    async function loadTransactions() {
        const params = buildFilterParams()
        const data = await getTransactionsServices(params)
        if (data) setTransactions(data.items)
    }

    function buildFilterParams() {
        const params = new URLSearchParams()
        if (filterType !== "all") params.set("type", filterType)
        if (filterDateFrom) params.set("date_from", filterDateFrom)
        if (filterDateTo) params.set("date_to", filterDateTo)
        params.set("limit", "20")
        return params.toString()
    }

    async function handleCreate(payload: CreateTransactionPayload) {
        const response = await createTransactionServices(payload)
        if (response) {
            toast.success("Transação criada com sucesso")
            setShowForm(false)
            loadTransactions()
        } else {
            toast.error("Erro ao criar transação")
        }
    }

    async function handleUpdate(payload: CreateTransactionPayload) {
        if (!editingTransaction) return
        const response = await updateTransactionServices(editingTransaction.id, payload)
        if (response) {
            toast.success("Transação atualizada com sucesso")
            setEditingTransaction(null)
            loadTransactions()
        } else {
            toast.error("Erro ao atualizar transação")
        }
    }

    async function handleDelete(id: number) {
        const response = await deleteTransactionServices(id)
        if (response) {
            toast.success("Transação excluída com sucesso")
            loadTransactions()
        } else {
            toast.error("Erro ao excluir transação")
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Transações</h2>
                    <p className="text-muted-foreground">Gerencie suas movimentações financeiras</p>
                </div>
                {!showForm && !editingTransaction && (
                    <Button onClick={() => setShowForm(true)}>
                        <Plus className="size-4 mr-2" />
                        Nova Transação
                    </Button>
                )}
            </div>

            {showForm && (
                <TransactionForm
                    categories={categories}
                    onSubmit={handleCreate}
                    onCancel={() => setShowForm(false)}
                    submitLabel="Criar"
                />
            )}

            {editingTransaction && (
                <TransactionForm
                    categories={categories}
                    initialData={{
                        amount: editingTransaction.amount,
                        description: editingTransaction.description,
                        category_id: editingTransaction.category_id,
                        date: editingTransaction.date,
                        type: editingTransaction.type,
                    }}
                    onSubmit={handleUpdate}
                    onCancel={() => setEditingTransaction(null)}
                    submitLabel="Salvar"
                />
            )}

            <TransactionsFilters
                type={filterType}
                dateFrom={filterDateFrom}
                dateTo={filterDateTo}
                onTypeChange={setFilterType}
                onDateFromChange={setFilterDateFrom}
                onDateToChange={setFilterDateTo}
                onFilter={loadTransactions}
            />

            <TransactionsList
                transactions={transactions}
                onEdit={(transaction) => {
                    setShowForm(false)
                    setEditingTransaction(transaction)
                }}
                onDelete={handleDelete}
            />
        </div>
    )
}
