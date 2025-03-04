"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslation } from "@/lib/i18n/client"
import { Dumbbell, Calendar, ArrowRight, Info } from "lucide-react"
import { getRecommendedWorkouts } from "@/lib/recommendations"
import type { WorkoutProgram } from "@/lib/types"
import ProgramCard from "./program-card"

export default function RecommendationsPage() {
  const { t } = useTranslation()
  const [userData, setUserData] = useState<any>(null)
  const [recommendedPrograms, setRecommendedPrograms] = useState<WorkoutProgram[]>([])

  useEffect(() => {
    // Load user data from localStorage
    const savedUserData = localStorage.getItem("userData")
    if (savedUserData) {
      const parsedUserData = JSON.parse(savedUserData)
      setUserData(parsedUserData)

      // Get recommended workouts based on user data
      const programs = getRecommendedWorkouts(parsedUserData)
      setRecommendedPrograms(programs)
    }
  }, [])

  if (!userData) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <Info className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">{t("recommendations.no_profile")}</h3>
          <p className="text-muted-foreground mb-4">{t("recommendations.complete_onboarding")}</p>
          <Button asChild>
            <a href="/onboarding">{t("recommendations.go_to_onboarding")}</a>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t("recommendations.personalized_title")}</CardTitle>
          <CardDescription>{t("recommendations.personalized_description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Dumbbell className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">{t("recommendations.experience_level")}</div>
                <div className="font-medium capitalize">{userData.experienceLevel}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">{t("recommendations.recommended_frequency")}</div>
                <div className="font-medium">
                  {userData.experienceLevel === "beginner"
                    ? "3-4"
                    : userData.experienceLevel === "intermediate"
                      ? "4-5"
                      : "5-6"}{" "}
                  {t("recommendations.days_per_week")}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="programs">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="programs">{t("recommendations.programs")}</TabsTrigger>
          <TabsTrigger value="workouts">{t("recommendations.workouts")}</TabsTrigger>
        </TabsList>

        <TabsContent value="programs" className="space-y-4 mt-4">
          <div className="grid gap-4">
            {recommendedPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="workouts" className="space-y-4 mt-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-lg">Push Day</h3>
                  <p className="text-sm text-muted-foreground">Chest, Shoulders, Triceps</p>
                </div>
                <Button variant="outline" size="sm">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t("recommendations.view")}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-lg">Pull Day</h3>
                  <p className="text-sm text-muted-foreground">Back, Biceps</p>
                </div>
                <Button variant="outline" size="sm">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t("recommendations.view")}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-lg">Leg Day</h3>
                  <p className="text-sm text-muted-foreground">Quads, Hamstrings, Calves</p>
                </div>
                <Button variant="outline" size="sm">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t("recommendations.view")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

