import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { email, password } = await req.json()

    try {
        const response = await fetch(`http://localhost:8050/api/auth/login`, {
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
            const text = await response.text()
            const respostaBruta = JSON.parse(text)
            const access_token = respostaBruta.access_token

            const responseToken = NextResponse.json({
                request_ok: true
            })

            responseToken.cookies.set("token", access_token, {
                httpOnly: true,
                secure: process.env.NODE_ENV == "production",
                sameSite: "strict",
                path: '/',
                maxAge: 60 * 60 * 24
            })
            return responseToken
        }

        return NextResponse.json({
            request_ok: false,
        })
    } catch (error) {
        return NextResponse.json({
            request_ok: false,
            error: "Credenciais invalidas"
        }, {
            status: 400
        })
    }
}