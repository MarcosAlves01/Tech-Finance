"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { useState } from "react"
import { toast } from "sonner"

type CategoryFormProps = {
    initialName?: string
    onSubmit: (name: string) => Promise<void>
    onCancel: () => void
    submitLabel: string
}

export function CategoryForm({ initialName = "", onSubmit, onCancel, submitLabel }: CategoryFormProps) {
    const [name, setName] = useState(initialName)
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        if (!name.trim()) {
            toast.error("Digite o nome da categoria")
            return
        }

        setLoading(true)
        await onSubmit(name.trim())
        setLoading(false)
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-end gap-3">
            <div className="flex flex-col gap-2 flex-1">
                <Label htmlFor="category-name">Nome da categoria</Label>
                <Input
                    id="category-name"
                    placeholder="Ex: Alimentação"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <Button type="submit" disabled={loading} className="cursor-pointer">
                {loading ? <Spinner /> : submitLabel}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
                Cancelar
            </Button>
        </form>
    )
}
