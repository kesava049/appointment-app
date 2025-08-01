# Appointment App
- A modern, responsive healthcare appointment booking platform built with Next.js App Router, React 19, TypeScript, Tailwind CSS, and  elegant animations via framer-motion.

- Crafted with ♥ by Kesavula Reddy
- Deployed on Vercel

# ✨ Features
- Doctor Directory: Scrollable/searchable list of doctors. Shows name, specialization, image, and availability.

- Instant Search: Live filtering by doctor name or specialization.

- Doctor Profile: See bio, specialization, and weekly schedule on a dedicated page.

- Appointment Booking:

- Book with patient name, email, and date/time

- Robust client-side form validation (required fields, future dates, email syntax)

- Confirmation message after booking

- Modern UI/UX:

- Responsive: works on mobile, tablet, desktop

- Styled with Tailwind CSS

- Polished transitions and subtle animations (using framer-motion)

- No Authentication: All actions are client-side and demo-focused

- Mock Data: Doctors are loaded from a static JSON file; no backend needed

# 🛠️ Tech Stack
- Next.js 15 (App Router, /app structure)

- React 19

- TypeScript 5

- Tailwind CSS 4

- Framer Motion 12 (for smooth animations)

- PostCSS 8 (used by Tailwind)

- ESLint 9, TypeScript types

- Deployment: Vercel (optimised for static/mock-data deployments)

# 📁 Project Structure

` app/
  layout.tsx             # Root layout, applies styles/context globally
  page.tsx               # Doctor list, search page
  doctors/
    [id]/
      page.tsx           # Doctor profile and booking page
  globals.css            # Tailwind CSS imports

components/
  DoctorCard.tsx
  DoctorList.tsx
  AppointmentForm.tsx
  Confirmation.tsx

context/
  DoctorsContext.tsx     # State (doctors & bookings) via React Context

public/
  doctors.json           # Mock doctor data
  doctor1.jpg            # (Profile image placeholder)

tailwind.config.js
postcss.config.js
tsconfig.json
package.json
README.md `


# 🚀 Getting Started

- Clone and Install

`bash`
`git clone https://github.com/your-username/appointment-app.git`
`cd appointment-app`
`npm install`
`Run Locally`

`bash`
`npm run dev`
`Open http://localhost:3000.`

# ⚡️ How It Works
- Data: /public/doctors.json holds all doctor/schedule information (editable).

- State: Managed app-wide with React Context (context/DoctorsContext.tsx).

- Booking: When you book, details are saved in client state (not persisted—demo only).

- Validation: Booking form requires all fields, verifies future datetime and valid email.

- Availability: Prevents booking with doctors who aren’t available.

# 🧩 Libraries Used
- framer-motion — animations and transitions

- react + react-dom

- next (App Router, no /src)

- tailwindcss

- postcss

- typescript

- eslint & types

# Want to take it further? Here’s what could be next:

- Connect to a real backend or database (API routes, Prisma, etc)

- Add authentication for patients/doctors (e.g., next-auth)

- Doctor calendar management, prevent double-booking

- Email/SMS notifications

- Admin dashboard for managing doctors/appointments

- Accessibility and WCAG compliance

- Multi-language support

- Analytics and error tracking

- Testing suite (Jest, React Testing Library, Cypress)

- Dark mode and further UI polish

# 📝 Challenges Faced and Solutions
- App Router State Handling: Managed all doctor and booking state via React Context so it works across all client components under /app.

- Form Validation: Built custom checks for required fields, email format, and future dates.

- Animations: Used framer-motion for fade-in transitions and component focus.

- No Backend: Used static JSON to allow full functionality without complex setup—ideal for demos or rapid prototyping.

- Vercel Deployment: Tested and optimized for Next.js’s static and hybrid deployments.

