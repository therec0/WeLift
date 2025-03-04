export interface Exercise {
  id: string
  name: string
  muscleGroup: string
  category: string
  equipment: string
  description?: string
  showProgress?: boolean
  lastWeight?: number
  lastReps?: number
  unit: string
}

export interface WorkoutSet {
  reps: number
  weight: number
  completed: boolean
}

export interface Workout {
  id: string
  name: string
  date: Date
  duration: number
  exercises: {
    exercise: Exercise
    sets: WorkoutSet[]
  }[]
}

export interface JournalEntry {
  id: string
  date: string
  title: string
  content: string
  mood?: number
  tags: string[]
  type: "note" | "workout"
}

export interface Supplement {
  id: string
  name: string
  dosage: string
  frequency: string
  timeOfDay: string[]
  taken: boolean
}

export interface MoodEntry {
  date: Date
  score: number
  notes?: string
}

export interface WorkoutExercise {
  name: string
  sets: number
  reps: string
  rest: number
}

export interface WorkoutDay {
  name: string
  exercises: WorkoutExercise[]
}

export interface WorkoutProgram {
  id: string
  name: string
  description: string
  level: "beginner" | "intermediate" | "advanced"
  daysPerWeek: number
  duration: number
  focus: string[]
  workouts: WorkoutDay[]
}

