import React, { createContext, useContext, useState, useCallback } from "react";

/**
 * PUBLIC_INTERFACE
 * NotificationContext provides app-level notifications:
 * - Health reminders, activity alerts, and system messages
 * - Contains logic for displaying/appending new notifications
 * - Used by notification bell/widget and notification list
 */

const NotificationContext = createContext();

/**
 * Notification object shape:
 * {
 *   id: string,
 *   type: "health" | "activity" | "system",
 *   title: string,
 *   message: string,
 *   time: Date,
 *   read: boolean
 * }
 */

/**
 * App-level provider to manage the notification array, reading/unread state, etc.
 */
export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([
    // Demo/initial notifications
    {
      id: "1",
      type: "health",
      title: "Hydration Reminder",
      message: "Time to drink a glass of water! Stay hydrated.",
      time: new Date(Date.now() - 1000 * 60 * 60),
      read: false
    },
    {
      id: "2",
      type: "activity",
      title: "Movement Alert",
      message: "You've been inactive for 1 hour. Try a quick stretch or walk.",
      time: new Date(Date.now() - 1000 * 60 * 58),
      read: false
    },
    {
      id: "3",
      type: "system",
      title: "System Maintenance",
      message: "Scheduled maintenance at 8:00 PM tonight.",
      time: new Date(Date.now() - 1000 * 60 * 200),
      read: true
    }
  ]);

  // PUBLIC_INTERFACE
  // Appends a new notification to the stack
  const pushNotification = useCallback((notif) => {
    setNotifications((prev) => [
      {
        ...notif,
        id: String(Date.now()),
        read: false,
        time: new Date()
      },
      ...prev
    ]);
  }, []);

  // PUBLIC_INTERFACE
  // Marks notification as read by id
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  // PUBLIC_INTERFACE
  // Marks all notifications as read
  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  // PUBLIC_INTERFACE
  // Removes notification by id
  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  // Unread notifications count
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        pushNotification,
        markAsRead,
        markAllAsRead,
        removeNotification,
        unreadCount
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

/**
 * PUBLIC_INTERFACE
 * Custom hook to use notification context.
 */
export function useNotification() {
  const ctx = useContext(NotificationContext);
  if (!ctx) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return ctx;
}
