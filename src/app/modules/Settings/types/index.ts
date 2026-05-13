export type User = {
    id: number
    name: string
    email: string
    created_at: string
    updated_at: string
}

export type UpdateProfilePayload = {
    name?: string
    email?: string
}

export type ChangePasswordPayload = {
    current_password: string
    new_password: string
}
