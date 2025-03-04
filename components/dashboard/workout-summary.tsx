"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "@/lib/i18n/client"
import { Calendar, Clock, Dumbbell } from "lucide-react"

export default function WorkoutSummary() {
  const { t } = useTranslation()

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{t("dashboard.last_workout")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Dumbbell className="h-5 w-5 mr-2 text-primary" />
              <span>Push Day</span>
            </div>
            <span className="text-sm text-muted-foreground">4 exercises</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-primary" />
              <span>Yesterday</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-primary" />
              <span>45 min</span>
            </div>
          </div>
          <div className="pt-2 border-t border-border">
            <div className="text-sm font-medium mb-2">{t("dashboard.exercises")}:</div>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Bench Press</span>
                <span>3 × 8 × 80kg</span>
              </li>
              <li className="flex justify-between">
                <span>Shoulder Press</span>
                <span>3 × 10 × 50kg</span>
              </li>
              <li className="flex justify-between">
                <span>Tricep Extension</span>
                <span>3 × 12 × 25kg</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

