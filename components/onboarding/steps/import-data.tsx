"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n/client"
import { Download, X } from "lucide-react"

interface ImportDataProps {
  importSource: string | null
  onImportSourceChange: (source: string | null) => void
}

export default function ImportData({ importSource, onImportSourceChange }: ImportDataProps) {
  const { t } = useTranslation()

  const importSources = [
    {
      id: "hevy",
      name: "Hevy",
      logo: "/placeholder.svg?height=40&width=40",
      description: t("onboarding.import.hevy_desc"),
    },
    {
      id: "strong",
      name: "Strong",
      logo: "/placeholder.svg?height=40&width=40",
      description: t("onboarding.import.strong_desc"),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">{t("onboarding.import.title")}</h1>
        <p className="text-muted-foreground">{t("onboarding.import.subtitle")}</p>
      </div>

      <div className="grid gap-4">
        {importSources.map((source) => {
          const isSelected = importSource === source.id

          return (
            <Card
              key={source.id}
              className={`cursor-pointer transition-all ${
                isSelected ? "border-primary bg-primary/5" : "hover:border-primary/50"
              }`}
              onClick={() => onImportSourceChange(source.id)}
            >
              <CardContent className="flex items-center p-4">
                <img
                  src={source.logo || "/placeholder.svg"}
                  alt={source.name}
                  className="w-10 h-10 mr-4 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{source.name}</h3>
                  <p className="text-sm text-muted-foreground">{source.description}</p>
                </div>
                {isSelected && (
                  <Button size="sm" variant="outline" className="gap-1">
                    <Download className="h-4 w-4" />
                    {t("onboarding.import.import_button")}
                  </Button>
                )}
              </CardContent>
            </Card>
          )
        })}

        <Button variant="ghost" className="mt-2" onClick={() => onImportSourceChange(null)}>
          <X className="h-4 w-4 mr-2" />
          {t("onboarding.import.skip")}
        </Button>
      </div>
    </div>
  )
}

