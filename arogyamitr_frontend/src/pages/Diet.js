import React from 'react';

// PUBLIC_INTERFACE
// Diet & Nutrition module page — includes sections for meal log, hydration, key charts, and recipe cards.
export default function Diet() {
  return (
    <section>
      <h1>Diet & Nutrition</h1>

      {/* Logs Section */}
      <section style={sectionStyle}>
        <h2>Today's Food & Hydration Log</h2>
        <div style={demoRow}>
          <div style={logCard}>
            <h4>Breakfast</h4>
            <div>- Oatmeal, Berries, 1 Egg</div>
            <div style={logTime}>08:05 am</div>
          </div>
          <div style={logCard}>
            <h4>Lunch</h4>
            <div>- Quinoa Bowl, Yogurt</div>
            <div style={logTime}>12:40 pm</div>
          </div>
          <div style={logCard}>
            <h4>Water Intake</h4>
            <div>1.2L so far</div>
          </div>
        </div>
        <div style={logNote}>Future: Add multiple log entries and hydration tracker inputs.</div>
      </section>

      {/* Charts Section */}
      <section style={sectionStyle}>
        <h2>Nutrition Charts</h2>
        <div style={demoRow}>
          <div style={chartCard}>
            <div style={chartPlaceholder('pie')}>Macros Pie<br />[Pie Chart]</div>
            <div style={chartDesc}>Carbs 40% / Protein 32% / Fat 28%</div>
          </div>
          <div style={chartCard}>
            <div style={chartPlaceholder('bar')}>Calories<br />[Bar Chart]</div>
            <div style={chartDesc}>Calories by meal</div>
          </div>
        </div>
      </section>

      {/* Demo Recipe Cards */}
      <section style={sectionStyle}>
        <h2>Featured Recipes</h2>
        <div style={demoRow}>
          <div style={contentCard}>
            <div style={cardImgPlaceholder}>[Photo]</div>
            <h4>Avocado Toast</h4>
            <div style={smallDesc}>Healthy, simple breakfast with good fats.</div>
          </div>
          <div style={contentCard}>
            <div style={cardImgPlaceholder}>[Photo]</div>
            <h4>Lentil Soup</h4>
            <div style={smallDesc}>Filling high-protein lunch.</div>
          </div>
        </div>
      </section>
    </section>
  );
}

// === styled demo card helpers ===

const sectionStyle = { margin: "32px 0 24px 0" };
const demoRow = { display: "flex", gap: 18, flexWrap: "wrap" };
const logCard = { background: "var(--bg-secondary)", borderRadius: 11, padding: "20px 18px", minWidth: 145, minHeight: 80, boxShadow: "0 1px 5px #3331" };
const logTime = { color: "#999", fontSize: 12, marginTop: 6 };
const logNote = { fontSize: 13, color: "#888", marginTop: 10 };
const chartCard = { background: "#f7fafb", borderRadius: 13, flex: 1, minWidth: 180, marginRight: 10, marginBottom: 8, padding: "13px 16px 10px 16px", textAlign: "center", boxShadow: "0 1px 4px #eee" };
const chartDesc = { fontSize: 13, color: "#666" };
const chartPlaceholder = (type) => ({
  background: type === 'pie' ? "conic-gradient(#2D8C7E 0 33%, #F3B53F 33% 66%, #384D6C 66% 100%)"
    : "repeating-linear-gradient(90deg, #e9ecef 0 10px,#f3b53f 10px 20px)",
  minHeight: 65,
  borderRadius: 7,
  display: "flex", alignItems: "center", justifyContent: "center",
  color: "#fff", fontWeight: 600, fontSize: 15, marginBottom: 9,
  opacity: 0.84
});
const contentCard = { background: "#fff", borderRadius: 13, minWidth: 140, padding: 13, boxShadow: "0 2px 8px #2222", marginRight: 12 };
const cardImgPlaceholder = { background: "#d9e7ea", height: 64, borderRadius: 7, marginBottom: 7, display: "flex", alignItems: "center", justifyContent: "center", color: "#555", fontSize: 13 };
const smallDesc = { fontSize: 12.7, color: "#454f57", marginTop: 5 };
