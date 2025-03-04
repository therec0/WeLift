import { Suspense } from "react"
import JournalPage from "@/components/journal/journal-page"
import LoadingSpinner from "@/components/ui/loading-spinner"

export default function Journal() {
  return (
    <div className="container p-4">
      <h1 className="text-2xl font-bold mb-6">Journal</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <JournalPage />
      </Suspense>
    </div>
  )
}

