'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";


export default function LoginForm() {
    const [email, setEmail] = useState()

    useEffect(() => {
        console.log(email)
    }, [setEmail])

    return (
        <div className=" flex flex-col w-full gap-3 p-2">
            <div className="flex flex-col gap-2">
                <Label>Email</Label>
                <Input 
                    placeholder="Digite seu e-mail..."
                    value={email}
                    onChange={() => setEmail}
                />
            </div>
            <div className="flex flex-col gap-2">
                <Label>Senha</Label>
                <Input 
                    placeholder="Digite sua senha..."
                />
            </div>

            <Button>
                Login
            </Button>
        </div>
    )
}