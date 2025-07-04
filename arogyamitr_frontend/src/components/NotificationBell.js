import React, { useState, useRef, useEffect } from "react";
import { useNotification } from "../context/NotificationContext";

/**
 * PUBLIC_INTERFACE
 * NotificationBell: Displays a bell icon with badge for unread count.
 * Opens a drop-down menu to reveal recent notifications.
 */
export default function NotificationBell() {
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotification();
  const [open, setOpen] = useState(false);
  const bellRef = useRef();

  // Close dropdown on click outside
  useEffect(() => {
    function handleClick(e) {
      if (open && bellRef.current && !bellRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={bellRef} style={{ position: "relative", marginLeft: 14 }}>
      <button
        aria-label="Notifications"
        style={bellBtnStyle}
        onClick={() => setOpen(v => !v)}
      >
        <span role="img" aria-label="bell" style={{ fontSize: 25 }}>🔔</span>
        {unreadCount > 0 && (
          <span style={badgeStyle}>{unreadCount}</span>
        )}
      </button>
      {open && (
        <div style={dropdownStyle}>
          <div style={{ padding: "10px 16px", fontWeight: 700 }}>
            Notifications
            {unreadCount > 0 && (
              <button
                style={markAllBtnStyle}
                onClick={markAllAsRead}
                title="Mark all as read"
              >
                Mark all as read
              </button>
            )}
          </div>
          <div style={{ maxHeight: 310, overflowY: "auto", minWidth: 270 }}>
            {notifications.length === 0 && (
              <div style={{ padding: 18, color: "#999", textAlign: "center" }}>
                No notifications.
              </div>
            )}
            {notifications.slice(0, 8).map((notif) => (
              <div
                key={notif.id}
                style={{
                  ...notifRowStyle,
                  background: notif.read ? "#f4f6f9" : "#F3B53F15"
                }}
                onClick={() => markAsRead(notif.id)}
              >
                <div style={{ fontWeight: 700, color: typeColor(notif.type) }}>
                  {notif.title}
                </div>
                <div style={{ fontSize: 13.2, color: "#334", margin: "2px 0 7px 0" }}>
                  {notif.message}
                </div>
                <div style={{ fontSize: 12, color: "#888", textAlign: "right" }}>
                  {formatTimeAgo(notif.time)}
                </div>
              </div>
            ))}
          </div>
          <a
            href="/notifications"
            style={{
              display: "block",
              textAlign: "center",
              color: "#2D8C7E",
              padding: 12,
              textDecoration: "underline",
              fontSize: 14.5,
              borderTop: "1px solid #eee"
            }}
            onClick={() => setOpen(false)}
          >
            View all
          </a>
        </div>
      )}
    </div>
  );
}

// ==== Styles ====
const bellBtnStyle = {
  background: "none",
  border: "none",
  cursor: "pointer",
  position: "relative",
  outline: "none"
};
const badgeStyle = {
  position: "absolute",
  top: "-4px",
  right: "-2px",
  background: "#F3B53F",
  color: "#222",
  borderRadius: "50%",
  minWidth: 18,
  height: 18,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 800,
  fontSize: 12
};
const dropdownStyle = {
  position: "absolute",
  right: 0,
  top: 42,
  background: "#fff",
  borderRadius: 11,
  boxShadow: "0 4px 28px #2223",
  zIndex: 11,
  minWidth: 265,
  maxWidth: 340,
  overflow: "hidden"
};
const notifRowStyle = {
  padding: "12px 17px 8px 17px",
  borderBottom: "1px solid #f3f3f3",
  cursor: "pointer"
};
const markAllBtnStyle = {
  float: "right",
  padding: "2px 9px",
  fontSize: 13,
  background: "#2D8C7E",
  color: "#fff",
  border: "none",
  borderRadius: 7,
  cursor: "pointer"
};

// Helper functions
function formatTimeAgo(date) {
  if (!(date instanceof Date)) date = new Date(date);
  const now = new Date();
  const diff = Math.max((now - date) / 1000, 1); // sec
  if (diff < 60) return "Just now";
  if (diff < 60 * 60) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 60 * 60 * 24) return `${Math.floor(diff / 60 / 60)}h ago`;
  return date.toLocaleDateString();
}
function typeColor(type) {
  if (type === "health") return "#2D8C7E";
  if (type === "activity") return "#384D6C";
  return "#F3B53F";
}
