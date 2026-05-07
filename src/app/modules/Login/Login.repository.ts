


export async function LoginRepository(email: string, password: string) {

    const response = await fetch("/api/login", {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        })
    })

    if (response.ok) {
        return response.json()
    }
}