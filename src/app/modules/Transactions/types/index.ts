export type Transaction = {
    id: number
    amount: number
    description: string
    type: "income" | "expense"
    date: string
    category_id: number
    category_name: string
    created_at: string
}

export type TransactionsResponse = {
    items: Transaction[]
    total: number
    page: number
    pages: number
    limit: number
}

export type CreateTransactionPayload = {
    amount: number
    description: string
    category_id: number
    date: string
    type: "income" | "expense"
}
