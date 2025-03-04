"use client"

import { useEffect, useState } from "react"

const translations = {
  en: {
    exercises: {
      title: "Exercises",
      search: "Search exercises...",
      filter: "Filter",
      add_new: "Add New",
      all: "All",
      strength: "Strength",
      cardio: "Cardio",
      flexibility: "Flexibility",
      no_results: "No exercises found",
      progress: "Progress",
    },
    journal: {
      title: "Journal",
      new_entry: "New Entry",
      search: "Search journal...",
      all: "All",
      notes: "Notes",
      workouts: "Workouts",
      moods: "Moods",
      no_entries: "No entries found",
      mood_tracker: "Mood Tracker",
      today_mood: "Today's Mood",
      show_more: "Show more",
      show_less: "Show less",
      edit: "Edit",
      delete: "Delete",
      entry_type: "Entry Type",
      note: "Note",
      workout: "Workout",
      title: "Title",
      title_placeholder: "Enter a title for your entry",
      content: "Content",
      note_placeholder: "Write your thoughts here...",
      workout_placeholder: "Record your workout details here...",
      mood: "Mood",
      tags: "Tags",
      tags_placeholder: "Enter tags separated by commas",
      cancel: "Cancel",
      save: "Save",
    },
    workout: {
      title: "Workout",
      selected_exercises: "Selected Exercises",
      search_exercises: "Search exercises to add...",
      no_results: "No exercises found",
      recent: "Recent",
      favorites: "Favorites",
      templates: "Templates",
      use_template: "Use Template",
      start_workout: "Start Workout",
      reps: "Reps",
      weight: "Weight",
      add_set: "Add Set",
    },
    calendar: {
      title: "Calendar",
    },
    settings: {
      title: "Settings",
      appearance: "Appearance",
      dark_mode: "Dark Mode",
      dark_mode_desc: "Toggle between light and dark mode",
      system: "System",
      light: "Light",
      dark: "Dark",
      language: "Language",
      language_desc: "Change the app language",
      english: "English",
      turkish: "Turkish",
      finnish: "Finnish",
      preferences: "Preferences",
      notifications: "Notifications",
      notifications_desc: "Enable workout reminders",
      units: "Units",
      units_desc: "Choose your preferred units",
      metric: "Metric (kg)",
      imperial: "Imperial (lb)",
      rest_timer: "Rest Timer",
      rest_timer_desc: "Default rest time between sets",
      custom: "Custom",
      supplement_tracking: "Supplement Tracking",
      supplement_tracking_desc: "Track your supplement intake",
      data: "Data",
      export_data: "Export Data",
      export_data_desc: "Download all your workout data",
      export: "Export",
      about: "About",
      help_support: "Help & Support",
      help_support_desc: "Get help or contact support",
      contact: "Contact",
      logout: "Log Out",
    },
    dashboard: {
      greeting: "Hello, Athlete!",
      greeting_name: "Hello, {{name}}!",
      today: "Today",
      weekly_progress: "Weekly Progress",
      workouts_completed: "Workouts Completed",
      total_workouts: "Total Workouts",
      pr_this_month: "PRs This Month",
      workout: "Workout",
      mood: "Mood",
      supplements: "Supplements",
      last_workout: "Last Workout",
      exercises: "Exercises",
      mood_tracker: "Mood Tracker",
      weekly_mood: "Weekly Mood",
      today_mood: "Today's Mood",
      supplement_tracker: "Supplement Tracker",
      take: "Take",
    },
    onboarding: {
      back: "Back",
      next: "Next",
      finish: "Finish",
      theme: {
        title: "Choose Your Theme",
        subtitle: "Select a theme for your app experience",
        light: "Light Mode",
        light_desc: "Bright interface for daytime use",
        dark: "Dark Mode",
        dark_desc: "Easier on the eyes in low light",
        system: "System Default",
        system_desc: "Follows your device settings",
      },
      name: {
        title: "What's Your Name?",
        subtitle: "Let us personalize your experience",
        placeholder: "Enter your name",
      },
      import: {
        title: "Import Your Data",
        subtitle: "Bring your workout history from other apps",
        hevy_desc: "Import your workouts from Hevy",
        strong_desc: "Import your workouts from Strong",
        import_button: "Import",
        skip: "Skip this step",
      },
      goals: {
        title: "Your Fitness Goals",
        subtitle: "Select all that apply to you",
        build_muscle: "Build Muscle",
        build_muscle_desc: "Increase muscle mass and size",
        lose_weight: "Lose Weight",
        lose_weight_desc: "Reduce body fat and improve definition",
        improve_strength: "Improve Strength",
        improve_strength_desc: "Increase maximal strength",
        improve_health: "Improve Health",
        improve_health_desc: "Enhance overall fitness and wellbeing",
        increase_endurance: "Increase Endurance",
        increase_endurance_desc: "Improve stamina and cardiovascular fitness",
      },
      experience: {
        title: "Your Experience Level",
        subtitle: "This helps us recommend appropriate workouts",
        beginner: "Beginner",
        beginner_desc: "New to strength training or returning after a long break",
        intermediate: "Intermediate",
        intermediate_desc: "Consistent training for 6+ months with good form",
        advanced: "Advanced",
        advanced_desc: "Experienced lifter with 2+ years of consistent training",
      },
    },
    recommendations: {
      personalized_title: "Your Personalized Plan",
      personalized_description: "Based on your goals and experience level",
      experience_level: "Experience Level",
      recommended_frequency: "Recommended Frequency",
      days_per_week: "days per week",
      programs: "Programs",
      workouts: "Workouts",
      view: "View",
      program_structure: "Program Structure",
      exercises: "exercises",
      show_more: "Show more",
      show_less: "Show less",
      start_program: "Start Program",
      weeks: "weeks",
      no_profile: "No Profile Found",
      complete_onboarding: "Please complete the onboarding process to get personalized recommendations",
      go_to_onboarding: "Go to Onboarding",
    },
    app: {
      title: "Gym Tracker",
    },
    navigation: {
      title: "Navigation",
    },
    tools: {
      title: "Quick Actions",
    },
    supplements: {
      title: "Supplements",
    },
    todo: {
      title: "To-Do",
    },
  },
  tr: {
    exercises: {
      title: "Egzersizler",
      search: "Egzersiz ara...",
      filter: "Filtrele",
      add_new: "Yeni Ekle",
      all: "Tümü",
      strength: "Kuvvet",
      cardio: "Kardio",
      flexibility: "Esneklik",
      no_results: "Egzersiz bulunamadı",
      progress: "İlerleme",
    },
    journal: {
      title: "Günlük",
      // Other Turkish translations would continue here
    },
    workout: {
      title: "Antrenman",
      // Other Turkish translations would continue here
    },
    calendar: {
      title: "Takvim",
    },
    settings: {
      title: "Ayarlar",
      // Other Turkish translations would continue here
    },
  },
  fi: {
    exercises: {
      title: "Harjoitukset",
      search: "Etsi harjoituksia...",
      filter: "Suodata",
      add_new: "Lisää Uusi",
      all: "Kaikki",
      strength: "Voima",
      cardio: "Kardio",
      flexibility: "Joustavuus",
      no_results: "Harjoituksia ei löytynyt",
      progress: "Edistyminen",
    },
    journal: {
      title: "Päiväkirja",
      // Other Finnish translations would continue here
    },
    workout: {
      title: "Treeni",
      // Other Finnish translations would continue here
    },
    calendar: {
      title: "Kalenteri",
    },
    settings: {
      title: "Asetukset",
      // Other Finnish translations would continue here
    },
  },
}

export function useTranslation() {
  const [language, setLanguage] = useState("en")

  const t = (key: string, params?: Record<string, string>) => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (!value || typeof value !== "object") return key
      value = value[k]
      if (value === undefined) return key
    }

    // If the value is an object, it means we're trying to access a parent key
    // instead of a leaf node (actual translation string)
    if (typeof value === "object") {
      return key // Return the key itself as fallback
    }

    // Handle parameter replacement
    if (params && typeof value === "string") {
      return Object.entries(params).reduce((str, [key, val]) => {
        return str.replace(new RegExp(`{{${key}}}`, "g"), val)
      }, value)
    }

    return value
  }

  const i18n = {
    changeLanguage: (lang: string) => {
      setLanguage(lang)
      localStorage.setItem("language", lang)
    },
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage && ["en", "tr", "fi"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  return { t, i18n }
}

