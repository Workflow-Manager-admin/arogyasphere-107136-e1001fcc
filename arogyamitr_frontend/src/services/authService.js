//
// PUBLIC_INTERFACE
// Stub authentication service for sign in, sign up, and social auth.
// Replace with real REST/GraphQL calls later.
//

export async function login(email, password) {
  // Simulate API call
  await new Promise(res => setTimeout(res, 400));
  // Dummy success
  return { success: true, token: "dummy-token", user: { id: 1, name: "Priya Sharma", email } };
}

export async function logout() {
  await new Promise(res => setTimeout(res, 150));
  return { success: true };
}

export async function signup(name, email, password) {
  await new Promise(res => setTimeout(res, 500));
  return { success: true, user: { id: 2, name, email } };
}

// Placeholder for social login
export async function socialLogin(provider) {
  await new Promise(res => setTimeout(res, 350));
  return { success: true, user: { id: 3, name: "Social User", email: "social@example.com" } };
}
