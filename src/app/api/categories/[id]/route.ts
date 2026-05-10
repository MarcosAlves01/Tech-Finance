import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const token = req.cookies.get("token")?.value
    const { id } = await params

    const response = await fetch(`http://localhost:8050/api/categories/${id}`, {
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
    }, { status: response.status })
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const token = req.cookies.get("token")?.value
    const { id } = await params
    const body = await req.json()

    const response = await fetch(`http://localhost:8050/api/categories/${id}`, {
        method: 'PUT',
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

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const token = req.cookies.get("token")?.value
    const { id } = await params

    const response = await fetch(`http://localhost:8050/api/categories/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    })

    if (response.ok) {
        return NextResponse.json({ request_ok: true })
    }

    const data = await response.json()
    return NextResponse.json({
        request_ok: false,
        error: data.detail
    }, { status: response.status })
}
