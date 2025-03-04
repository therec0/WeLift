import type { WorkoutProgram } from "./types"

// Sample workout programs based on different experience levels and goals
const workoutPrograms: WorkoutProgram[] = [
  {
    id: "beginner-strength",
    name: "Beginner Strength Foundation",
    description: "Build a solid foundation with compound movements",
    level: "beginner",
    daysPerWeek: 3,
    duration: 8,
    focus: ["build_muscle", "improve_strength"],
    workouts: [
      {
        name: "Full Body A",
        exercises: [
          { name: "Squat", sets: 3, reps: "8-10", rest: 90 },
          { name: "Bench Press", sets: 3, reps: "8-10", rest: 90 },
          { name: "Bent Over Row", sets: 3, reps: "8-10", rest: 90 },
          { name: "Shoulder Press", sets: 2, reps: "10-12", rest: 60 },
          { name: "Plank", sets: 3, reps: "30s", rest: 60 },
        ],
      },
      {
        name: "Full Body B",
        exercises: [
          { name: "Deadlift", sets: 3, reps: "8-10", rest: 90 },
          { name: "Pull-up or Lat Pulldown", sets: 3, reps: "8-10", rest: 90 },
          { name: "Dumbbell Lunges", sets: 3, reps: "10 each leg", rest: 60 },
          { name: "Push-ups", sets: 3, reps: "10-15", rest: 60 },
          { name: "Russian Twists", sets: 3, reps: "15 each side", rest: 60 },
        ],
      },
    ],
  },
  {
    id: "beginner-weight-loss",
    name: "Beginner Fat Loss",
    description: "Burn calories and build muscle for weight loss",
    level: "beginner",
    daysPerWeek: 4,
    duration: 8,
    focus: ["lose_weight", "improve_health"],
    workouts: [
      {
        name: "Upper Body",
        exercises: [
          { name: "Push-ups", sets: 3, reps: "10-15", rest: 45 },
          { name: "Dumbbell Rows", sets: 3, reps: "12-15", rest: 45 },
          { name: "Shoulder Press", sets: 3, reps: "12-15", rest: 45 },
          { name: "Bicep Curls", sets: 3, reps: "12-15", rest: 45 },
          { name: "Tricep Dips", sets: 3, reps: "12-15", rest: 45 },
        ],
      },
      {
        name: "Lower Body",
        exercises: [
          { name: "Bodyweight Squats", sets: 3, reps: "15-20", rest: 45 },
          { name: "Walking Lunges", sets: 3, reps: "12 each leg", rest: 45 },
          { name: "Glute Bridges", sets: 3, reps: "15-20", rest: 45 },
          { name: "Calf Raises", sets: 3, reps: "15-20", rest: 45 },
          { name: "Mountain Climbers", sets: 3, reps: "30s", rest: 45 },
        ],
      },
      {
        name: "HIIT Cardio",
        exercises: [
          { name: "Jumping Jacks", sets: 1, reps: "30s work, 15s rest", rest: 15 },
          { name: "Burpees", sets: 1, reps: "30s work, 15s rest", rest: 15 },
          { name: "High Knees", sets: 1, reps: "30s work, 15s rest", rest: 15 },
          { name: "Mountain Climbers", sets: 1, reps: "30s work, 15s rest", rest: 15 },
          { name: "Jump Squats", sets: 1, reps: "30s work, 15s rest", rest: 15 },
        ],
      },
    ],
  },
  {
    id: "intermediate-hypertrophy",
    name: "Intermediate Hypertrophy",
    description: "Focus on muscle growth with higher volume training",
    level: "intermediate",
    daysPerWeek: 5,
    duration: 10,
    focus: ["build_muscle"],
    workouts: [
      {
        name: "Push Day",
        exercises: [
          { name: "Bench Press", sets: 4, reps: "8-10", rest: 90 },
          { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: 90 },
          { name: "Shoulder Press", sets: 3, reps: "8-10", rest: 90 },
          { name: "Lateral Raises", sets: 3, reps: "12-15", rest: 60 },
          { name: "Tricep Pushdowns", sets: 3, reps: "12-15", rest: 60 },
          { name: "Overhead Tricep Extension", sets: 3, reps: "12-15", rest: 60 },
        ],
      },
      {
        name: "Pull Day",
        exercises: [
          { name: "Pull-ups", sets: 4, reps: "8-10", rest: 90 },
          { name: "Bent Over Rows", sets: 3, reps: "8-10", rest: 90 },
          { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: 90 },
          { name: "Face Pulls", sets: 3, reps: "12-15", rest: 60 },
          { name: "Bicep Curls", sets: 3, reps: "12-15", rest: 60 },
          { name: "Hammer Curls", sets: 3, reps: "12-15", rest: 60 },
        ],
      },
      {
        name: "Leg Day",
        exercises: [
          { name: "Squats", sets: 4, reps: "8-10", rest: 120 },
          { name: "Romanian Deadlifts", sets: 3, reps: "8-10", rest: 90 },
          { name: "Leg Press", sets: 3, reps: "10-12", rest: 90 },
          { name: "Leg Extensions", sets: 3, reps: "12-15", rest: 60 },
          { name: "Leg Curls", sets: 3, reps: "12-15", rest: 60 },
          { name: "Calf Raises", sets: 4, reps: "15-20", rest: 60 },
        ],
      },
    ],
  },
  {
    id: "advanced-strength",
    name: "Advanced Strength Program",
    description: "Maximize strength gains with periodized training",
    level: "advanced",
    daysPerWeek: 5,
    duration: 12,
    focus: ["improve_strength"],
    workouts: [
      {
        name: "Upper Power",
        exercises: [
          { name: "Bench Press", sets: 5, reps: "3-5", rest: 180 },
          { name: "Weighted Pull-ups", sets: 5, reps: "3-5", rest: 180 },
          { name: "Overhead Press", sets: 4, reps: "4-6", rest: 150 },
          { name: "Barbell Rows", sets: 4, reps: "4-6", rest: 150 },
          { name: "Close Grip Bench Press", sets: 3, reps: "6-8", rest: 120 },
        ],
      },
      {
        name: "Lower Power",
        exercises: [
          { name: "Squats", sets: 5, reps: "3-5", rest: 180 },
          { name: "Deadlifts", sets: 5, reps: "3-5", rest: 180 },
          { name: "Leg Press", sets: 4, reps: "4-6", rest: 150 },
          { name: "Walking Lunges", sets: 3, reps: "6-8 each leg", rest: 120 },
          { name: "Hanging Leg Raises", sets: 3, reps: "10-12", rest: 90 },
        ],
      },
      {
        name: "Upper Hypertrophy",
        exercises: [
          { name: "Incline Dumbbell Press", sets: 4, reps: "8-12", rest: 90 },
          { name: "Cable Rows", sets: 4, reps: "8-12", rest: 90 },
          { name: "Dumbbell Shoulder Press", sets: 3, reps: "8-12", rest: 90 },
          { name: "Lat Pulldowns", sets: 3, reps: "8-12", rest: 90 },
          { name: "Tricep Extensions", sets: 3, reps: "10-15", rest: 60 },
          { name: "Bicep Curls", sets: 3, reps: "10-15", rest: 60 },
        ],
      },
      {
        name: "Lower Hypertrophy",
        exercises: [
          { name: "Front Squats", sets: 4, reps: "8-12", rest: 90 },
          { name: "Romanian Deadlifts", sets: 4, reps: "8-12", rest: 90 },
          { name: "Hack Squats", sets: 3, reps: "10-15", rest: 90 },
          { name: "Leg Curls", sets: 3, reps: "10-15", rest: 60 },
          { name: "Seated Calf Raises", sets: 4, reps: "12-15", rest: 60 },
        ],
      },
    ],
  },
]

export function getRecommendedWorkouts(userData: any): WorkoutProgram[] {
  // Filter programs based on user's experience level
  let filteredPrograms = workoutPrograms.filter((program) => program.level === userData.experienceLevel)

  // If no exact match, provide programs for the closest lower level
  if (filteredPrograms.length === 0) {
    if (userData.experienceLevel === "advanced") {
      filteredPrograms = workoutPrograms.filter((program) => program.level === "intermediate")
    } else if (userData.experienceLevel === "intermediate") {
      filteredPrograms = workoutPrograms.filter((program) => program.level === "beginner")
    }
  }

  // Further filter by fitness goals if available
  if (userData.fitnessGoals && userData.fitnessGoals.length > 0) {
    const goalFiltered = filteredPrograms.filter((program) =>
      program.focus.some((focus) => userData.fitnessGoals.includes(focus)),
    )

    // If we have programs matching goals, use those
    if (goalFiltered.length > 0) {
      filteredPrograms = goalFiltered
    }
  }

  // If still no programs, return default ones
  if (filteredPrograms.length === 0) {
    return workoutPrograms.slice(0, 2)
  }

  return filteredPrograms
}

