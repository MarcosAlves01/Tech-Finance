import { CreateTransactionPayload } from "./types"
import { createTransactionRepository, deleteTransactionRepository, getTransactionsRepository, updateTransactionRepository } from "./transactions.repository"


export async function getTransactionsServices(params: string = "") {
    return await getTransactionsRepository(params)
}

export async function createTransactionServices(payload: CreateTransactionPayload) {
    return await createTransactionRepository(payload)
}

export async function updateTransactionServices(id: number, payload: Partial<CreateTransactionPayload>) {
    return await updateTransactionRepository(id, payload)
}

export async function deleteTransactionServices(id: number) {
    return await deleteTransactionRepository(id)
}
