import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * Devices Management & Sync Page for ArogyaMitr
 * - Modular UI for connecting, disconnecting, and syncing health devices (generic + extensible per brand/API)
 * - Placeholders for steps, heart rate, sleep, calories, and brand extensibility
 * - Mocked flows simulate connect/disconnect, sync statuses, and enable future expansion
 */
export default function Devices() {
  // Mock device connection state
  const [connected, setConnected] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [deviceName, setDeviceName] = useState("Generic Health Device");
  // Mock health data state
  const [healthData, setHealthData] = useState({
    steps: null,
    heartRate: null,
    sleep: null,
    calories: null,
  });
  // Future extensibility: Add more specific brands/types here

  // Mock "Connect Device" flow
  function handleConnectMock() {
    setSyncing(true);
    setTimeout(() => {
      setConnected(true);
      setDeviceName("ArogyaMock FitBand");
      setHealthData({
        steps: Math.floor(Math.random() * 10000 + 3000),
        heartRate: 68 + Math.floor(Math.random() * 18),
        sleep: (Math.random() * 3 + 5.5).toFixed(2), // hours
        calories: Math.floor(Math.random() * 800 + 1200),
      });
      setSyncing(false);
    }, 1300);
  }

  // Mock "Disconnect Device" flow
  function handleDisconnectMock() {
    setSyncing(true);
    setTimeout(() => {
      setConnected(false);
      setHealthData({
        steps: null,
        heartRate: null,
        sleep: null,
        calories: null,
      });
      setDeviceName("Generic Health Device");
      setSyncing(false);
    }, 900);
  }

  // Mock "Sync" flow
  function handleSyncMock() {
    setSyncing(true);
    setTimeout(() => {
      setHealthData({
        steps: Math.floor(Math.random() * 14000 + 3500),
        heartRate: 60 + Math.floor(Math.random() * 30),
        sleep: (Math.random() * 3 + 5.5).toFixed(2),
        calories: Math.floor(Math.random() * 1200 + 1000),
      });
      setSyncing(false);
    }, 1300);
  }

  return (
    <section>
      <h1>Device Integration</h1>
      <p>
        Connect your health devices to automatically sync steps, heart rate, sleep, and calories.
        <br />
        <span style={{ fontSize: 14, color: "#888" }}>
          (This is a mock flow. Real brand/API integrations coming soon!)
        </span>
      </p>

      {/* --- Device Card --- */}
      <div style={deviceCard}>
        <div style={iconRow}>
          <span style={deviceIcon}>{connected ? "⌚️" : "🔗"}</span>
          <span style={deviceNameStyle}>{deviceName}</span>
        </div>
        <div style={statusRow}>
          <span>
            Status:{" "}
            <b style={{ color: connected ? "#13a713" : "#a45553" }}>
              {connected ? "Connected" : "Not Connected"}
            </b>
          </span>
          {syncing && (
            <span style={{ marginLeft: 12, color: "#F3B53F" }}>
              {connected ? "Syncing..." : "Connecting..."}
            </span>
          )}
        </div>
        {connected ? (
          <>
            {/* Health data summary */}
            <div style={dataGrid}>
              <HealthStat
                label="Steps"
                value={healthData.steps != null ? healthData.steps : "--"}
                icon="👣"
                color="#F3B53F"
              />
              <HealthStat
                label="Heart Rate"
                value={healthData.heartRate != null ? `${healthData.heartRate} bpm` : "--"}
                icon="❤️"
                color="#E84C4C"
              />
              <HealthStat
                label="Sleep"
                value={healthData.sleep != null ? `${healthData.sleep} hrs` : "--"}
                icon="🛌"
                color="#2D8C7E"
              />
              <HealthStat
                label="Calories"
                value={healthData.calories != null ? `${healthData.calories}` : "--"}
                icon="🔥"
                color="#FF7C37"
              />
            </div>
            <div style={{ marginTop: 18, display: "flex", gap: 11 }}>
              <button
                style={{ ...btnStyle, background: "#F3B53F", color: "#322" }}
                disabled={syncing}
                onClick={handleSyncMock}
              >
                {syncing ? "Syncing..." : "Sync Now"}
              </button>
              <button
                style={{ ...btnStyle, background: "#ddd", color: "#8c2929" }}
                disabled={syncing}
                onClick={handleDisconnectMock}
              >
                Disconnect
              </button>
            </div>
          </>
        ) : (
          <button
            style={{ ...btnStyle, background: "#2D8C7E", color: "#fff", marginTop: 13 }}
            onClick={handleConnectMock}
            disabled={syncing}
          >
            {syncing ? "Connecting..." : "Connect Device"}
          </button>
        )}
      </div>

      {/* --- Placeholder for extensibility: Add new brand/API blocks here --- */}
      <section style={{ marginTop: 29 }}>
        <h2 style={{ fontSize: "1.09rem", color: "#344E6A", marginBottom: 10 }}>
          Coming Soon: Connect to your favorite brands
        </h2>
        <div style={brandRow}>
          <BrandBadge name="Fitbit" emoji="🎽" active={false} />
          <BrandBadge name="Apple Health" emoji="🍏" active={false} />
          <BrandBadge name="Google Fit" emoji="📱" active={false} />
          <BrandBadge name="Garmin" emoji="⌚️" active={false} />
          <BrandBadge name="OMRON" emoji="🩺" active={false} />
          <BrandBadge name="Others" emoji="➕" active={false} />
        </div>
        <small style={{ color: "#778", marginTop: 7, display: "block" }}>
          APIs for direct device sync will be supported!
        </small>
      </section>
    </section>
  );
}

