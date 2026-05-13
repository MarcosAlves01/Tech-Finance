import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const token = req.cookies.get("token")?.value

    const response = await fetch(`http://localhost:8050/api/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })

    const data = await response.json()

    if (response.ok) {
        return NextResponse.json(data)
    }

    return NextResponse.json({
        request_ok: false,
        error: data.detail
    }, { status: response.status })
}

export async function PATCH(req: NextRequest) {
    const token = req.cookies.get("token")?.value
    const body = await req.json()

    const response = await fetch(`http://localhost:8050/api/users/me`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
    })

    const data = await response.json()

    if (response.ok) {
        return NextResponse.json(data)
    }

    return NextResponse.json({
        request_ok: false,
        error: data.detail
    }, { status: response.status })
}
