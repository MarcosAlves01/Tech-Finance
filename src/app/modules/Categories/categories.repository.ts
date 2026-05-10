

export async function getCategoriesRepository(page: number = 1) {
    const response = await fetch(`/api/categories?page=${page}&limit=20`, {
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

export async function createCategoryRepository(name: string) {
    const response = await fetch("/api/categories", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
    })

    if (response.ok) {
        const data = await response.json()
        return data
    }
}

export async function updateCategoryRepository(id: number, name: string) {
    const response = await fetch(`/api/categories/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
    })

    if (response.ok) {
        const data = await response.json()
        return data
    }
}

export async function deleteCategoryRepository(id: number) {
    const response = await fetch(`/api/categories/${id}`, {
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
