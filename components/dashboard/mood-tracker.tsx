"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "@/lib/i18n/client"
import { BarChart3 } from "lucide-react"

export default function MoodTracker() {
  const { t } = useTranslation()

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{t("dashboard.mood_tracker")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-primary" />
              <span>{t("dashboard.weekly_mood")}</span>
            </div>
          </div>
          <div className="flex justify-between items-end h-32 pt-4">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
              const height = [60, 80, 50, 90, 70, 40, 65][i]
              return (
                <div key={day} className="flex flex-col items-center">
                  <div className="w-8 bg-primary rounded-t-sm" style={{ height: `${height}%` }}></div>
                  <span className="text-xs mt-2">{day}</span>
                </div>
              )
            })}
          </div>
          <div className="pt-2 border-t border-border">
            <div className="text-sm font-medium mb-2">{t("dashboard.today_mood")}:</div>
            <div className="flex justify-between">
              {["😔", "😐", "🙂", "😊", "😁"].map((emoji, i) => (
                <button key={i} className={`text-2xl p-2 rounded-full ${i === 3 ? "bg-primary/20" : ""}`}>
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

