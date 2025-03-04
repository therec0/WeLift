"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslation } from "@/lib/i18n/client"
import { Dumbbell, TrendingUp, Pill } from "lucide-react"
import WorkoutSummary from "@/components/dashboard/workout-summary"
import MoodTracker from "@/components/dashboard/mood-tracker"

export default function Dashboard() {
  const { t } = useTranslation()
  const [progress, setProgress] = useState(68)
  const [userName, setUserName] = useState("")

  useEffect(() => {
    // Load user data from localStorage
    const savedUserData = localStorage.getItem("userData")
    if (savedUserData) {
      const userData = JSON.parse(savedUserData)
      if (userData.name) {
        setUserName(userData.name)
      }
    }
  }, [])

  return (
    <div className="container p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          {userName ? `${t("dashboard.greeting_name", { name: userName })}` : t("dashboard.greeting")}
        </h1>
        <Button variant="outline" size="sm">
          {t("dashboard.today")}
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{t("dashboard.weekly_progress")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{t("dashboard.workouts_completed")}</span>
              <span>4/6</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <Dumbbell className="h-8 w-8 text-primary mb-2" />
            <span className="text-xl font-bold">24</span>
            <span className="text-xs text-muted-foreground">{t("dashboard.total_workouts")}</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <TrendingUp className="h-8 w-8 text-primary mb-2" />
            <span className="text-xl font-bold">8</span>
            <span className="text-xs text-muted-foreground">{t("dashboard.pr_this_month")}</span>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="workout">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="workout">{t("dashboard.workout")}</TabsTrigger>
          <TabsTrigger value="mood">{t("dashboard.mood")}</TabsTrigger>
          <TabsTrigger value="supplements">{t("dashboard.supplements")}</TabsTrigger>
        </TabsList>
        <TabsContent value="workout" className="space-y-4">
          <WorkoutSummary />
        </TabsContent>
        <TabsContent value="mood" className="space-y-4">
          <MoodTracker />
        </TabsContent>
        <TabsContent value="supplements" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{t("dashboard.supplement_tracker")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Pill className="h-5 w-5 mr-2 text-primary" />
                    <span>Protein</span>
                  </div>
                  <Button variant="outline" size="sm">
                    {t("dashboard.take")}
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Pill className="h-5 w-5 mr-2 text-primary" />
                    <span>Creatine</span>
                  </div>
                  <Button variant="outline" size="sm">
                    {t("dashboard.take")}
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Pill className="h-5 w-5 mr-2 text-primary" />
                    <span>Vitamin D</span>
                  </div>
                  <Button variant="outline" size="sm">
                    {t("dashboard.take")}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

