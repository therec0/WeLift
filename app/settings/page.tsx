import { Suspense } from "react"
import SettingsPage from "@/components/settings/settings-page"
import LoadingSpinner from "@/components/ui/loading-spinner"

export default function Settings() {
  return (
    <div className="container p-4">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <SettingsPage />
      </Suspense>
    </div>
  )
}

