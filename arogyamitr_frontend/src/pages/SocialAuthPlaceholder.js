import React from 'react';

// PUBLIC_INTERFACE
// Placeholder for Social Authentication Buttons (no real logic)
export default function SocialAuthPlaceholder() {
  return (
    <div style={{display: "flex", gap: "12px", margin: "8px 0"}}>
      <span title="Google Login" style={iconBtn("#EA4335")}>G</span>
      <span title="Apple Login" style={iconBtn("#000")}></span>
      <span title="Facebook Login" style={iconBtn("#4267B2")}>f</span>
    </div>
  );
}

const iconBtn = (bgColor) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 38,
  height: 38,
  borderRadius: "50%",
  background: bgColor,
  color: "#fff",
  fontSize: 20,
  fontWeight: 700,
  cursor: "pointer",
  boxShadow: "0 1px 4px rgba(0,0,0,0.09)",
  userSelect: "none",
  opacity: 0.93
});
