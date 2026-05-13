export async function fetchAuth(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    const response = await fetch(input, init)

    if (response.status === 401) {
        await fetch("/api/logout", { method: "POST" })
        window.location.href = "/login"
        return response
    }

    return response
}
