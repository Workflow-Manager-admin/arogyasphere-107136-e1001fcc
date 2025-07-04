import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Top navigation bar for the dashboard.
 * @param {object} props
 * @param {function} props.toggleSidebar
 * @param {function} props.toggleTheme
 * @param {string} props.theme
 */
import NotificationBell from "./NotificationBell";

const TopNav = ({ toggleSidebar, toggleTheme, theme }) => (
  <header className="topnav">
    <button
      className="sidebar-toggle"
      aria-label="Toggle sidebar"
      onClick={toggleSidebar}
    >☰</button>
    <span className="brand-title">ArogyaMitr</span>
    {/* NotificationBell component */}
    <NotificationBell />
    <button
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      onClick={toggleTheme}
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  </header>
);

export default TopNav;
