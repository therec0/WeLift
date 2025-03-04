"use client"

import { useMemo } from "react"
import { format, subDays, isSameDay } from "date-fns"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "@/lib/i18n/client"
import { BarChart3 } from "lucide-react"
import type { JournalEntry } from "@/lib/types"

interface MoodTrackerProps {
  entries: JournalEntry[]
}

export default function MoodTracker({ entries }: MoodTrackerProps) {
  const { t } = useTranslation()

  const moodEmojis = ["😔", "😐", "🙂", "😊", "😁"]

  // Get the last 7 days for the mood chart
  const last7Days = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const date = subDays(new Date(), 6 - i)
      return {
        date,
        dayName: format(date, "EEE"),
        mood: null as number | null,
      }
    })
  }, [])

  // Fill in moods for the last 7 days
  const moodData = useMemo(() => {
    return last7Days.map((day) => {
      // Find entries for this day
      const dayEntries = entries.filter(
        (entry) => isSameDay(new Date(entry.date), day.date) && entry.mood !== undefined,
      )

      // Calculate average mood if there are entries
      if (dayEntries.length > 0) {
        const totalMood = dayEntries.reduce((sum, entry) => sum + (entry.mood || 0), 0)
        return {
          ...day,
          mood: Math.round(totalMood / dayEntries.length),
        }
      }

      return day
    })
  }, [entries, last7Days])

  // Get today's mood if available
  const todayMood = useMemo(() => {
    const todayEntries = entries.filter(
      (entry) => isSameDay(new Date(entry.date), new Date()) && entry.mood !== undefined,
    )

    if (todayEntries.length > 0) {
      // Get the most recent entry
      const latestEntry = todayEntries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]

      return latestEntry.mood
    }

    return null
  }, [entries])

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <BarChart3 className="h-5 w-5 mr-2 text-primary" />
          {t("journal.mood_tracker")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-end h-32 pt-4">
            {moodData.map((day, i) => {
              // Calculate height based on mood (1-5)
              const height = day.mood ? (day.mood / 5) * 100 : 0
              const isToday = isSameDay(day.date, new Date())

              return (
                <div key={day.dayName} className="flex flex-col items-center">
                  <div
                    className={`w-8 rounded-t-sm ${height > 0 ? "bg-primary" : "bg-muted"} ${
                      isToday ? "border-2 border-primary" : ""
                    }`}
                    style={{ height: `${height || 10}%` }}
                  ></div>
                  <span className={`text-xs mt-2 ${isToday ? "font-bold" : ""}`}>{day.dayName}</span>
                </div>
              )
            })}
          </div>

          <div className="pt-2 border-t">
            <div className="text-sm font-medium mb-2">{t("journal.today_mood")}:</div>
            <div className="flex justify-between">
              {moodEmojis.map((emoji, i) => (
                <button key={i} className={`text-2xl p-2 rounded-full ${todayMood === i + 1 ? "bg-primary/20" : ""}`}>
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

