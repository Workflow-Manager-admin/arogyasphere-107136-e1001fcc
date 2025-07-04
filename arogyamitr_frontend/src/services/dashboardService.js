import { BASE_API_URL } from "./apiConfig";

/**
 * PUBLIC_INTERFACE
 * Fetch dashboard statistics/cards from backend API for the authenticated user.
 * @returns {Promise<Array>} Array of dashboard stat card objects.
 */
export async function fetchDashboardStats() {
  const resp = await fetch(`${BASE_API_URL}/dashboard/stats`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
    // Optionally add Authorization header: e.g., 'Authorization': `Bearer ${token}`
  });
  if (!resp.ok) {
    throw new Error("Failed to fetch dashboard stats");
  }
  return await resp.json();
}
