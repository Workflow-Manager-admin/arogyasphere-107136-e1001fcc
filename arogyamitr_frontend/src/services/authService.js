import { BASE_API_URL } from "./apiConfig";

/**
 * PUBLIC_INTERFACE
 * Login with email and password against backend REST API.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<object>} { success, token, user }
 */
export async function login(email, password) {
  const resp = await fetch(`${BASE_API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  if (!resp.ok) {
    return { success: false, message: "Invalid credentials" };
  }

  const data = await resp.json();
  // Expected data: { token, user }
  return { success: true, token: data.token, user: data.user };
}

/**
 * PUBLIC_INTERFACE
 * Logout if supported by backend (token blacklisting), or just a stub.
 */
export async function logout() {
  // If backend has a logout endpoint (e.g., /auth/logout), fire and forget
  // For typical JWT SPA flows, this can just clear local storage
  // Uncomment below if backend logout needed
  // await fetch(`${BASE_API_URL}/auth/logout`, { method: "POST", credentials: "include" });
  return { success: true };
}

/**
 * PUBLIC_INTERFACE
 * Register a new user via API.
 */
export async function signup(name, email, password) {
  const resp = await fetch(`${BASE_API_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  });

  if (!resp.ok) {
    const err = await resp.json();
    return { success: false, message: err.error || "Signup failed" };
  }
  const data = await resp.json();
  return { success: true, user: data.user };
}

/**
 * PUBLIC_INTERFACE
 * Social login redirection/integration.
 */
export async function socialLogin(provider) {
  // This usually redirects to OAuth URL or makes a backend API call.
  // Placeholder: fire and forget to /auth/social/:provider or similar
  const resp = await fetch(`${BASE_API_URL}/auth/social/${provider}`, {
    method: "POST"
  });
  if (!resp.ok) {
    return { success: false, message: "Social login failed" };
  }
  const data = await resp.json();
  return { success: true, user: data.user };
}
