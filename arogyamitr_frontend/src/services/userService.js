//
// PUBLIC_INTERFACE
// Stub user profile service for fetching/updating user data.
// Replace with REST/GraphQL logic.
//

export async function fetchUserProfile(userId) {
  await new Promise(res => setTimeout(res, 320));
  // Return dummy user data
  return {
    id: userId,
    name: "Priya Sharma",
    email: "priya@email.com",
    plan: "Premium",
    devices: [
      { name: "Fitbit Inspire 2", type: "Fitness Tracker", status: "Active", icon: "⌚️" },
      { name: "OMRON BP Monitor", type: "BP Monitor", status: "Last sync: 5h ago", icon: "🩺" }
    ]
  };
}

export async function updateUserProfile(userObj) {
  await new Promise(res => setTimeout(res, 250));
  // Simulate successful update
  return { ...userObj, updated: true };
}
