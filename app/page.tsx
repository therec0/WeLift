import { Suspense } from "react"
import AppLayout from "@/components/layout/app-layout"
import Dashboard from "@/components/dashboard/dashboard"
import LoadingSpinner from "@/components/ui/loading-spinner"

export default function Home() {
  return (
    <AppLayout>
      <Suspense fallback={<LoadingSpinner />}>
        <Dashboard />
      </Suspense>
    </AppLayout>
  )
}

