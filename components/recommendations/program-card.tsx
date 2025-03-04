"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, Calendar, Dumbbell } from "lucide-react"
import { useTranslation } from "@/lib/i18n/client"
import type { WorkoutProgram } from "@/lib/types"

interface ProgramCardProps {
  program: WorkoutProgram
}

export default function ProgramCard({ program }: ProgramCardProps) {
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState(false)

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-medium text-lg">{program.name}</h3>
            <p className="text-sm text-muted-foreground">{program.description}</p>
          </div>
          <Badge variant="outline" className="capitalize">
            {program.level}
          </Badge>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm">
              {program.daysPerWeek} {t("recommendations.days_per_week")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Dumbbell className="h-4 w-4 text-primary" />
            <span className="text-sm">
              {program.duration} {t("recommendations.weeks")}
            </span>
          </div>
        </div>

        {expanded && (
          <div className="mt-4 space-y-4 border-t pt-4">
            <h4 className="font-medium">{t("recommendations.program_structure")}</h4>
            <div className="space-y-2">
              {program.workouts.map((workout, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <div className="font-medium">{workout.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {workout.exercises.length} {t("recommendations.exercises")}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    {t("recommendations.view")}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="px-6 py-4 flex justify-between">
        <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)} className="gap-1">
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              {t("recommendations.show_less")}
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              {t("recommendations.show_more")}
            </>
          )}
        </Button>

        <Button>{t("recommendations.start_program")}</Button>
      </CardFooter>
    </Card>
  )
}

