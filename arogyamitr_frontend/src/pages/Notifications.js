import React from "react";
import { useNotification } from "../context/NotificationContext";

/**
 * PUBLIC_INTERFACE
 * NotificationList: Full-page list of notifications with controls to mark as read/delete.
 */
export default function Notifications() {
  const { notifications, markAsRead, removeNotification, markAllAsRead } = useNotification();

  return (
    <section>
      <h1>Notifications</h1>
      <button onClick={markAllAsRead} style={markAllBtnStyle}>Mark all as read</button>
      <div style={listStyle}>
        {notifications.length === 0 && (
          <div style={{ color: "#888", padding: 32, textAlign: "center" }}>
            No notifications to display.
          </div>
        )}
        {notifications.map((n) => (
          <div
            key={n.id}
            style={{
              ...itemStyle,
              background: n.read ? "#f8f9fb" : "#FFF8E3"
            }}
          >
            <div style={{ fontWeight: 600, color: typeColor(n.type) }}>{n.title}</div>
            <div style={{ fontSize: 14.2, margin: "1px 0 2px 0" }}>{n.message}</div>
            <div style={{ fontSize: 12, color: "#98a", marginBottom: 8 }}>{formatTimeAgo(n.time)}</div>
            <div>
              <button
                style={n.read ? btnMiniGray : btnMini}
                onClick={() => markAsRead(n.id)}
                disabled={n.read}
              >{n.read ? "Read" : "Mark as read"}</button>
              <button
                style={btnMini}
                onClick={() => removeNotification(n.id)}
                title="Delete notification"
              >Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Styles
const listStyle = { marginTop: 24, minWidth: 290, maxWidth: 540 };
const itemStyle = {
  background: "#FFF8E3",
  borderRadius: 12,
  boxShadow: "0 1px 7px #F3B53F20",
  marginBottom: 19,
  padding: "16px 20px"
};
const btnMini = {
  background: "#2D8C7E",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  padding: "6px 13px",
  marginRight: 10,
  fontWeight: 600,
  cursor: "pointer"
};
const btnMiniGray = { ...btnMini, background: "#bccfc6", color: "#fff", cursor: "default" };
const markAllBtnStyle = {
  marginBottom: 14,
  background: "#F3B53F",
  color: "#322",
  border: "none",
  borderRadius: 7,
  padding: "6px 18px",
  fontWeight: 700,
  boxShadow: "0 1px 4px #f3b53f18",
  cursor: "pointer"
};

function formatTimeAgo(date) {
  if (!(date instanceof Date)) date = new Date(date);
  const now = new Date();
  const diff = Math.max((now - date) / 1000, 1);
  if (diff < 60) return "Just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return date.toLocaleDateString();
}
function typeColor(type) {
  if (type === "health") return "#2D8C7E";
  if (type === "activity") return "#384D6C";
  return "#F3B53F";
}
