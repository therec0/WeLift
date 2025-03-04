"use client"

import { Input } from "@/components/ui/input"
import { useTranslation } from "@/lib/i18n/client"

interface NameInputProps {
  name: string
  onNameChange: (name: string) => void
}

export default function NameInput({ name, onNameChange }: NameInputProps) {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">{t("onboarding.name.title")}</h1>
        <p className="text-muted-foreground">{t("onboarding.name.subtitle")}</p>
      </div>

      <div className="space-y-4">
        <Input
          placeholder={t("onboarding.name.placeholder")}
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="text-lg py-6"
          autoFocus
        />
      </div>
    </div>
  )
}

