import React from 'react';

// PUBLIC_INTERFACE
// Mindfulness & Stress Management module page: journaling log, streak/calendar, featured guides.
export default function Mindfulness() {
  return (
    <section>
      <h1>Mindfulness & Stress Management</h1>

      {/* Mood/Journal Log Section */}
      <section style={sectionStyle}>
        <h2>Mood Journal</h2>
        <div style={demoRow}>
          <div style={logCard}>
            <h4>Today</h4>
            <div>😊 Feeling positive after meditation</div>
            <div style={logTime}>07:20 am</div>
          </div>
          <div style={logCard}>
            <h4>Yesterday</h4>
            <div>😐 Average, stressed at work</div>
            <div style={logTime}>09:30 pm</div>
          </div>
        </div>
        <div style={logNote}>Add journal entries or mood logs here.</div>
      </section>

      {/* Streak and Calendar Section */}
      <section style={sectionStyle}>
        <h2>Streak & Calendar</h2>
        <div style={demoRow}>
          <div style={chartCard}>
            <div style={chartPlaceholder('streak')}>Streak: 5 days<br />[🔥🔥🔥🔥🔥]</div>
            <div style={chartDesc}>Longest: 8 days</div>
          </div>
          <div style={chartCard}>
            <div style={chartPlaceholder('cal')}>Calendar<br />[Calendar Grid]</div>
            <div style={chartDesc}>Completed meditations</div>
          </div>
        </div>
      </section>

      {/* Demo Guided Meditation Cards */}
      <section style={sectionStyle}>
        <h2>Guided Resources</h2>
        <div style={demoRow}>
          <div style={contentCard}>
            <div style={cardImgPlaceholder}>[Audio]</div>
            <h4>Breathing Calm</h4>
            <div style={smallDesc}>Short guided exercise, 7 min</div>
          </div>
          <div style={contentCard}>
            <div style={cardImgPlaceholder}>[Audio]</div>
            <h4>Body Scan Relax</h4>
            <div style={smallDesc}>Body relaxation, 15 min</div>
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
const chartCard = { background: "#f4ebfa", borderRadius: 13, flex: 1, minWidth: 180, marginRight: 10, marginBottom: 8, padding: "13px 16px 10px 16px", textAlign: "center", boxShadow: "0 1px 4px #eee" };
const chartDesc = { fontSize: 13, color: "#666" };
const chartPlaceholder = (type) => ({
  background: type === 'streak' ? "repeating-linear-gradient(90deg,#ffc617cc 0 12px,#f3b53f22 12px 16px)"
    : "repeating-linear-gradient(0deg, #f3b53f44 0 10px, #fff 10px 17px)",
  minHeight: 65,
  borderRadius: 7,
  display: "flex", alignItems: "center", justifyContent: "center",
  color: "#fff", fontWeight: 600, fontSize: 15, marginBottom: 9,
  opacity: 0.84
});
const contentCard = { background: "#fff", borderRadius: 13, minWidth: 140, padding: 13, boxShadow: "0 2px 8px #2222", marginRight: 12 };
const cardImgPlaceholder = { background: "#eef1e6", height: 64, borderRadius: 7, marginBottom: 7, display: "flex", alignItems: "center", justifyContent: "center", color: "#555", fontSize: 13 };
const smallDesc = { fontSize: 12.7, color: "#454f57", marginTop: 5 };
