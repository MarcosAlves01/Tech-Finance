export type Category = {
    id: number
    name: string
    created_at: string
}

export type CategoriesResponse = {
    items: Category[]
    total: number
    page: number
    pages: number
    limit: number
}
