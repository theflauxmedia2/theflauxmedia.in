# The Flaux Media - Landing Page

## Overview

This is a modern, animated landing page for The Flaux Media, a social media marketing agency. The application is built using React with TypeScript, featuring a clean black, white, and vibrant orange color scheme. The site includes smooth animations, scroll-based interactions, and a responsive design that works across all devices.

## System Architecture

The application follows a full-stack architecture with clear separation between frontend and backend:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Radix UI components with shadcn/ui styling
- **Styling**: Tailwind CSS with custom CSS variables for brand colors
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Animations**: CSS-based animations with Intersection Observer for scroll-triggered effects

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session store with connect-pg-simple

### Data Storage
- **Primary Database**: PostgreSQL via Neon Database
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Location**: `shared/schema.ts` for shared type definitions
- **Migration System**: Drizzle Kit for database migrations

## Key Components

### Frontend Components
1. **Navbar**: Smart scroll-based navigation with dual states (top/floating)
2. **Hero Section**: Animated landing section with gradient text and scroll indicators
3. **About Section**: Interactive cursor-following arrow with content
4. **Services Section**: Grid-based service offerings with hover effects
5. **Team Section**: Team member showcase with staggered animations
6. **Contact Section**: Contact form and social media links
7. **Footer**: Simple footer with branding

### Backend Components
1. **Express Server**: Main application server with middleware
2. **Route Handler**: Centralized route registration system
3. **Storage Interface**: Abstracted storage layer with in-memory implementation
4. **Vite Integration**: Development server integration with HMR support

### UI Component Library
- Complete shadcn/ui component library implementation
- Radix UI primitives for accessibility
- Custom styling with Tailwind CSS
- Consistent design system with CSS custom properties

## Data Flow

1. **Client-Side Rendering**: React components render on the client
2. **API Communication**: Frontend communicates with backend via REST API
3. **Database Operations**: Backend performs CRUD operations through Drizzle ORM
4. **State Management**: React Query manages server state and caching
5. **Animation System**: Intersection Observer triggers scroll-based animations

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Query
- **UI Components**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Development**: Vite, TypeScript, ESLint configuration

### Development Tools
- **Replit Integration**: Cartographer plugin for Replit development
- **Error Handling**: Runtime error overlay for development
- **Hot Module Replacement**: Vite HMR for fast development

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` starts both frontend and backend
- **Database**: Uses DATABASE_URL environment variable for connection
- **Asset Serving**: Vite dev server handles static assets

### Production Build
- **Frontend Build**: `vite build` compiles React app to static files
- **Backend Build**: `esbuild` bundles Node.js server code
- **Deployment**: Single command `npm run build` prepares production assets
- **Runtime**: `npm start` runs production server

### Environment Configuration
- **Database**: Requires DATABASE_URL for PostgreSQL connection
- **Session Storage**: Uses PostgreSQL for session persistence
- **Static Assets**: Served from `dist/public` directory

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 06, 2025. Added immersive footer reveal animation - main content slides up as you scroll to reveal "THE FLAUX MEDIA" page underneath
- July 05, 2025. Initial setup