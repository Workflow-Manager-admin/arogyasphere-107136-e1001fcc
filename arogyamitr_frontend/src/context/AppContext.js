import React, { createContext, useContext, useState, useMemo } from "react";

/**
 * PUBLIC_INTERFACE
 * AppContext provides app-level state: auth, user profile, dashboard and loading/errors.
 * Intended as a future-proof container for cross-module state, including:
 * - isAuthenticated, user info, loading state, error state
 * - Stub async methods for API simulation
 */

const AppContext = createContext();

/**
 * AppProvider wraps the app and provides context state/handlers.
 */
export function AppProvider({ children }) {
  // --- Dummy authentication state (will be replaced with real logic) ---
  const [isAuthenticated, setIsAuthenticated] = useState(true); // default: 'true' for prototype
  const [user, setUser] = useState({ id: 1, name: "Priya Sharma", email: "priya@email.com", plan: "Premium" });
  const [dashboardState, setDashboardState] = useState({
    statCards: [
      { key: "steps", label: "Steps Today", value: "8,231", description: "Target: 10k", icon: "👣", accent: "#F3B53F" },
      { key: "sleep", label: "Sleep Last Night", value: "7h 15m", description: "Sleep Score: 86", icon: "🛌", accent: "#2D8C7E" },
      { key: "mindfulness", label: "Mindful Minutes", value: "22 min", description: "Streak: 5 days", icon: "🧘‍♀️", accent: "#384D6C" },
      { key: "hydration", label: "Water Intake", value: "1.7L", description: "Goal: 2.5L", icon: "💧", accent: "#45A3FC" },
    ]
  });
  const [isLoading, setIsLoading] = useState(false);
  const [appError, setAppError] = useState(null);

  // --- Placeholder for API sim ---
  async function login(email, password) {
    setIsLoading(true);
    setAppError(null);
    // Simulate a success, real API goes here.
    await new Promise(res => setTimeout(res, 600));
    setUser({ id: 1, name: "Priya Sharma", email, plan: "Premium" });
    setIsAuthenticated(true);
    setIsLoading(false);
    // return some dummy token or user obj
    return { success: true };
  }

  async function logout() {
    setIsLoading(true);
    await new Promise(res => setTimeout(res, 300));
    setIsAuthenticated(false);
    setUser(null);
    setIsLoading(false);
  }

  async function fetchDashboardData() {
    setIsLoading(true);
    setAppError(null);
    // Simulate dashboard data fetch
    await new Promise(res => setTimeout(res, 350));
    setDashboardState((prev) => ({
      ...prev,
      fetched: true,
    }));
    setIsLoading(false);
  }

  // Bundle context value.
  const contextValue = useMemo(() => ({
    // Auth
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser,
    login,
    logout,
    // Dashboard
    dashboardState,
    setDashboardState,
    fetchDashboardData,
    // Loading/Error
    isLoading,
    appError,
    setAppError,
  }), [isAuthenticated, user, dashboardState, isLoading, appError]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

/**
 * PUBLIC_INTERFACE
 * Hook for components to access AppContext (state + actions).
 */
export function useAppContext() {
  const ctx = useContext(AppContext);
  if (ctx === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return ctx;
}
