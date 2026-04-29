import { SummaryCards } from "@/app/modules/Home/components/SummaryCards"
import { OverviewChart } from "@/app/modules/Home/components/OverviewChart"
import { RecentTransactions } from "@/app/modules/Home/components/RecentTransactions"
import { MonthlyGoals } from "@/app/modules/Home/components/MonthlyGoals"

export default function Home() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Visão geral das suas finanças</p>
      </div>

      <SummaryCards />

      <div className="grid gap-4 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <OverviewChart />
        </div>
        <div className="lg:col-span-3">
          <MonthlyGoals />
        </div>
      </div>

      <RecentTransactions />
    </div>
  )
}
