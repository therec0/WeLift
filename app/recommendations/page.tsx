import { Suspense } from "react"
import RecommendationsPage from "@/components/recommendations/recommendations-page"
import LoadingSpinner from "@/components/ui/loading-spinner"

export default function Recommendations() {
  return (
    <div className="container p-4">
      <h1 className="text-2xl font-bold mb-6">Workout Recommendations</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <RecommendationsPage />
      </Suspense>
    </div>
  )
}

