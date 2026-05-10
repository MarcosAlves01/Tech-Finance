"use client"

import { Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Category } from "../types"

type CategoriesListProps = {
    categories: Category[]
    onEdit: (category: Category) => void
    onDelete: (id: number) => void
}

export function CategoriesList({ categories, onEdit, onDelete }: CategoriesListProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Suas Categorias</CardTitle>
                <CardDescription>Gerencie suas categorias de transações</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                {categories.length === 0 && (
                    <p className="text-sm text-muted-foreground">Nenhuma categoria cadastrada.</p>
                )}
                {categories.map((category) => (
                    <div key={category.id} className="flex items-center justify-between rounded-lg border p-3">
                        <span className="text-sm font-medium">{category.name}</span>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" onClick={() => onEdit(category)}>
                                <Pencil className="size-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => onDelete(category.id)}>
                                <Trash2 className="size-4 text-red-500" />
                            </Button>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
