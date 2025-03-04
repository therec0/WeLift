import { Suspense } from "react"
import ExerciseLibrary from "@/components/exercises/exercise-library"
import LoadingSpinner from "@/components/ui/loading-spinner"

export default function ExercisesPage() {
  return (
    <div className="container p-4">
      <h1 className="text-2xl font-bold mb-6">Exercise Library</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <ExerciseLibrary />
      </Suspense>
    </div>
  )
}

