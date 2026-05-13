import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
    const token = req.cookies.get("token")?.value
    const body = await req.json()

    const response = await fetch(`http://localhost:8050/api/users/me/password`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
    })

    if (response.status === 204) {
        return new NextResponse(null, { status: 204 })
    }

    const data = await response.json()

    return NextResponse.json({
        request_ok: false,
        error: data.detail
    }, { status: response.status })
}
