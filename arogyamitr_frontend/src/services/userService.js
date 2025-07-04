import { BASE_API_URL } from "./apiConfig";

/**
 * PUBLIC_INTERFACE
 * Fetch user profile data from the backend API.
 * @param {string|number} userId
 * @returns {Promise<object>}
 */
export async function fetchUserProfile(userId) {
  const resp = await fetch(`${BASE_API_URL}/users/${userId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  if (!resp.ok) {
    throw new Error("Failed to fetch user profile");
  }
  return await resp.json();
}

/**
 * PUBLIC_INTERFACE
 * Update user profile details via backend API.
 * @param {object} userObj
 * @returns {Promise<object>}
 */
export async function updateUserProfile(userObj) {
  const resp = await fetch(`${BASE_API_URL}/users/${userObj.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userObj)
  });
  if (!resp.ok) {
    throw new Error("Failed to update user profile");
  }
  return await resp.json();
}
