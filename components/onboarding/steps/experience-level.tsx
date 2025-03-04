"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/lib/i18n/client"

interface ExperienceLevelProps {
  selectedLevel: string
  onLevelChange: (level: string) => void
}

export default function ExperienceLevel({ selectedLevel, onLevelChange }: ExperienceLevelProps) {
  const { t } = useTranslation()

  const levels = [
    {
      id: "beginner",
      name: t("onboarding.experience.beginner"),
      description: t("onboarding.experience.beginner_desc"),
    },
    {
      id: "intermediate",
      name: t("onboarding.experience.intermediate"),
      description: t("onboarding.experience.intermediate_desc"),
    },
    {
      id: "advanced",
      name: t("onboarding.experience.advanced"),
      description: t("onboarding.experience.advanced_desc"),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">{t("onboarding.experience.title")}</h1>
        <p className="text-muted-foreground">{t("onboarding.experience.subtitle")}</p>
      </div>

      <div className="grid gap-4">
        {levels.map((level) => {
          const isSelected = selectedLevel === level.id

          return (
            <Card
              key={level.id}
              className={`cursor-pointer transition-all ${
                isSelected ? "border-primary bg-primary/5" : "hover:border-primary/50"
              }`}
              onClick={() => onLevelChange(level.id)}
            >
              <CardContent className="p-4">
                <h3 className="font-medium">{level.name}</h3>
                <p className="text-sm text-muted-foreground">{level.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

