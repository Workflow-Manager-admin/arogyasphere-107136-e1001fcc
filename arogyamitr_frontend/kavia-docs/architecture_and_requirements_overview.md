# ArogyaMitr React Frontend  
**Architecture & Requirements Overview**

---

## 1. Project Overview

ArogyaMitr is a comprehensive health and wellness web application designed to empower users to seamlessly manage their wellness journey. The frontend, built with React, presents a modern, responsive interface that integrates personalized dashboards, data visualizations, interactive health modules, educational resources, and AI-driven chat support. The application is structured as a modular, extensible platform with a focus on performance, clarity, and a health-oriented user experience.

---

## 2. Planned Features & Modules

The application is developed in several phases, each introducing distinctive modules and user flows. The key functional modules planned include:

- **Authentication**
  - Responsive login/signup interfaces supporting social providers and password authentication.
- **Core Dashboard**
  - Personalized greetings, AI insights, and daily progress charts.
- **My Wellness Path**
  - Tabs/pages for Diet & Nutrition, Fitness & Movement, Mindfulness & Stress Management, and Sleep Optimizer.
- **Diet & Nutrition**
  - Food and hydration logs, recipe and meal views, macro/micro charts, and embedded videos.
- **Fitness**
  - Workout and activity tracking, visual activity rings and charts, workout video library.
- **Mindfulness**
  - Guided audio, journaling, streak tracking, and calendar.
- **Sleep Analytics**
  - Visualizations of sleep stages and HRV, environment data displays, routine planning controls.
- **Conscious Choices**
  - Barcode scanner UI, product analytics, alternative suggestions, map-based business directory.
- **Care & Connect**
  - Disease dashboards with reports, medication management, tele-consultation (video, booking), and medical document uploads.
- **Peer Support**
  - Forums, group events, posts/replies, and local resource discovery.
- **Education Hub**
  - Articles and videos with advanced filtering and immersive content reader/player.
- **AI Health Assistant**
  - Integrated chatbot, voice suggestions, and interactive guidance.
- **Profile & Settings**
  - Comprehensive customization, plan upgrades, device integration.

---

## 3. Project Structure & Navigation

The frontend project is organized with modularity and scalability as priorities. Major points:

- **Monorepo Structure**: All frontend React code resides under `/src/` within the container's directory.
- **Component Organization**: Present and planned UI components (buttons, containers, navigation, typography) are composed using pure HTML/CSS/React.
- **Theming**: Theme toggling is implemented at the root App level, allowing for light/dark modes by swapping CSS variables (via `data-theme` attribute).
- **Routing (Planned)**: Future steps will integrate modular route-based navigation, separating major modules (Authentication, Dashboard, Wellness, Education, etc.) into logically isolated pages/tabs for code splitting and maintainability.  
- **Navigation Layout**: The application adopts a modern dashboard layout featuring a top navigation bar, collapsible side drawer, sectioned content cards, and responsive grids to ensure seamless mobile and desktop experiences.

#### Directory Sketch

```plaintext
arogyamitr_frontend/
├── public/
├── src/
│   ├── components/     # UI elements (planned: NavBar, Cards, Modals, etc.)
│   ├── modules/        # Wellness modules (to be developed)
│   ├── App.js          # App shell, theme logic
│   ├── App.css         # Theming, component styles
│   └── index.js        # Entry point
├── README.md
└── kavia-docs/
    └── architecture_and_requirements_overview.md
```

---

## 4. UI/UX & Theming Principles

- **Visual Style**: Clean, minimal, and health-focused — leveraging a calm palette (primary: #2D8C7E, secondary: #384D6C, accent: #F3B53F by brand), rounded elements, and modern typography.
- **Theming**: Uses CSS variables for colors and theme management (see `App.css`). Supports dynamic switching between light and dark modes, ensuring accessibility and comfort for all users.
- **Responsiveness**: Layout adapts gracefully to both mobile and desktop, with scalable typography and flexible grid-based content areas.
- **User Guidance**: Smooth transitions, feedback, and clear affordances in navigation, input, and data visualizations are emphasized.
- **UI Components**: Reliance on pure HTML/CSS components without heavyweight external UI frameworks allows for high customization and lean performance.

---

## 5. Future Steps

The current scaffold sets a strong foundation for incremental addition of features and modules. The next key steps are:

1. **Implement Modular Routing**:
   - Integrate `react-router` or equivalent to enable independent navigation for major application sections.
2. **Develop Core Components**:
   - Build out the design system (buttons, cards, forms, navigation) per the planned UX guidelines.
3. **Scaffold and Populate Wellness Modules**:
   - Initialize all main modules as separate routes/components, stubbing out API interactions as needed.
4. **Data Integration**:
   - Connect to REST/GraphQL backends for user authentication, content, tracking, and chat support.
5. **Progressive Enhancement**:
   - Add advanced features in iterations: AI assistant, product scanning, integrations, and detailed visualizations.

---

## 6. Architectural Diagram (High-Level)

```mermaid
graph TD
  A[App (entry point)] --> B[Router (future)]
  subgraph UI Shell
    B --> C[Top Navigation]
    B --> D[Sidebar / Drawer]
    B --> E[Main Content Area]
  end
  E --> F[Dashboard]
  E --> G[Modules]
  G --> G1[Wellness Path]
  G --> G2[Diet & Nutrition]
  G --> G3[Fitness]
  G --> G4[Mindfulness]
  G --> G5[Sleep Analytics]
  G --> G6[Conscious Choices]
  G --> G7[Care & Connect]
  G --> G8[Peer Support]
  G --> G9[Education Hub]
  E --> H[Profile & Settings]
  E --> I[Chatbot / AI Assistant]
  classDef primary fill:#2D8C7E,stroke:#384D6C,color:#fff;
  class A,G,G1,G2,G3,G4,G5,G6,G7,G8,G9 primary;
```

---

## References

- ArogyaMitr Work Item & Requirements (see project management system)
- `/src/App.js` (App architecture, theming approach)
- `/src/App.css` (CSS variables & style)
- `README.md` (Project goals, customization notes)

---

*This document is a living artifact and will be updated as modules and features are implemented.*

