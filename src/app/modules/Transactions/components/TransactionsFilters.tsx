"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

type TransactionsFiltersProps = {
    type: string
    dateFrom: string
    dateTo: string
    onTypeChange: (value: string) => void
    onDateFromChange: (value: string) => void
    onDateToChange: (value: string) => void
    onFilter: () => void
}

export function TransactionsFilters({ type, dateFrom, dateTo, onTypeChange, onDateFromChange, onDateToChange, onFilter }: TransactionsFiltersProps) {
    return (
        <div className="flex items-end gap-4">
            <div className="flex flex-col gap-2">
                <Label>Tipo</Label>
                <Select value={type} onValueChange={onTypeChange}>
                    <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Todos" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="income">Receitas</SelectItem>
                        <SelectItem value="expense">Despesas</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col gap-2">
                <Label>De</Label>
                <Input
                    type="date"
                    value={dateFrom}
                    onChange={(e) => onDateFromChange(e.target.value)}
                />
            </div>
            <div className="flex flex-col gap-2">
                <Label>Até</Label>
                <Input
                    type="date"
                    value={dateTo}
                    onChange={(e) => onDateToChange(e.target.value)}
                />
            </div>
            <Button onClick={onFilter}>
                <Search className="size-4 mr-2" />
                Filtrar
            </Button>
        </div>
    )
}
