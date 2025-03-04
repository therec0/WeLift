import { Suspense } from "react"
import NewWorkout from "@/components/workout/new-workout"
import LoadingSpinner from "@/components/ui/loading-spinner"

export default function NewWorkoutPage() {
  return (
    <div className="container p-4">
      <h1 className="text-2xl font-bold mb-6">New Workout</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <NewWorkout />
      </Suspense>
    </div>
  )
}

