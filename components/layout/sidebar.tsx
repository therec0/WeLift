"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Dumbbell,
  Calendar,
  BookOpen,
  Settings,
  PlusCircle,
  User,
  BarChart3,
  Activity,
  Pill,
  BookMarked,
  CheckSquare,
} from "lucide-react"
import { useTranslation } from "@/lib/i18n/client"
import { useTheme } from "next-themes"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  const { t } = useTranslation()
  const pathname = usePathname()
  const { theme } = useTheme()
  const [userName, setUserName] = React.useState("")

  React.useEffect(() => {
    // Load user data from localStorage
    const savedUserData = localStorage.getItem("userData")
    if (savedUserData) {
      const userData = JSON.parse(savedUserData)
      if (userData.name) {
        setUserName(userData.name)
      }
    }
  }, [])

  const navigationItems = [
    {
      title: t("dashboard.title") || "Dashboard",
      href: "/",
      icon: Activity,
    },
    {
      title: t("exercises.title") || "Exercises",
      href: "/exercises",
      icon: Dumbbell,
    },
    {
      title: t("journal.title") || "Journal",
      href: "/journal",
      icon: BookOpen,
    },
    {
      title: t("calendar.title") || "Calendar",
      href: "/calendar",
      icon: Calendar,
    },
    {
      title: t("recommendations.title") || "Recommendations",
      href: "/recommendations",
      icon: BarChart3,
    },
  ]

  const toolItems = [
    {
      title: t("workout.title") || "Workout",
      href: "/workout/new",
      icon: PlusCircle,
    },
    {
      title: t("supplements.title") || "Supplements",
      href: "/supplements",
      icon: Pill,
    },
    {
      title: t("journal.new_entry") || "Journal Entry",
      href: "/journal/new",
      icon: BookMarked,
    },
    {
      title: t("todo.title") || "To-do",
      href: "/todo",
      icon: CheckSquare,
    },
  ]

  return (
    <Sidebar className="hidden md:flex border-r" collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="bg-primary/10 rounded-full p-2 flex items-center justify-center">
            <User className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{userName || t("dashboard.greeting") || "Hello, Athlete!"}</p>
            <p className="text-xs text-muted-foreground truncate">{t("settings.edit_profile") || "Edit Profile"}</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t("navigation.title") || "Navigation"}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>{t("tools.title") || "Quick Actions"}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {toolItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/settings"} tooltip={t("settings.title") || "Settings"}>
              <Link href="/settings">
                <Settings className="h-4 w-4" />
                <span>{t("settings.title") || "Settings"}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

