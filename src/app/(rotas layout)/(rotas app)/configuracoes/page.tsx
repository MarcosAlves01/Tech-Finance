"use client"

import { useEffect, useState } from "react"
import { toast } from "sonner"
import { User } from "@/app/modules/Settings/types"
import { ProfileForm } from "@/app/modules/Settings/components/ProfileForm"
import { ChangePasswordForm } from "@/app/modules/Settings/components/ChangePasswordForm"
import { getProfileServices, updateProfileServices, changePasswordServices } from "@/app/modules/Settings/settings.services"

export default function ConfiguracoesPage() {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/immutability
        loadProfile()
    }, [])

    async function loadProfile() {
        const data = await getProfileServices()
        if (data) setUser(data)
    }

    async function handleUpdateProfile(name: string, email: string) {
        const payload: Record<string, string> = {}
        if (name !== user?.name) payload.name = name
        if (email !== user?.email) payload.email = email

        if (Object.keys(payload).length === 0) {
            toast.info("Nenhuma alteração detectada")
            return
        }

        const response = await updateProfileServices(payload)
        if (response) {
            toast.success("Perfil atualizado com sucesso")
            setUser(response)
        } else {
            toast.error("Erro ao atualizar perfil")
        }
    }

    async function handleChangePassword(currentPassword: string, newPassword: string) {
        const response = await changePasswordServices({
            current_password: currentPassword,
            new_password: newPassword
        })

        if (response.ok) {
            toast.success("Senha alterada com sucesso")
        } else {
            toast.error(response.status === 400 ? "Senha atual incorreta" : "Erro ao alterar senha")
        }
    }

    if (!user) return null

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Configurações</h2>
                <p className="text-muted-foreground">Gerencie suas informações pessoais e segurança</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <ProfileForm user={user} onSubmit={handleUpdateProfile} />
                <ChangePasswordForm onSubmit={handleChangePassword} />
            </div>
        </div>
    )
}
