"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslation } from "@/lib/i18n/client"
import { Search, Plus, Filter } from "lucide-react"
import ExerciseCard from "@/components/exercises/exercise-card"
import { sampleExercises } from "@/lib/data/exercises"

export default function ExerciseLibrary() {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredExercises = sampleExercises.filter((exercise) => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || exercise.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={t("exercises.search")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="flex justify-between">
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          {t("exercises.filter")}
        </Button>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          {t("exercises.add_new")}
        </Button>
      </div>

      <Tabs defaultValue="all" onValueChange={setSelectedCategory}>
        <TabsList className="grid grid-cols-4 h-auto">
          <TabsTrigger value="all">{t("exercises.all")}</TabsTrigger>
          <TabsTrigger value="strength">{t("exercises.strength")}</TabsTrigger>
          <TabsTrigger value="cardio">{t("exercises.cardio")}</TabsTrigger>
          <TabsTrigger value="flexibility">{t("exercises.flexibility")}</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-4">
        {filteredExercises.length > 0 ? (
          filteredExercises.map((exercise) => <ExerciseCard key={exercise.id} exercise={exercise} />)
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">{t("exercises.no_results")}</p>
          </div>
        )}
      </div>
    </div>
  )
}

