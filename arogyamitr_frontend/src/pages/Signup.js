import React from 'react';
import SocialAuthPlaceholder from './SocialAuthPlaceholder';

// PUBLIC_INTERFACE
// Signup (Registration) Page for ArogyaMitr with styled form and social placeholders.
export default function Signup({ toggleTheme }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-primary)",
        color: "var(--text-primary)"
      }}
    >
      <button className="theme-toggle" onClick={toggleTheme} style={{alignSelf: "flex-end", margin: "18px 22vw 0 0"}}>Toggle Theme</button>
      <div
        style={{
          background: "var(--bg-secondary)",
          borderRadius: 16,
          boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
          padding: "38px 32px",
          minWidth: 290,
          maxWidth: 390,
          width: "100%",
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h2 style={{ color: "var(--primary)", fontWeight: 700, marginBottom: 6 }}>Sign Up</h2>
        <form style={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
          <input style={inputStyle} type="text" placeholder="Full Name" autoComplete="name" />
          <input style={inputStyle} type="email" placeholder="Email" autoComplete="email" />
          <input style={inputStyle} type="password" placeholder="Password" autoComplete="new-password" />
          <button type="submit" style={submitBtnStyle}>Sign Up</button>
        </form>
        <div style={{ fontSize: 14, margin: "18px 0 6px 0", color: "var(--text-primary)" }}>
          Or sign up with
        </div>
        <SocialAuthPlaceholder />
        <div style={{ fontSize: 13, marginTop: 14 }}>
          Already have an account? <a href="/login" style={linkStyle}>Login</a>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  borderRadius: 8,
  border: "1px solid var(--border-color)",
  padding: "11px 14px",
  fontSize: 16,
  outline: "none",
  backgroundColor: "#fff",
  color: "#222",
  marginBottom: 0
};

const submitBtnStyle = {
  borderRadius: 8,
  background: "var(--primary)",
  color: "#fff",
  padding: "11px 16px",
  border: "none",
  fontWeight: 600,
  fontSize: 16,
  marginTop: 4,
  cursor: "pointer",
  transition: "background 0.2s"
};

const linkStyle = {
  color: "var(--primary)",
  textDecoration: "underline"
};
