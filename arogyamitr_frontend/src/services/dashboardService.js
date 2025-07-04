//
// PUBLIC_INTERFACE
// Stub dashboard service for fetching dashboard data/stat cards.
// Replace with API calls for real user data.

export async function fetchDashboardStats() {
  await new Promise(res => setTimeout(res, 220));
  return [
    { key: "steps", label: "Steps Today", value: "8,231", description: "Target: 10k", icon: "👣", accent: "#F3B53F" },
    { key: "sleep", label: "Sleep Last Night", value: "7h 15m", description: "Sleep Score: 86", icon: "🛌", accent: "#2D8C7E" },
    { key: "mindfulness", label: "Mindful Minutes", value: "22 min", description: "Streak: 5 days", icon: "🧘‍♀️", accent: "#384D6C" },
    { key: "hydration", label: "Water Intake", value: "1.7L", description: "Goal: 2.5L", icon: "💧", accent: "#45A3FC" },
  ];
}
