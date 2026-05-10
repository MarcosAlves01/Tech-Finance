import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const token = req.cookies.get("token")?.value
    const searchParams = req.nextUrl.searchParams.toString()

    const response = await fetch(`http://localhost:8050/api/transactions?${searchParams}`, {
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
    })

}
