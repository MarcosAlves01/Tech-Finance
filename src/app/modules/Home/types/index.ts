export type Summary = {
  month: string
  total_income: number
  total_expense: number
  balance: number
  transaction_count: number
}

export type ExpenseByCategory = {
  category_id: number
  category_name: string
  total: number
}

export type IncomeVsExpense = {
  month: string
  type: "income" | "expense"
  total: string
}

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