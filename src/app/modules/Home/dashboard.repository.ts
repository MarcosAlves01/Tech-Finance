import { fetchAuth } from "@/lib/fetchAuth"

export async function getSummaryRepository() {
    const response = await fetchAuth("/api/reports/summary", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        const data = await response.json()
        return data
    }
}

export async function getExpenseByCategoryRepository() {
    const response = await fetchAuth("/api/reports/expense-by-category", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        const data = await response.json()
        return data
    }
}

export async function getIncomeVsExpenseRepository() {
    const response = await fetchAuth("/api/reports/income-vs-expense", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        const data = await response.json()
        return data
    }
}


export async function getRecentTransactionsRepository() {
    const response = await fetchAuth("/api/transactions?limit=5", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        const data = await response.json()
        return data
    }
}
