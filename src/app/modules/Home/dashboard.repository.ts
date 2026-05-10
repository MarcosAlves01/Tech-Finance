
export async function getSummaryRepository() {
    const response = await fetch("/api/reports/summary", {
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
    const response = await fetch("/api/reports/expense-by-category", {
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
    const response = await fetch("/api/reports/income-vs-expense", {
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