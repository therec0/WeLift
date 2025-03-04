"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Trash2, Edit, Dumbbell, FileText } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { JournalEntry } from "@/lib/types"
import { useTranslation } from "@/lib/i18n/client"

interface JournalEntryCardProps {
  entry: JournalEntry
  onDelete: (id: string) => void
}

export default function JournalEntryCard({ entry, onDelete }: JournalEntryCardProps) {
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState(false)

  const moodEmojis = ["😔", "😐", "🙂", "😊", "😁"]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return format(date, "PPP")
  }

  const truncateContent = (content: string, maxLength = 150) => {
    if (content.length <= maxLength) return content
    return content.substring(0, maxLength) + "..."
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {entry.type === "workout" ? (
              <Dumbbell className="h-4 w-4 text-primary" />
            ) : (
              <FileText className="h-4 w-4 text-primary" />
            )}
            <h3 className="font-medium">{entry.title}</h3>
          </div>
          <div className="flex items-center gap-2">
            {entry.mood !== undefined && <span className="text-lg">{moodEmojis[entry.mood - 1]}</span>}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Edit className="h-4 w-4 mr-2" />
                  {t("journal.edit")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onDelete(entry.id)}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  {t("journal.delete")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="text-sm text-muted-foreground mb-2">{formatDate(entry.date)}</div>

        <div className="whitespace-pre-wrap text-sm">{expanded ? entry.content : truncateContent(entry.content)}</div>

        {entry.content.length > 150 && (
          <Button variant="link" className="p-0 h-auto text-xs mt-1" onClick={() => setExpanded(!expanded)}>
            {expanded ? t("journal.show_less") : t("journal.show_more")}
          </Button>
        )}
      </CardContent>

      {entry.tags && entry.tags.length > 0 && (
        <CardFooter className="px-4 py-3 pt-0 flex gap-2 flex-wrap">
          {entry.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </CardFooter>
      )}
    </Card>
  )
}

