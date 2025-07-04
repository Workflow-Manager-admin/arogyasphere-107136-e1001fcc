import React, { useState } from 'react';
import TopNav from '../components/TopNav';
import Sidebar from '../components/Sidebar';

/**
 * PUBLIC_INTERFACE
 * App shell for dashboard: top nav, sidebar, and content outlet for section pages.
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {function} props.toggleTheme
 * @param {string} props.theme
 */
const Layout = ({ children, toggleTheme, theme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={`layout-root${sidebarOpen ? "" : " sidebar-collapsed"}`}>
      <TopNav toggleSidebar={() => setSidebarOpen((open) => !open)} toggleTheme={toggleTheme} theme={theme} />
      <Sidebar open={sidebarOpen} />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
