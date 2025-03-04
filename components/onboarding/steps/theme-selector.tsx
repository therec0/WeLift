"use client"

import { Sun, Moon, Laptop } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/lib/i18n/client"

interface ThemeSelectorProps {
  selectedTheme: string
  onThemeChange: (theme: string) => void
}

export default function ThemeSelector({ selectedTheme, onThemeChange }: ThemeSelectorProps) {
  const { t } = useTranslation()

  const themes = [
    {
      id: "light",
      name: t("onboarding.theme.light"),
      icon: Sun,
      description: t("onboarding.theme.light_desc"),
    },
    {
      id: "dark",
      name: t("onboarding.theme.dark"),
      icon: Moon,
      description: t("onboarding.theme.dark_desc"),
    },
    {
      id: "system",
      name: t("onboarding.theme.system"),
      icon: Laptop,
      description: t("onboarding.theme.system_desc"),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">{t("onboarding.theme.title")}</h1>
        <p className="text-muted-foreground">{t("onboarding.theme.subtitle")}</p>
      </div>

      <div className="grid gap-4">
        {themes.map((theme) => {
          const Icon = theme.icon
          const isSelected = selectedTheme === theme.id

          return (
            <Card
              key={theme.id}
              className={`cursor-pointer transition-all ${
                isSelected ? "border-primary bg-primary/5" : "hover:border-primary/50"
              }`}
              onClick={() => onThemeChange(theme.id)}
            >
              <CardContent className="flex items-center p-4">
                <div
                  className={`p-2 rounded-full mr-4 ${isSelected ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">{theme.name}</h3>
                  <p className="text-sm text-muted-foreground">{theme.description}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

