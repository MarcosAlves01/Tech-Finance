"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"
import { User } from "../types"
import { useState } from "react"
import { toast } from "sonner"
import { User as UserIcon, Mail, Save } from "lucide-react"

type ProfileFormProps = {
    user: User
    onSubmit: (name: string, email: string) => Promise<void>
}

export function ProfileForm({ user, onSubmit }: ProfileFormProps) {
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        if (!name.trim() || !email.trim()) {
            toast.error("Preencha todos os campos")
            return
        }

        setLoading(true)
        await onSubmit(name.trim(), email.trim())
        setLoading(false)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <UserIcon className="size-5" />
                    Informações Pessoais
                </CardTitle>
                <CardDescription>Atualize seu nome e email</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nome</Label>
                        <div className="relative">
                            <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                            <Input
                                id="name"
                                placeholder="Seu nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="pl-9"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="seu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="pl-9"
                            />
                        </div>
                    </div>
                    <Button type="submit" disabled={loading} className="cursor-pointer">
                        {loading ? <Spinner /> : <><Save className="size-4 mr-2" />Salvar Alterações</>}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
