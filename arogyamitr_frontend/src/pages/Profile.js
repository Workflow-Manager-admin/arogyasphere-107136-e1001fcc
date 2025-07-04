import React from "react";

/*
PUBLIC_INTERFACE
Profile page for ArogyaMitr: user account information, device connections, and preferences.
Modern UI: rounded cards, mobile responsiveness, modular structure, and placeholders for future enhancements.
*/
export default function Profile() {
  // Placeholder user data (to be replaced with real API integration)
  const userData = {
    name: "Priya Sharma",
    email: "priya@email.com",
    avatar: "🧑‍⚕️",
    plan: "Premium",
    country: "India"
  };

  // Example connected devices (demo, for extensibility)
  const devices = [
    { name: "Fitbit Inspire 2", type: "Fitness Tracker", status: "Syncing", icon: "⌚️" },
    { name: "OMRON BP Monitor", type: "Blood Pressure", status: "Last sync: 5h ago", icon: "🩺" },
  ];

  // Example preferences stub
  const prefs = [
    { key: "theme", label: "Dark Mode", value: "Auto" },
    { key: "reminders", label: "Health Reminders", value: "On" },
    { key: "language", label: "Language", value: "English" }
  ];

  return (
    <section>
      {/* User Profile Card */}
      <div style={sectionStyle}>
        <div style={cardStyle}>
          <div style={profileHeader}>
            <div style={avatarStyle}>{userData.avatar}</div>
            <div>
              <div style={nameStyle}>{userData.name}</div>
              <div style={detailStyle}>{userData.email}</div>
              <div style={detailStyle}><b>Plan:</b> {userData.plan}</div>
              <div style={detailStyle}><b>Country:</b> {userData.country}</div>
            </div>
          </div>
          <button style={btnStyle}>Edit Profile</button>
        </div>
      </div>

      {/* Device Connections */}
      <div style={sectionStyle}>
        <h2 style={sectionHeader}>Device Connections</h2>
        <div style={cardGridStyle}>
          {devices.map((dev, idx) =>
            <div key={idx} style={cardStyle}>
              <div style={deviceHeader}>
                <span style={deviceIcon}>{dev.icon}</span>
                <div>
                  <div style={deviceName}>{dev.name}</div>
                  <div style={deviceType}>{dev.type}</div>
                  <div style={deviceStatus}>{dev.status}</div>
                </div>
              </div>
              <button style={secondaryBtnStyle}>Manage</button>
            </div>
          )}
          {/* Placeholder for adding new integrations */}
          <div style={{ ...cardStyle, justifyContent: "center", alignItems: "center", minHeight: 120, cursor: "pointer", color: "#aaa" }}>
            <div style={{ fontSize: 36 }}>+</div>
            <div style={{ fontSize: 14, marginTop: 4 }}>Add Device</div>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div style={sectionStyle}>
        <h2 style={sectionHeader}>Preferences</h2>
        <div style={prefsGridStyle}>
          {prefs.map((p) =>
            <div key={p.key} style={miniCardStyle}>
              <div style={prefLabel}>{p.label}</div>
              <div style={prefValue}>{p.value}</div>
            </div>
          )}
          <div style={miniCardStyle}> {/* Extensible placeholder */} + Add Preference </div>
        </div>
      </div>
    </section>
  );
}

// --- Styling ---
const sectionStyle = { margin: "36px 0 26px 0" };
const sectionHeader = { fontSize: "1.23rem", fontWeight: 700, margin: "0 0 12px 4px", color: "var(--primary, #2D8C7E)" };
const cardStyle = {
  borderRadius: 17,
  background: "var(--bg-secondary)",
  padding: "23px 20px",
  maxWidth: 390,
  boxShadow: "0 1px 8px rgba(60,55,35,0.04)",
  marginBottom: 3,
  display: "flex",
  flexDirection: "column",
  gap: 12
};
const cardGridStyle = {
  display: "flex",
  gap: 18,
  flexWrap: "wrap"
};
const profileHeader = { display: "flex", flexDirection: "row", gap: 18, alignItems: "flex-start", marginBottom: 7 };
const avatarStyle = {
  fontSize: "3.1rem",
  background: "#E9F9F0",
  borderRadius: "30%",
  width: 68,
  height: 68,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
const nameStyle = { fontWeight: 800, fontSize: "1.19rem" };
const detailStyle = { fontSize: 15, color: "#455", marginTop: 2 };

const btnStyle = {
  alignSelf: "flex-end",
  background: "var(--primary)",
  color: "#fff",
  border: "none",
  borderRadius: 9,
  padding: "8px 20px",
  fontWeight: 600,
  cursor: "pointer",
  fontSize: 15
};
const secondaryBtnStyle = {
  ...btnStyle,
  background: "var(--accent, #F3B53F)",
  color: "#202",
  marginTop: 8,
  fontSize: 15
};
const deviceHeader = { display: "flex", flexDirection: "row", gap: 14, alignItems: "center", marginBottom: 4 };
const deviceIcon = { fontSize: 32, background: "#F3B53F25", borderRadius: 10, width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center" };
const deviceName = { fontWeight: 700, color: "#333", fontSize: 16 };
const deviceType = { fontSize: 13, color: "#666", marginTop: 1 };
const deviceStatus = { fontSize: 13, color: "var(--primary,#2D8C7E)", fontWeight: 500 };

const prefsGridStyle = { display: "flex", gap: 14, flexWrap: "wrap", marginTop: 6 };
const miniCardStyle = {
  borderRadius: 10,
  background: "#fff",
  boxShadow: "0 1px 6px #aaa1",
  padding: "13px 17px",
  minWidth: 104,
  minHeight: 60,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  fontSize: 13.7,
  color: "#384D6C",
  fontWeight: 600
};
const prefLabel = { fontSize: 13, fontWeight: 700, color: "#2D8C7E" };
const prefValue = { fontSize: 14, fontWeight: 400, marginTop: 2, color: "#385" };

// Responsive media queries: handled via App.css for outer wrappers
