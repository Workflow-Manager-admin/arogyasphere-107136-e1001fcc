import React from "react";

/*
PUBLIC_INTERFACE
Dashboard page for ArogyaMitr: shows personalized greetings, highlight insights, and a responsive grid
of modular health/stat cards and chart placeholders.
- Modern visual layout: grid of cards in 2 columns (desktop) or stacked (mobile)
- Sectional greetings and insight banners
- Cards are ready for real data, now with placeholders for chart, stat, and info modules
- Focused on lightweight, extensible UI and responsiveness
*/
export default function Dashboard() {
  // Future: these values should come from context or API/backend
  const userName = "Priya"; // Placeholder for current user
  const todayGreeting = getGreeting();

  // Sample stat highlights
  const statCards = [
    {
      key: "steps",
      label: "Steps Today",
      value: "8,231",
      description: "Target: 10k",
      icon: "👣",
      accent: "#F3B53F"
    },
    {
      key: "sleep",
      label: "Sleep Last Night",
      value: "7h 15m",
      description: "Sleep Score: 86",
      icon: "🛌",
      accent: "#2D8C7E"
    },
    {
      key: "mindfulness",
      label: "Mindful Minutes",
      value: "22 min",
      description: "Streak: 5 days",
      icon: "🧘‍♀️",
      accent: "#384D6C"
    },
    {
      key: "hydration",
      label: "Water Intake",
      value: "1.7L",
      description: "Goal: 2.5L",
      icon: "💧",
      accent: "#45A3FC"
    }
  ];

  return (
    <section>
      {/* Greeting and insight banner */}
      <div className="dashboard-greeting">
        <h2>
          {todayGreeting}, <span className="dashboard-username">{userName}</span>!
        </h2>
        <p className="dashboard-insight">
          Here are your key health stats and progress today. Keep up the great work!
        </p>
      </div>

      {/* Responsive card grid: stats and chart placeholders */}
      <div className="dashboard-card-grid">
        {statCards.map(card => (
          <StatCard key={card.key} {...card} />
        ))}
        <ChartCard
          title="Activity Progress"
          chartType="rings"
          description="Steps, active minutes, calories"
        />
        <ChartCard
          title="Sleep Timeline"
          chartType="line"
          description="Sleep duration and quality"
        />
        <ChartCard
          title="Mood & Mindfulness"
          chartType="area"
          description="Mood log with meditation sessions"
        />
        <ChartCard
          title="Hydration & Nutrition"
          chartType="bar"
          description="Water intake vs. target"
        />
      </div>

      {/* Health tip / AI insight (future: dynamic/AI-generated) */}
      <section className="dashboard-tip">
        <b>Tip:</b> Aim to finish a short mindful walk after lunch to boost energy!
      </section>
    </section>
  );
}

// Card for summary stat/insight
function StatCard({ icon, value, label, description, accent }) {
  return (
    <div className="dashboard-card stat-card" style={{ borderTop: `4px solid ${accent}` }}>
      <div className="stat-icon" style={{ background: accent + "22" }}>{icon}</div>
      <div>
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
        <div className="stat-desc">{description}</div>
      </div>
    </div>
  );
}

// Card placeholder for future charts
function ChartCard({ title, chartType, description }) {
  return (
    <div className="dashboard-card chart-card">
      <div className="card-header">{title}</div>
      <div className={`card-chart chart-placeholder ${chartType}`}>
        <span className="chart-placeholder-label">{chartType} chart here</span>
      </div>
      <div className="card-desc">{description}</div>
    </div>
  );
}

// Simple time-based greeting
function getGreeting() {
  const hr = new Date().getHours();
  if (hr < 5) return "Good Night";
  if (hr < 12) return "Good Morning";
  if (hr < 17) return "Good Afternoon";
  return "Good Evening";
}
