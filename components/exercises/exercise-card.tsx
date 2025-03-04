"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Dumbbell, BarChart } from "lucide-react"
import { useTranslation } from "@/lib/i18n/client"
import type { Exercise } from "@/lib/types"

interface ExerciseCardProps {
  exercise: Exercise
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  const { t } = useTranslation()

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex items-center p-4">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Dumbbell className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium">{exercise.name}</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>{exercise.muscleGroup}</span>
              <span className="mx-2">•</span>
              <span>{exercise.equipment}</span>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        {exercise.showProgress && (
          <div className="px-4 pb-4 pt-0 border-t">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <BarChart className="h-4 w-4 mr-1 text-primary" />
                <span>{t("exercise.progress")}</span>
              </div>
              <span className="font-medium">
                {exercise.lastWeight} {exercise.unit} × {exercise.lastReps}
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

