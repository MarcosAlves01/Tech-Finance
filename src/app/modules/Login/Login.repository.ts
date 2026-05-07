


export async function LoginRepository(email: string, password: string) {

    const response = await fetch("/api/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })

    if (response.ok) {
        const data = await response.json()
        return data
    }
}