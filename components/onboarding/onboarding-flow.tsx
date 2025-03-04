"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ChevronRight } from "lucide-react"
import ThemeSelector from "./steps/theme-selector"
import NameInput from "./steps/name-input"
import ImportData from "./steps/import-data"
import FitnessGoals from "./steps/fitness-goals"
import ExperienceLevel from "./steps/experience-level"
import { useTranslation } from "@/lib/i18n/client"

export default function OnboardingFlow() {
  const { t } = useTranslation()
  const router = useRouter()
  const { setTheme } = useTheme()
  const [step, setStep] = useState(1)
  const [userData, setUserData] = useState({
    name: "",
    theme: "system",
    importSource: null,
    fitnessGoals: [],
    experienceLevel: "",
  })

  const totalSteps = 5
  const progress = (step / totalSteps) * 100

  const handleThemeChange = (theme: string) => {
    setUserData({ ...userData, theme })
    setTheme(theme)
  }

  const handleNameChange = (name: string) => {
    setUserData({ ...userData, name })
  }

  const handleImportSourceChange = (importSource: string | null) => {
    setUserData({ ...userData, importSource })
  }

  const handleFitnessGoalsChange = (goals: string[]) => {
    setUserData({ ...userData, fitnessGoals: goals })
  }

  const handleExperienceLevelChange = (level: string) => {
    setUserData({ ...userData, experienceLevel: level })
  }

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      // Save user data to localStorage
      localStorage.setItem("userData", JSON.stringify(userData))
      // Redirect to dashboard
      router.push("/")
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const isNextDisabled = () => {
    switch (step) {
      case 1: // Theme selection - always enabled
        return false
      case 2: // Name input
        return !userData.name.trim()
      case 3: // Import data - always enabled (can skip)
        return false
      case 4: // Fitness goals
        return userData.fitnessGoals.length === 0
      case 5: // Experience level
        return !userData.experienceLevel
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col justify-center items-center p-6">
        <div className="w-full max-w-md">
          <Progress value={progress} className="mb-8" />

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {step === 1 && <ThemeSelector selectedTheme={userData.theme} onThemeChange={handleThemeChange} />}

              {step === 2 && <NameInput name={userData.name} onNameChange={handleNameChange} />}

              {step === 3 && (
                <ImportData importSource={userData.importSource} onImportSourceChange={handleImportSourceChange} />
              )}

              {step === 4 && (
                <FitnessGoals selectedGoals={userData.fitnessGoals} onGoalsChange={handleFitnessGoalsChange} />
              )}

              {step === 5 && (
                <ExperienceLevel selectedLevel={userData.experienceLevel} onLevelChange={handleExperienceLevelChange} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="p-6 border-t">
        <div className="flex justify-between max-w-md mx-auto">
          <Button variant="ghost" onClick={handleBack} disabled={step === 1}>
            {t("onboarding.back")}
          </Button>

          <Button onClick={handleNext} disabled={isNextDisabled()} className="gap-2">
            {step === totalSteps ? t("onboarding.finish") : t("onboarding.next")}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

