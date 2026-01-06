# Solpire - GeoOptix Web Application

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?logo=bootstrap)

*A modern, responsive multi-page web application built with React 19 and TypeScript*

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Pages Overview](#pages-overview)
- [Components](#components)
- [Styling](#styling)
- [Browser Support](#browser-support)

---

## Overview

This is a multi-page web application built with **React 19** and **TypeScript**, powered by **Vite** for fast development and optimized production builds. The application uses **TanStack React Router** for client-side routing between pages.

### Architecture

The project follows a modular architecture with:

- **Pages**: 18+ distinct pages organized in the `src/pages/` directory, each representing a different view of the application
- **Components**: Reusable UI components in `src/components/` for consistent design across pages
- **Router**: File-based routing configuration in `src/router/` with route definitions for each page
- **State**: Global state management using Zustand stores in `src/stores/`
- **Services**: API service layer in `src/services/` for backend communication
- **Styles**: Global styles in `src/styles/` with Tailwind CSS and Bootstrap integration

### Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI library |
| TypeScript | 5.9.3 | Type safety |
| Vite | 7.2.2 | Build tool |
| TanStack Router | 1.136.8 | Client-side routing |
| Tailwind CSS | 4.1.17 | Utility-first styling |
| Bootstrap | 5.3.8 | Grid system & components |
| React Hook Form | 7.67.0 | Form handling |
| Zod | 4.1.13 | Schema validation |
| Zustand | 5.0.8 | State management |
| Swiper | 12.0.3 | Carousel/slider |
| AOS | 2.3.4 | Scroll animations |

---

## Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional interface with smooth animations (AOS)
- **Interactive Components**: Carousels, modals, calendars, and search functionality
- **Form Validation**:  form handling with Zod schema validation
- **State Management**: Efficient state handling with Zustand
- **Type Safety**: Full TypeScript implementation for enhanced code reliability

---

## Technology Stack

| Category | Technology |
|----------|------------|
| **Frontend Framework** | React 19.2.0 |
| **Language** | TypeScript 5.9.3 |
| **Build Tool** | Vite 7.2.2 |
| **Routing** | TanStack React Router |
| **Styling** | Tailwind CSS, Bootstrap 5.3.8 |
| **Forms** | React Hook Form + Zod |
| **State Management** | Zustand |
| **Animations** | AOS (Animate On Scroll) |
| **Carousel** | Swiper 12.0.3 |
| **Alerts** | SweetAlert2 |
| **Icons** | Lucide React |
| **Fonts** | Inter, Source Sans 3 |

---

## Project Structure

```
solpire-react/
├── public/                          # Static public assets
│   └── vite.svg                     # Vite favicon
│
├── src/                             # Source code
│   ├── assets/                      # Static assets
│   │   ├── images/                  # Image assets
│   │   │   ├── index-pg/            # Home page images
│   │   │   ├── registration/        # Registration page assets
│   │   │   ├── signin/              # Sign-in page assets
│   │   │   └── ...                  # Other image assets
│   │   └── js/                      # JavaScript utilities
│   │       ├── carousel.js          # Carousel functionality
│   │       ├── custom-scrollbar.js  # Custom scrollbar
│   │       ├── script.js            # Main scripts
│   │       └── swiper-init.js       # Swiper initialization
│   │
│   ├── components/                  # Reusable components
│   │   ├── calendar/                # Calendar component
│   │   │   └── Calendar.tsx
│   │   ├── chat-modal/              # Chat modal component
│   │   │   └── ChatModal.tsx
│   │   ├── floating-ai-button/      # Floating action button
│   │   │   └── FloatingAIButton.tsx
│   │   ├── footer/                  # Footer component
│   │   │   └── Footer.tsx
│   │   ├── home/                    # Home page components
│   │   │   ├── CompanyIntro.tsx     # Company introduction
│   │   │   ├── PainPoints.tsx       # Industry pain points
│   │   │   ├── PortfolioCarousel.tsx # Portfolio showcase
│   │   │   ├── SectionDivider.tsx   # Section dividers
│   │   │   ├── SectionTitle.tsx     # Section titles
│   │   │   ├── ServicesSection.tsx  # Services overview
│   │   │   ├── Solutions.tsx        # Solutions section
│   │   │   ├── TeamSection.tsx      # Team members
│   │   │   └── index.ts             # Component exports
│   │   ├── language-modal/          # Language selection
│   │   │   └── LanguageModal.tsx
│   │   ├── loading-spinner/         # Loading indicator
│   │   │   └── LoadingSpinner.tsx
│   │   ├── meeting-modal/           # Meeting scheduler modal
│   │   │   └── MeetingModal.tsx
│   │   ├── navbar/                  # Navigation bar
│   │   │   ├── Navbar.tsx
│   │   │   ├── NavbarBehavior.jsx
│   │   │   └── NavbarBehavior.d.ts
│   │   ├── search-modal/            # Search functionality
│   │   │   └── SearchModal.tsx
│   │   ├── index.ts                 # Component barrel export
│   │   └── ui-init.ts               # UI initialization
│   │
│   ├── hooks/                       # Custom React hooks
│   │   └── index.ts
│   │
│   ├── lib/                         # Utility libraries
│   │   └── index.ts
│   │
│   ├── pages/                       # Application pages
│   │   ├── about-us/                # About Us page
│   │   │   └── AboutUs.tsx
│   │   ├── contact-us/              # Contact page
│   │   │   └── ContactUs.tsx
│   │   ├── cooperation/             # Cooperation/Partnership page
│   │   │   └── Cooperation.tsx
│   │   ├── duplicate-checker/       # Duplicate checker demo
│   │   │   └── DuplicateChecker.tsx
│   │   ├── duplicate-checker-2/     # Alternate duplicate checker
│   │   │   └── DuplicateChecker2.tsx
│   │   ├── error/                   # Error pages
│   │   │   ├── Error404.tsx         # 404 Page Not Found
│   │   │   ├── Error500.tsx         # 500 Server Error
│   │   │   └── ErrorBoundary.tsx    # Error boundary component
│   │   ├── forget-password/         # Password recovery
│   │   │   └── ForgetPassword.tsx
│   │   ├── home/                    # Main home page
│   │   │   ├── Home.tsx
│   │   │   └── Home.css
│   │   ├── home2/                   # Alternate home page
│   │   │   └── Home2.tsx
│   │   ├── learn-more/              # Product details page
│   │   │   └── LearnMore.tsx
│   │   ├── otp-request/             # OTP verification
│   │   │   └── OtpRequest.tsx
│   │   ├── privacy-policy/          # Privacy policy
│   │   │   └── PrivacyPolicy.tsx
│   │   ├── registration/            # User registration
│   │   │   └── Registration.tsx
│   │   ├── search-results/          # Search results page
│   │   │   └── SearchResults.tsx
│   │   ├── signin/                  # User sign-in
│   │   │   └── Signin.tsx
│   │   ├── support-community/       # Community support
│   │   │   └── SupportCommunity.tsx
│   │   ├── technical-support/       # Technical FAQ
│   │   │   └── TechnicalSupport.tsx
│   │   ├── terms/                   # Terms of service
│   │   │   └── Terms.tsx
│   │   └── user-info-interface/     # User profile/settings
│   │       └── UserInfoInterface.tsx
│   │
│   ├── router/                      # Routing configuration
│   │   ├── routes/                  # Route definitions
│   │   │   ├── about-us.route.tsx
│   │   │   ├── contact-us.route.tsx
│   │   │   ├── cooperation.route.tsx
│   │   │   ├── duplicate-checker.route.tsx
│   │   │   ├── duplicate-checker-2.route.tsx
│   │   │   ├── error-404.route.tsx
│   │   │   ├── error-500.route.tsx
│   │   │   ├── forget-password.route.tsx
│   │   │   ├── home.route.tsx
│   │   │   ├── home2.route.tsx
│   │   │   ├── learn-more.route.tsx
│   │   │   ├── otp-request.route.tsx
│   │   │   ├── privacy-policy.route.tsx
│   │   │   ├── registration.route.tsx
│   │   │   ├── search-results.route.tsx
│   │   │   ├── signin.route.tsx
│   │   │   ├── support-community.route.tsx
│   │   │   ├── technical-support.route.tsx
│   │   │   ├── terms.route.tsx
│   │   │   ├── user-info-interface.route.tsx
│   │   │   └── not-found.route.tsx  # Catch-all 404 route
│   │   ├── root.tsx                 # Root layout with error handling
│   │   └── router.tsx               # Router configuration
│   │
│   ├── services/                    # API services
│   │   └── index.ts
│   │
│   ├── stores/                      # Zustand stores
│   │   └── index.ts
│   │
│   ├── styles/                      # Global styles
│   │   └── global.css
│   │
│   ├── types/                       # TypeScript type definitions
│   │   ├── navbar-behavior.d.ts
│   │   └── navbar-behavior-jsx.d.ts
│   │
│   ├── main.tsx                     # Application entry point
│   └── vite-env.d.ts                # Vite environment types
│
├── .gitignore                       # Git ignore configuration
├── components.json                  # UI components configuration
├── dependencies.md                  # Dependencies documentation
├── design_guidelines.md             # Design system guidelines
├── eslint.config.js                 # ESLint configuration
├── index.html                       # HTML entry point
├── package.json                     # Project dependencies
├── package-lock.json                # Dependency lock file
├── postcss.config.js                # PostCSS configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
├── tsconfig.app.json                # App TypeScript config
├── tsconfig.node.json               # Node TypeScript config
└── vite.config.ts                   # Vite configuration
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 or **yarn** >= 1.22.0

### Installation

1. **Clone the repository**
   ```bash
   git clone <xxxxxxxxxxxxx>
   cd solpire-web-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (TypeScript + Vite) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

---

## Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Main landing page with product showcase |
| Home 2 | `/home2` | Alternative home page design |
| Sign In | `/signin` | User authentication |
| Registration | `/registration` | New user registration |
| Forget Password | `/forget-password` | Password recovery |
| OTP Request | `/otp-request` | OTP verification |
| About Us | `/about-us` | Company and team information |
| Contact Us | `/contact-us` | Contact form and details |
| Cooperation | `/cooperation` | Partnership information |
| Learn More | `/learn-more` | Detailed product information |
| Duplicate Checker | `/duplicate-checker` | GeoOptix demo interface |
| Technical Support | `/technical-support` | FAQ and technical help |
| Support Community | `/support-community` | Community forum |
| Search Results | `/search-results` | Search functionality |
| User Info | `/user-info-interface` | User account settings |
| Privacy Policy | `/privacy-policy` | Privacy policy document |
| Terms | `/terms` | Terms of service |
| Error 404 | `/404` or any invalid route | Page not found with navigation options |
| Error 500 | `/500` | Server error page with retry option |

---

## Components

### Core Components

- **Navbar**: Responsive navigation with mobile menu support
- **Footer**: Site-wide footer with links and contact information
- **Calendar**: Interactive meeting scheduling calendar
- **MeetingModal**: Modal for booking consultations

### Home Page Components

- **CompanyIntro**: Company introduction section
- **PainPoints**: Industry challenges overview
- **Solutions**: GeoOptix solution highlights
- **ServicesSection**: Service offerings
- **PortfolioCarousel**: Project/client showcase
- **TeamSection**: Team member profiles

### Error Pages

- **Error404**: Bilingual "Page Not Found" error with actions:
  - "返回首页 | Go Home" - Hard refresh to home page
  - "返回上一页 | Go Back" - Return to previous page with refresh
  - Animated error icon and gradient background

- **Error500**: Bilingual "Server Error" page with actions:
  - "重新加载 | Retry" - Hard refresh current page
  - "返回首页 | Go Home" - Hard refresh to home page
  - Critical error styling with alert icon

- **ErrorBoundary**: Catches React errors and displays Error500 component

### Error Handling

- **Automatic 404 Routing**: Invalid URLs automatically display the 404 error page via wildcard route matching
- **Error Boundary**: React errors are caught at the root level and display the 500 error page

### Utility Components

- **LoadingSpinner**: Loading state indicator
- **SearchModal**: Global search functionality
- **LanguageModal**: Language selection
- **ChatModal**: Customer support chat
- **FloatingAIButton**: Quick action button

---

## Styling

The project uses a combination of styling approaches:

- **Tailwind CSS**: Utility-first CSS framework
- **Bootstrap 5**: Grid system and responsive utilities
- **Custom CSS**: Page-specific styles in component directories
- **CSS Variables**: Theme customization via CSS custom properties


---

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari | Latest 2 versions |
| Edge | Latest 2 versions |
