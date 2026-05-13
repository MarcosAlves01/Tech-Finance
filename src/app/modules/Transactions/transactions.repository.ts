import { CreateTransactionPayload } from "./types"
import { fetchAuth } from "@/lib/fetchAuth"


export async function getTransactionsRepository(params: string = "") {
    const response = await fetchAuth(`/api/transactions?${params}`, {
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

export async function createTransactionRepository(payload: CreateTransactionPayload) {
    const response = await fetchAuth("/api/transactions", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const data = await response.json()
        return data
    }
}

export async function updateTransactionRepository(id: number, payload: Partial<CreateTransactionPayload>) {
    const response = await fetchAuth(`/api/transactions/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })

    if (response.ok) {
        const data = await response.json()
        return data
    }
}

export async function deleteTransactionRepository(id: number) {
    const response = await fetchAuth(`/api/transactions/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        const data = await response.json()
        return data
    }
}
