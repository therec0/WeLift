"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/lib/i18n/client"
import { Dumbbell, Heart, Scale, Trophy, Zap } from "lucide-react"

interface FitnessGoalsProps {
  selectedGoals: string[]
  onGoalsChange: (goals: string[]) => void
}

export default function FitnessGoals({ selectedGoals, onGoalsChange }: FitnessGoalsProps) {
  const { t } = useTranslation()

  const goals = [
    {
      id: "build_muscle",
      name: t("onboarding.goals.build_muscle"),
      icon: Dumbbell,
      description: t("onboarding.goals.build_muscle_desc"),
    },
    {
      id: "lose_weight",
      name: t("onboarding.goals.lose_weight"),
      icon: Scale,
      description: t("onboarding.goals.lose_weight_desc"),
    },
    {
      id: "improve_strength",
      name: t("onboarding.goals.improve_strength"),
      icon: Trophy,
      description: t("onboarding.goals.improve_strength_desc"),
    },
    {
      id: "improve_health",
      name: t("onboarding.goals.improve_health"),
      icon: Heart,
      description: t("onboarding.goals.improve_health_desc"),
    },
    {
      id: "increase_endurance",
      name: t("onboarding.goals.increase_endurance"),
      icon: Zap,
      description: t("onboarding.goals.increase_endurance_desc"),
    },
  ]

  const toggleGoal = (goalId: string) => {
    if (selectedGoals.includes(goalId)) {
      onGoalsChange(selectedGoals.filter((id) => id !== goalId))
    } else {
      onGoalsChange([...selectedGoals, goalId])
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">{t("onboarding.goals.title")}</h1>
        <p className="text-muted-foreground">{t("onboarding.goals.subtitle")}</p>
      </div>

      <div className="grid gap-4">
        {goals.map((goal) => {
          const Icon = goal.icon
          const isSelected = selectedGoals.includes(goal.id)

          return (
            <Card
              key={goal.id}
              className={`cursor-pointer transition-all ${
                isSelected ? "border-primary bg-primary/5" : "hover:border-primary/50"
              }`}
              onClick={() => toggleGoal(goal.id)}
            >
              <CardContent className="flex items-center p-4">
                <div
                  className={`p-2 rounded-full mr-4 ${isSelected ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">{goal.name}</h3>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

