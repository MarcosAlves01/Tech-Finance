import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {
    const { email, password } = await req.json()

    const response = await fetch(`http://localhost:8050/api/auth/login`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        })
    })

    const text = await response.text()
    const respostaBruta = JSON.parse(text)
    const token = respostaBruta.token
    
    const responseToken = NextResponse.json({
        succes: true
    })

    responseToken.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV == "production",
        sameSite: "strict",
        path: '/',
        maxAge: 60 * 60 *24
    })
    return responseToken
}