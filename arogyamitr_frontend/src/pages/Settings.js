import React from "react";

/*
PUBLIC_INTERFACE
Settings page for ArogyaMitr: app preferences, theme selection, privacy, notifications, plan upgrades.
Modern health app design: rounded cards, mobile-friendly layout, modular sectioning, placeholder extensibility.
*/
export default function Settings() {
  // Preferences and toggles (demo stubs, to be integrated)
  const settings = [
    {
      key: "theme",
      label: "App Theme",
      value: "Light/Dark (Auto)",
      action: <button style={cardBtnStyle}>Change</button>
    },
    {
      key: "notifications",
      label: "Push Notifications",
      value: "On",
      action: <button style={cardBtnStyle}>Manage</button>
    },
    {
      key: "privacy",
      label: "Privacy Settings",
      value: "Private",
      action: <button style={cardBtnStyle}>Configure</button>
    },
  ];

  // Plan upgrade card
  const planCard = (
    <div style={planUpgradeCardStyle}>
      <span style={crownIcon}>👑</span>
      <div>
        <div style={planUpgradeHeader}>Upgrade to ArogyaMitr Premium</div>
        <div style={planDesc}>Unlock 1:1 health insights, AI coach, and more integrations!</div>
      </div>
      <button style={planUpgradeBtn}>Upgrade</button>
    </div>
  );

  return (
    <section>
      <div style={sectionStyle}>
        <h1 style={headerStyle}>App Settings</h1>
        <div style={settingsGridStyle}>
          {settings.map((s) =>
            <div key={s.key} style={cardStyle}>
              <div style={labelStyle}>{s.label}</div>
              <div style={{ margin: "6px 0 0 0", fontSize: 14, color: "#444" }}>{s.value}</div>
              <div style={{ marginTop: 13 }}>{s.action}</div>
            </div>
          )}
        </div>
      </div>

      {/* Plan Upgrade Promo Card */}
      <div style={sectionStyle}>
        {planCard}
      </div>

      {/* Placeholder for extensibility */}
      <div style={sectionStyle}>
        <h2 style={minorHeader}>More Options</h2>
        <div style={moreGridStyle}>
          <div style={miniOptCard}>Account Management</div>
          <div style={miniOptCard}>Linked Apps</div>
          <div style={miniOptCard}>Delete Account</div>
          <div style={miniOptCard}>Contact Support</div>
        </div>
      </div>
    </section>
  );
}

// --- Card styles ---
const sectionStyle = { margin: "33px 0 29px 0" };
const headerStyle = { fontSize: "1.43rem", fontWeight: 800, margin: "0 0 19px 4px", color: "var(--primary, #2D8C7E)" };
const cardStyle = {
  borderRadius: 15,
  background: "var(--bg-secondary)",
  boxShadow: "0 1px 7px rgba(60,60,80,0.05)",
  padding: "22px 20px 19px 22px",
  minWidth: 220,
  marginRight: 16,
  marginBottom: 7,
  minHeight: 80,
  display: "flex",
  flexDirection: "column"
};
const labelStyle = { fontWeight: 700, color: "var(--primary, #2D8C7E)", fontSize: 15.3 };

const cardBtnStyle = {
  background: "var(--accent, #F3B53F)",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  padding: "8px 18px",
  fontWeight: 600,
  cursor: "pointer",
  fontSize: 14
};
const settingsGridStyle = { display: "flex", gap: 28, flexWrap: "wrap" };

// Plan upgrade promo card
const planUpgradeCardStyle = {
  borderRadius: 15,
  background: "linear-gradient(90deg, #faefc4 75%, #ffe36a90 130%)",
  boxShadow: "0 2px 14px #f3b53f21",
  padding: "18px 22px",
  marginBottom: 7,
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: 22,
  minWidth: 260,
  position: "relative"
};
const crownIcon = { fontSize: 38, marginRight: 8, opacity: 0.87 };
const planUpgradeHeader = { fontWeight: 800, fontSize: 18, marginBottom: 2, color: "#664b07" };
const planDesc = { fontSize: 14, color: "#444", opacity: 0.85 };
const planUpgradeBtn = {
  background: "var(--primary, #2D8C7E)",
  color: "#fff",
  border: "none",
  borderRadius: 11,
  padding: "10px 24px",
  fontWeight: 700,
  fontSize: 16,
  marginLeft: "auto",
  boxShadow: "0 1px 6px #2d8c7e18",
  cursor: "pointer"
};

const minorHeader = { fontSize: "1.01rem", fontWeight: 700, color: "#384D6C", marginBottom: 10, marginLeft: 3 };
const moreGridStyle = { display: "flex", gap: 14, flexWrap: "wrap" };
const miniOptCard = {
  background: "#fff",
  borderRadius: 9,
  boxShadow: "0 1px 4px #aaa1",
  padding: "13px 11px",
  minWidth: 100,
  minHeight: 46,
  color: "#395",
  fontWeight: 600,
  fontSize: 15
};
