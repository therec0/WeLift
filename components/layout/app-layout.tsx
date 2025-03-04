"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import BottomNavigation from "@/components/navigation/bottom-navigation"
import { AppSidebar } from "@/components/layout/sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { useTranslation } from "@/lib/i18n/client"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const { t } = useTranslation()

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={`min-h-screen bg-background ${theme === "dark" ? "dark" : ""}`}>
      <SidebarProvider>
        <div className="flex min-h-screen">
          <AppSidebar />
          <div className="flex-1 flex flex-col">
            <div className="flex items-center p-4 md:py-2 border-b">
              <SidebarTrigger className="hidden md:flex mr-2" />
              <h1 className="text-xl font-bold">{t("app.title") || "Gym Tracker"}</h1>
            </div>
            <main className="flex-1 pb-16 md:pb-0">{children}</main>
            <BottomNavigation />
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}

