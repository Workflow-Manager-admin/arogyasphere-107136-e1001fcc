import React from 'react';

// PUBLIC_INTERFACE
// Placeholder Auth/Login Page. Expand with real auth forms.
export default function Login({ toggleTheme }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <button className="theme-toggle" onClick={toggleTheme}>Toggle Theme</button>
      <h1>Login / Sign Up</h1>
      <p>Authentication UI goes here.</p>
    </div>
  );
}