/** HealthStat-small component */
function HealthStat({ label, value, icon, color }) {
  return (
    <div style={{ ...statCard, borderLeft: `4px solid ${color}` }}>
      <span style={{ ...iconStyle, background: `${color}33` }}>{icon}</span>
      <div>
        <div style={{ fontWeight: 700, fontSize: 18, color: color }}>{value}</div>
        <div style={{ color: "#555", fontSize: 13 }}>{label}</div>
      </div>
    </div>
  );
}

/** Brand badge - placeholders for future brand modules */
function BrandBadge({ name, emoji, active }) {
  return (
    <span
      style={{
        opacity: active ? 1 : 0.57,
        marginRight: 13,
        padding: "8px 16px",
        borderRadius: 8,
        fontWeight: 700,
        background: "#f5f7fa",
        color: active ? "#2D8C7E" : "#798091",
        border: active ? "2px solid #2D8C7E" : "2px dashed #dedede",
        fontSize: 15.5,
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        cursor: "pointer",
      }}
      title={`Connect ${name} (coming soon)`}
    >
      <span>{emoji}</span>
      {name}
    </span>
  );
}

// --- Styles ---
const deviceCard = {
  background: "var(--bg-secondary)",
  borderRadius: 17,
  maxWidth: 425,
  margin: "28px 0 12px 0",
  padding: "28px 23px 24px 23px",
  boxShadow: "0 1px 13px #2221",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: 9
};
const iconRow = { display: "flex", alignItems: "center", gap: 16, marginBottom: 5 };
const deviceIcon = {
  fontSize: 38,
  background: "#faecbc33",
  padding: 7,
  borderRadius: 12
};
const deviceNameStyle = { fontSize: "1.13rem", fontWeight: 700, color: "#2D8C7E" };
const statusRow = { marginTop: 4, marginBottom: 11, color: "#384954", fontSize: 15.2 };
const btnStyle = {
  borderRadius: 8,
  border: "none",
  fontWeight: 700,
  fontSize: 15.3,
  padding: "11px 24px",
  marginRight: 6,
  cursor: "pointer",
  letterSpacing: 0.2,
  boxShadow: "0 1px 6px #dfa92f18",
  transition: "background 0.2s"
};
const statCard = {
  display: "flex",
  alignItems: "center",
  gap: 11,
  background: "#fff",
  borderRadius: 12,
  padding: "9px 16px 7px 14px",
  marginBottom: 0,
  boxShadow: "0 1px 7px #eee8",
  minWidth: 108,
  minHeight: 55
};
const iconStyle = {
  fontSize: 26,
  marginRight: 8,
  background: "#e7eecb55",
  borderRadius: 7,
  width: 38,
  height: 38,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
const dataGrid = {
  display: "flex",
  gap: 18,
  marginTop: 10,
  flexWrap: "wrap"
};
const brandRow = {
  display: "flex",
  gap: 7,
  flexWrap: "wrap",
  marginTop: 7,
  marginBottom: 7,
};

