"use client"

import { useEffect, useState } from "react"
import { toast } from "sonner"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Category } from "@/app/modules/Categories/types"
import { CategoriesList } from "@/app/modules/Categories/components/CategoriesList"
import { CategoryForm } from "@/app/modules/Categories/components/CategoryForm"
import {
    getCategoriesServices,
    createCategoryServices,
    updateCategoryServices,
    deleteCategoryServices
} from "@/app/modules/Categories/categories.services"

export default function CategoriesPage() {
    const [categories, setCategories] = useState<Category[]>([])
    const [showForm, setShowForm] = useState(false)
    const [editingCategory, setEditingCategory] = useState<Category | null>(null)

    useEffect(() => {
        loadCategories()
    }, [])

    async function loadCategories() {
        const data = await getCategoriesServices()
        if (data) setCategories(data.items)
    }

    async function handleCreate(name: string) {
        const response = await createCategoryServices(name)
        if (response) {
            toast.success("Categoria criada com sucesso")
            setShowForm(false)
            loadCategories()
        } else {
            toast.error("Erro ao criar categoria")
        }
    }

    async function handleUpdate(name: string) {
        if (!editingCategory) return
        const response = await updateCategoryServices(editingCategory.id, name)
        if (response) {
            toast.success("Categoria atualizada com sucesso")
            setEditingCategory(null)
            loadCategories()
        } else {
            toast.error("Erro ao atualizar categoria")
        }
    }

    async function handleDelete(id: number) {
        const response = await deleteCategoryServices(id)
        if (response) {
            toast.success("Categoria excluída com sucesso")
            loadCategories()
        } else {
            toast.error("Erro ao excluir categoria")
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Categorias</h2>
                    <p className="text-muted-foreground">Gerencie suas categorias de transações</p>
                </div>
                {!showForm && !editingCategory && (
                    <Button onClick={() => setShowForm(true)}>
                        <Plus className="size-4 mr-2" />
                        Nova Categoria
                    </Button>
                )}
            </div>

            {showForm && (
                <CategoryForm
                    onSubmit={handleCreate}
                    onCancel={() => setShowForm(false)}
                    submitLabel="Criar"
                />
            )}

            {editingCategory && (
                <CategoryForm
                    initialName={editingCategory.name}
                    onSubmit={handleUpdate}
                    onCancel={() => setEditingCategory(null)}
                    submitLabel="Salvar"
                />
            )}

            <CategoriesList
                categories={categories}
                onEdit={(category) => {
                    setShowForm(false)
                    setEditingCategory(category)
                }}
                onDelete={handleDelete}
            />
        </div>
    )
}
