"use client"

import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useTranslation } from "@/lib/i18n/client"
import type { JournalEntry } from "@/lib/types"

interface NewEntryDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (entry: JournalEntry) => void
}

export default function NewEntryDialog({ open, onOpenChange, onSave }: NewEntryDialogProps) {
  const { t } = useTranslation()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [mood, setMood] = useState<number>(3)
  const [tags, setTags] = useState("")
  const [entryType, setEntryType] = useState<"note" | "workout">("note")

  const moodEmojis = ["😔", "😐", "🙂", "😊", "😁"]

  const handleSave = () => {
    if (!title.trim()) return

    const newEntry: JournalEntry = {
      id: uuidv4(),
      date: new Date().toISOString(),
      title: title.trim(),
      content: content.trim(),
      mood,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      type: entryType,
    }

    onSave(newEntry)
    resetForm()
  }

  const resetForm = () => {
    setTitle("")
    setContent("")
    setMood(3)
    setTags("")
    setEntryType("note")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{t("journal.new_entry")}</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="entry-type">{t("journal.entry_type")}</Label>
            <RadioGroup
              id="entry-type"
              value={entryType}
              onValueChange={(value) => setEntryType(value as "note" | "workout")}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="note" id="note" />
                <Label htmlFor="note">{t("journal.note")}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="workout" id="workout" />
                <Label htmlFor="workout">{t("journal.workout")}</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="title">{t("journal.title")}</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t("journal.title_placeholder")}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="content">{t("journal.content")}</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={entryType === "note" ? t("journal.note_placeholder") : t("journal.workout_placeholder")}
              rows={5}
            />
          </div>

          <div className="grid gap-2">
            <Label>{t("journal.mood")}</Label>
            <div className="flex justify-between">
              {moodEmojis.map((emoji, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setMood(i + 1)}
                  className={`text-2xl p-2 rounded-full transition-all ${
                    mood === i + 1 ? "bg-primary/20 scale-110" : ""
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="tags">{t("journal.tags")}</Label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder={t("journal.tags_placeholder")}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {t("journal.cancel")}
          </Button>
          <Button onClick={handleSave} disabled={!title.trim()}>
            {t("journal.save")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

