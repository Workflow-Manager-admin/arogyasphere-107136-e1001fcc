import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";

/*
PUBLIC_INTERFACE
Dashboard page for ArogyaMitr: uses AppContext for personalized greetings and stat cards;
future-proof for async dashboard fetch on mount.
Modern visual layout: grid of cards, sectional greetings/banners.
*/
export default function Dashboard() {
  const { user, dashboardState, fetchDashboardData, isLoading } = useAppContext();
  const todayGreeting = getGreeting();
  // future: handle loading state more gracefully in UI
  useEffect(() => {
    // Would fetch/refresh when mounting (real API later)
    fetchDashboardData();
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      {/* Greeting and insight banner */}
      <div className="dashboard-greeting">
        <h2>
          {todayGreeting},{" "}
          <span className="dashboard-username">{user?.name?.split(" ")[0] || "User"}</span>!
        </h2>
        <p className="dashboard-insight">
          Here are your key health stats and progress today. Keep up the great work!
        </p>
      </div>
      {isLoading && (
        <div style={{ textAlign: "center", color: "#999", marginBottom: 16 }}>Loading dashboard...</div>
      )}
      {/* Responsive card grid: stats and chart placeholders */}
      <div className="dashboard-card-grid">
        {dashboardState.statCards?.map(card => (
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
