"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslation } from "@/lib/i18n/client"
import { Moon, Languages, Bell, Ruler, Timer, Pill, Database, HelpCircle, LogOut } from "lucide-react"

export default function SettingsPage() {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useTheme()
  const [notifications, setNotifications] = useState(true)
  const [units, setUnits] = useState("metric")
  const [language, setLanguage] = useState("en")

  const handleLanguageChange = (value: string) => {
    setLanguage(value)
    i18n.changeLanguage(value)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t("settings.appearance")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Moon className="h-5 w-5" />
              <div>
                <p className="font-medium">{t("settings.dark_mode")}</p>
                <p className="text-sm text-muted-foreground">{t("settings.dark_mode_desc")}</p>
              </div>
            </div>
            <Select value={theme} onValueChange={(value) => setTheme(value)}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder={t("settings.system")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">{t("settings.light")}</SelectItem>
                <SelectItem value="dark">{t("settings.dark")}</SelectItem>
                <SelectItem value="system">{t("settings.system")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Languages className="h-5 w-5" />
              <div>
                <p className="font-medium">{t("settings.language")}</p>
                <p className="text-sm text-muted-foreground">{t("settings.language_desc")}</p>
              </div>
            </div>
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder={t("settings.english")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">{t("settings.english")}</SelectItem>
                <SelectItem value="tr">{t("settings.turkish")}</SelectItem>
                <SelectItem value="fi">{t("settings.finnish")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("settings.preferences")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Bell className="h-5 w-5" />
              <div>
                <p className="font-medium">{t("settings.notifications")}</p>
                <p className="text-sm text-muted-foreground">{t("settings.notifications_desc")}</p>
              </div>
            </div>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Ruler className="h-5 w-5" />
              <div>
                <p className="font-medium">{t("settings.units")}</p>
                <p className="text-sm text-muted-foreground">{t("settings.units_desc")}</p>
              </div>
            </div>
            <Select value={units} onValueChange={setUnits}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder={t("settings.metric")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="metric">{t("settings.metric")}</SelectItem>
                <SelectItem value="imperial">{t("settings.imperial")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Timer className="h-5 w-5" />
              <div>
                <p className="font-medium">{t("settings.rest_timer")}</p>
                <p className="text-sm text-muted-foreground">{t("settings.rest_timer_desc")}</p>
              </div>
            </div>
            <Select defaultValue="60">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="60s" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">30s</SelectItem>
                <SelectItem value="60">60s</SelectItem>
                <SelectItem value="90">90s</SelectItem>
                <SelectItem value="120">120s</SelectItem>
                <SelectItem value="custom">{t("settings.custom")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Pill className="h-5 w-5" />
              <div>
                <p className="font-medium">{t("settings.supplement_tracking")}</p>
                <p className="text-sm text-muted-foreground">{t("settings.supplement_tracking_desc")}</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("settings.data")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Database className="h-5 w-5" />
              <div>
                <p className="font-medium">{t("settings.export_data")}</p>
                <p className="text-sm text-muted-foreground">{t("settings.export_data_desc")}</p>
              </div>
            </div>
            <Button variant="outline">{t("settings.export")}</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("settings.about")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <HelpCircle className="h-5 w-5" />
              <div>
                <p className="font-medium">{t("settings.help_support")}</p>
                <p className="text-sm text-muted-foreground">{t("settings.help_support_desc")}</p>
              </div>
            </div>
            <Button variant="outline">{t("settings.contact")}</Button>
          </div>

          <div className="pt-4 mt-4 border-t">
            <Button variant="destructive" className="w-full">
              <LogOut className="h-4 w-4 mr-2" />
              {t("settings.logout")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

