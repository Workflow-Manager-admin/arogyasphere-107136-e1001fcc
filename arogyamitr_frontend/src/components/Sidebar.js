import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Sidebar navigation for all app sections.
 * @param {object} props
 * @param {boolean} props.open
 */
const Sidebar = ({ open }) => {
  // Navigation items for all major sections
  const navItems = [
    { to: '/', label: 'Dashboard' },
    { to: '/wellness-path', label: 'Wellness Path' },
    { to: '/diet', label: 'Diet/Nutrition' },
    { to: '/fitness', label: 'Fitness' },
    { to: '/mindfulness', label: 'Mindfulness' },
    { to: '/sleep', label: 'Sleep' },
    { to: '/devices', label: 'Devices' }, // Newly added Devices page
    { to: '/conscious-choices', label: 'Conscious Choices' },
    { to: '/care-connect', label: 'Care & Connect' },
    { to: '/support-groups', label: 'Support Groups' },
    { to: '/education-hub', label: 'Education Hub' },
    { to: '/chatbot', label: 'Chatbot' },
    { to: '/profile', label: 'Profile' },
    { to: '/settings', label: 'Settings' }
  ];

  return (
    <nav className={`sidebar${open ? " open" : ""}`}>
      <ul>
        {navItems.map(item => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
