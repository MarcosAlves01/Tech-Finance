import { ChangePasswordPayload, UpdateProfilePayload } from "./types"

export async function getProfileRepository() {
    const response = await fetch("/api/users/me", {
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

export async function updateProfileRepository(payload: UpdateProfilePayload) {
    const response = await fetch("/api/users/me", {
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

export async function changePasswordRepository(payload: ChangePasswordPayload) {
    const response = await fetch("/api/users/me/password", {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })

    return { ok: response.ok, status: response.status }
}
