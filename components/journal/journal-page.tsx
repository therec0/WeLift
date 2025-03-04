"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { CalendarIcon, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useTranslation } from "@/lib/i18n/client"
import JournalEntryCard from "./journal-entry-card"
import MoodTracker from "./mood-tracker"
import NewEntryDialog from "./new-entry-dialog"
import type { JournalEntry } from "@/lib/types"

export default function JournalPage() {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState("")
  const [date, setDate] = useState<Date>(new Date())
  const [showNewEntryDialog, setShowNewEntryDialog] = useState(false)
  const [entries, setEntries] = useState<JournalEntry[]>([])
  const [activeTab, setActiveTab] = useState("all")

  // Load entries from localStorage on component mount
  useEffect(() => {
    const savedEntries = localStorage.getItem("journalEntries")
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries))
    } else {
      // Add some sample entries if none exist
      const sampleEntries = [
        {
          id: "1",
          date: new Date().toISOString(),
          title: "First workout session",
          content: "Completed my first full workout routine. Feeling great!",
          mood: 4,
          tags: ["workout", "achievement"],
          type: "note",
        },
        {
          id: "2",
          date: new Date(Date.now() - 86400000).toISOString(), // Yesterday
          title: "Rest day",
          content: "Taking a rest day to recover. Focusing on stretching and mobility.",
          mood: 3,
          tags: ["rest", "recovery"],
          type: "note",
        },
        {
          id: "3",
          date: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
          title: "Push Day",
          content: "Bench press: 3x8 at 80kg\nShoulder press: 3x10 at 50kg\nTricep extensions: 3x12 at 25kg",
          mood: 5,
          tags: ["workout", "push"],
          type: "workout",
        },
      ]
      setEntries(sampleEntries)
      localStorage.setItem("journalEntries", JSON.stringify(sampleEntries))
    }
  }, [])

  // Save entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("journalEntries", JSON.stringify(entries))
  }, [entries])

  const addEntry = (entry: JournalEntry) => {
    const newEntries = [entry, ...entries]
    setEntries(newEntries)
    setShowNewEntryDialog(false)
  }

  const deleteEntry = (id: string) => {
    const newEntries = entries.filter((entry) => entry.id !== id)
    setEntries(newEntries)
  }

  const filteredEntries = entries.filter((entry) => {
    // Filter by search query
    const matchesSearch =
      entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    // Filter by tab
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "notes" && entry.type === "note") ||
      (activeTab === "workouts" && entry.type === "workout") ||
      (activeTab === "moods" && entry.mood !== undefined)

    return matchesSearch && matchesTab
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="gap-2">
              <CalendarIcon className="h-4 w-4" />
              {format(date, "PPP")}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={(date) => date && setDate(date)} initialFocus />
          </PopoverContent>
        </Popover>

        <Button onClick={() => setShowNewEntryDialog(true)}>
          <Plus className="h-4 w-4 mr-2" />
          {t("journal.new_entry")}
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={t("journal.search")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="all">{t("journal.all")}</TabsTrigger>
          <TabsTrigger value="notes">{t("journal.notes")}</TabsTrigger>
          <TabsTrigger value="workouts">{t("journal.workouts")}</TabsTrigger>
          <TabsTrigger value="moods">{t("journal.moods")}</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-4">
          <MoodTracker entries={entries} />

          <div className="grid gap-4">
            {filteredEntries.length > 0 ? (
              filteredEntries.map((entry) => <JournalEntryCard key={entry.id} entry={entry} onDelete={deleteEntry} />)
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">{t("journal.no_entries")}</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="notes" className="space-y-4 mt-4">
          <div className="grid gap-4">
            {filteredEntries.length > 0 ? (
              filteredEntries.map((entry) => <JournalEntryCard key={entry.id} entry={entry} onDelete={deleteEntry} />)
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">{t("journal.no_entries")}</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="workouts" className="space-y-4 mt-4">
          <div className="grid gap-4">
            {filteredEntries.length > 0 ? (
              filteredEntries.map((entry) => <JournalEntryCard key={entry.id} entry={entry} onDelete={deleteEntry} />)
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">{t("journal.no_entries")}</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="moods" className="space-y-4 mt-4">
          <MoodTracker entries={entries} />

          <div className="grid gap-4">
            {filteredEntries.length > 0 ? (
              filteredEntries.map((entry) => <JournalEntryCard key={entry.id} entry={entry} onDelete={deleteEntry} />)
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">{t("journal.no_entries")}</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      <NewEntryDialog open={showNewEntryDialog} onOpenChange={setShowNewEntryDialog} onSave={addEntry} />
    </div>
  )
}

