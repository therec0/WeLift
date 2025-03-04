"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Dumbbell, Calendar, BookOpen, Settings, PlusCircle } from "lucide-react"
import { useTranslation } from "@/lib/i18n/client"
import { cn } from "@/lib/utils"

export default function BottomNavigation() {
  const pathname = usePathname()
  const { t } = useTranslation()

  const navItems = [
    {
      name: t("exercises.title") || "Exercises",
      href: "/exercises",
      icon: Dumbbell,
    },
    {
      name: t("journal.title") || "Journal",
      href: "/journal",
      icon: BookOpen,
    },
    {
      name: t("workout.title") || "Workout",
      href: "/workout/new",
      icon: PlusCircle,
    },
    {
      name: t("calendar.title") || "Calendar",
      href: "/calendar",
      icon: Calendar,
    },
    {
      name: t("settings.title") || "Settings",
      href: "/settings",
      icon: Settings,
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-background">
      <nav className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full",
                isActive ? "text-primary" : "text-muted-foreground",
              )}
            >
              <item.icon className={cn("h-5 w-5", item.href === "/workout/new" ? "h-6 w-6" : "")} />
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

