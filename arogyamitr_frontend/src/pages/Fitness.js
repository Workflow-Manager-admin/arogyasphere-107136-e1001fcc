import React from 'react';

// PUBLIC_INTERFACE
// Fitness module page — layout for workout log, activity/charts, and featured workout cards.
export default function Fitness() {
  return (
    <section>
      <h1>Fitness & Movement</h1>
      {/* Workout Log Section */}
      <section style={sectionStyle}>
        <h2>Today's Workouts</h2>
        <div style={demoRow}>
          <div style={logCard}>
            <h4>Morning Run</h4>
            <div>2.3 km in 20:42</div>
            <div style={logTime}>06:33 am</div>
          </div>
          <div style={logCard}>
            <h4>Evening Yoga</h4>
            <div>Yoga, 35 min</div>
            <div style={logTime}>07:15 pm</div>
          </div>
        </div>
        <div style={logNote}>Log new workouts and activities here.</div>
      </section>

      {/* Charts Section */}
      <section style={sectionStyle}>
        <h2>Activity Charts</h2>
        <div style={demoRow}>
          <div style={chartCard}>
            <div style={chartPlaceholder('rings')}>Activity Rings<br />[Concentric]</div>
            <div style={chartDesc}>Active mins, Calories, Steps</div>
          </div>
          <div style={chartCard}>
            <div style={chartPlaceholder('bar')}>Weekly Progress<br />[Bar Chart]</div>
            <div style={chartDesc}>Workouts this week</div>
          </div>
        </div>
      </section>

      {/* Demo Featured Workouts */}
      <section style={sectionStyle}>
        <h2>Featured Workouts</h2>
        <div style={demoRow}>
          <div style={contentCard}>
            <div style={cardImgPlaceholder}>[Video]</div>
            <h4>HIIT Cardio</h4>
            <div style={smallDesc}>High Intensity, 16 min | 🔥</div>
          </div>
          <div style={contentCard}>
            <div style={cardImgPlaceholder}>[Video]</div>
            <h4>Stretch Routine</h4>
            <div style={smallDesc}>Flexibility, Low Impact</div>
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
const chartCard = { background: "#e8faf2", borderRadius: 13, flex: 1, minWidth: 180, marginRight: 10, marginBottom: 8, padding: "13px 16px 10px 16px", textAlign: "center", boxShadow: "0 1px 4px #eee" };
const chartDesc = { fontSize: 13, color: "#666" };
const chartPlaceholder = (type) => ({
  background: type === 'rings' ? "repeating-conic-gradient(#2D8C7E 0 33deg, #F3B53F 33deg 66deg, #384D6C 66deg 100deg)"
    : "repeating-linear-gradient(90deg, #e3eeea94 0 10px,#2d8c7e44 10px 20px)",
  minHeight: 65,
  borderRadius: 7,
  display: "flex", alignItems: "center", justifyContent: "center",
  color: "#fff", fontWeight: 600, fontSize: 15, marginBottom: 9,
  opacity: 0.84
});
const contentCard = { background: "#fff", borderRadius: 13, minWidth: 140, padding: 13, boxShadow: "0 2px 8px #2222", marginRight: 12 };
const cardImgPlaceholder = { background: "#dbebef", height: 64, borderRadius: 7, marginBottom: 7, display: "flex", alignItems: "center", justifyContent: "center", color: "#555", fontSize: 13 };
const smallDesc = { fontSize: 12.7, color: "#454f57", marginTop: 5 };
