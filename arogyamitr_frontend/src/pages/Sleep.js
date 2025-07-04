import React from 'react';

// PUBLIC_INTERFACE
// Sleep module page: tracks sleep log, analytics charts, and features sleep tips/resources.
export default function Sleep() {
  return (
    <section>
      <h1>Sleep Analytics</h1>

      {/* Sleep Log Section */}
      <section style={sectionStyle}>
        <h2>Recent Sleep Log</h2>
        <div style={demoRow}>
          <div style={logCard}>
            <h4>Last Night</h4>
            <div>7h 23m (Score: 87)</div>
            <div style={logTime}>Woke: 6:42am</div>
          </div>
          <div style={logCard}>
            <h4>Prev Night</h4>
            <div>6h 58m (Score: 73)</div>
            <div style={logTime}>Woke: 7:12am</div>
          </div>
        </div>
        <div style={logNote}>Track daily sleep entries for better insights.</div>
      </section>

      {/* Charts Section */}
      <section style={sectionStyle}>
        <h2>Analytics & Trends</h2>
        <div style={demoRow}>
          <div style={chartCard}>
            <div style={chartPlaceholder('line')}>Stages<br />[Line Chart]</div>
            <div style={chartDesc}>REM / Deep / Light Sleep</div>
          </div>
          <div style={chartCard}>
            <div style={chartPlaceholder('bar')}>Sleep Score<br />[Bar Chart]</div>
            <div style={chartDesc}>Weekly Average (past 7 days)</div>
          </div>
        </div>
      </section>

      {/* Sleep Routine Planning */}
      <section style={sectionStyle}>
        <h2>Routine & Environment</h2>
        <div style={demoRow}>
          <div style={contentCard}>
            <div style={cardImgPlaceholder}>[Tip]</div>
            <h4>Wind Down Routine</h4>
            <div style={smallDesc}>Try 10 mins screen-free before bed.</div>
          </div>
          <div style={contentCard}>
            <div style={cardImgPlaceholder}>[Env]</div>
            <h4>Bedroom Air Quality</h4>
            <div style={smallDesc}>Good (PM2.5: 8μg/m³)</div>
          </div>
        </div>
      </section>
    </section>
  );
}

const sectionStyle = { margin: "32px 0 24px 0" };
const demoRow = { display: "flex", gap: 18, flexWrap: "wrap" };
const logCard = { background: "var(--bg-secondary)", borderRadius: 11, padding: "20px 18px", minWidth: 145, minHeight: 80, boxShadow: "0 1px 5px #3331" };
const logTime = { color: "#999", fontSize: 12, marginTop: 6 };
const logNote = { fontSize: 13, color: "#888", marginTop: 10 };
const chartCard = { background: "#edeefa", borderRadius: 13, flex: 1, minWidth: 180, marginRight: 10, marginBottom: 8, padding: "13px 16px 10px 16px", textAlign: "center", boxShadow: "0 1px 4px #eee" };
const chartDesc = { fontSize: 13, color: "#666" };
const chartPlaceholder = (type) => ({
  background: type === 'line' ? "linear-gradient(180deg,#f3b53f1e 68%,#384D6C34 98%)"
    : "repeating-linear-gradient(90deg, #2d8c7e28 0 12px,#edeefa 12px 20px)",
  minHeight: 65,
  borderRadius: 7,
  display: "flex", alignItems: "center", justifyContent: "center",
  color: "#fff", fontWeight: 600, fontSize: 15, marginBottom: 9,
  opacity: 0.84
});
const contentCard = { background: "#fff", borderRadius: 13, minWidth: 140, padding: 13, boxShadow: "0 2px 8px #2222", marginRight: 12 };
const cardImgPlaceholder = { background: "#efead5", height: 64, borderRadius: 7, marginBottom: 7, display: "flex", alignItems: "center", justifyContent: "center", color: "#555", fontSize: 13 };
const smallDesc = { fontSize: 12.7, color: "#454f57", marginTop: 5 };
