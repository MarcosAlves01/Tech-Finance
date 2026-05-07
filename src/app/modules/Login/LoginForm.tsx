'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { LoginServices } from "./Login.services";
import { ResponseApiRouteLogin } from "./types";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";


export default function LoginForm() {
    const router = useRouter()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [loadingLogin, setLoadingLogin] = useState(false)

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!form.email || !form.password) {
            toast.error('Preencha todos os campos')
            return
        }

        setLoadingLogin(true)
        const response: ResponseApiRouteLogin = await LoginServices(form.email, form.password)
        if (response.request_ok) {
            toast.success("login efetuado com sucesso")
            router.push('/home')
        } else {
            toast.error("Houve uma falha ao efetuar login. Tente novamente!")
        }
        setLoadingLogin(false)
    }

    return (
        <div className="w-full">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
            >
                <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        placeholder="exemplo@gmail.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        autoComplete="email"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input
                        id="password"
                        value={form.password}
                        placeholder="Digite sua senha..."
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                </div>

                <Button
                    disabled={loadingLogin}
                    className="cursor-pointer"
                    type="submit"
                >
                    {loadingLogin ? <Spinner /> : "Login"}
                </Button>
            </form>
        </div>
    )
}