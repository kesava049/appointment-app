# 🩺 Appointment App

A modern, responsive healthcare appointment booking platform built with **Next.js 15 App Router**, **React 19**, **TypeScript**, **Tailwind CSS**, and beautiful **Framer Motion** animations.

---

## 🔗 Live Demo

👉 [appointment-app-4616.vercel.app](https://appointment-app-4616.vercel.app/)  

---

## ✨ Features

- 🔍 **Doctor Directory** – Searchable list of doctors with name, photo, specialization, and availability.
- ⚡ **Instant Search** – Live filtering by doctor name or specialization.
- 👨‍⚕️ **Doctor Profile** – Dedicated page showing doctor’s bio, schedule, and booking form.
- 📅 **Appointment Booking** – Book with patient name, email, date, and time.
- ✅ **Form Validation** – Ensures all fields are filled, email is valid, and the date/time is in the future.
- 🎉 **Booking Confirmation** – Success message after a valid booking.
- 💻 **Responsive UI** – Works seamlessly across mobile, tablet, and desktop.
- 🎨 **Modern Animations** – Smooth transitions with `framer-motion`.
- 🧪 **Client-side Only** – No backend or persistence; ideal for demo or prototyping.

---

## 🛠️ Tech Stack

- **Next.js 15** (App Router, `/app` directory)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4**
- **Framer Motion 12**
- **PostCSS 8**
- **ESLint 9** (with TypeScript rules)
- **Deployment**: [Vercel](https://vercel.com)

---

## 📁 Project Structure

```sh
app/
  layout.tsx             # Root layout (styles, context)
  page.tsx               # Home page: doctor list + search
  doctors/
    [id]/
      page.tsx           # Doctor profile + booking form
  globals.css            # Tailwind CSS imports

components/
  DoctorCard.tsx
  DoctorList.tsx
  AppointmentForm.tsx
  Confirmation.tsx

context/
  DoctorsContext.tsx     # Global state for doctors & bookings

public/
  doctors.json           # Mock doctor data
  doctor1.jpg            # Sample doctor images

tailwind.config.js
postcss.config.js
tsconfig.json
package.json
README.md
```


## 🚀 Getting Started

1. **Clone the repository**:

```sh
  git clone https://github.com/kesava049/appointment-app.git
  cd appointment-app
  npm install
```

2. **Run the next-app**:

```sh
  bash
  npm run dev
  Open http://localhost:3000.
```

## ⚡️ How It Works
- Data: /public/doctors.json holds all doctor/schedule information (editable).

- State: Managed app-wide with React Context (context/DoctorsContext.tsx).

- Booking: When you book, details are saved in client state (not persisted—demo only).

- Validation: Booking form requires all fields, verifies future datetime and valid email.

- Availability: Prevents booking with doctors who aren’t available.

## 🧩 Libraries Used
- framer-motion — animations and transitions

- react + react-dom

- next (App Router, no /src)

- tailwindcss

- postcss

- typescript

- eslint & types

## Want to take it further? Here’s what could be next:

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

## 📝 Challenges Faced and Solutions
- App Router State Handling: Managed all doctor and booking state via React Context so it works across all client components under /app.

- Form Validation: Built custom checks for required fields, email format, and future dates.

- Animations: Used framer-motion for fade-in transitions and component focus.

- No Backend: Used static JSON to allow full functionality without complex setup—ideal for demos or rapid prototyping.

- Vercel Deployment: Tested and optimized for Next.js’s static and hybrid deployments.

