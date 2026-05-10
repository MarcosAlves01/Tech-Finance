'use client'
import { SummaryCards } from "@/app/modules/Home/components/SummaryCards"
import { OverviewChart } from "@/app/modules/Home/components/OverviewChart"
import { RecentTransactions } from "@/app/modules/Home/components/RecentTransactions"
import { MonthlyGoals } from "@/app/modules/Home/components/MonthlyGoals"
import { useEffect, useState } from "react"
import { IncomeVsExpense, Summary, Transaction } from "@/app/modules/Home/types"
import { getIncomeVsExpenseServices, getRecentTransactionsServices, getSummaryServices } from "@/app/modules/Home/dashboard.services"

export default function Home() {

  const [summary, setSummary] = useState<Summary | null>(null)
  const [incomeVsExpense, setIncomeVsExpense] = useState<IncomeVsExpense[] | null>(null)
  const [recentTransactions, setRecentTransactions] = useState<Transaction[] | null>(null)


  useEffect(() => {
    async function loadData() {
      const [summaryData, incomeVsExpenseData, transactionsData] = await Promise.all([
        getSummaryServices(),
        getIncomeVsExpenseServices(),
        getRecentTransactionsServices()
      ])
      setSummary(summaryData)
      setIncomeVsExpense(incomeVsExpenseData)
      setRecentTransactions(transactionsData?.items ?? null)
    }
    loadData()
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Visão geral das suas finanças</p>
      </div>

      <SummaryCards summary={summary} />

      <div className="grid gap-4 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <OverviewChart data={incomeVsExpense} />
        </div>
        <div className="lg:col-span-3">
          <MonthlyGoals />
        </div>
      </div>

      <RecentTransactions transactions={recentTransactions} />
    </div>
  )
}
