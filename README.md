# QuickConsult 24/7

QuickConsult 24/7 is a comprehensive telemedicine platform designed to connect patients, doctors, and administrators in a seamless online environment. The project aims to make healthcare accessible and efficient by enabling users to consult with doctors, book appointments, and manage their health records from anywhere, at any time.

## Project Overview

QuickConsult provides three main portals:
- **User Portal:** For patients to register, login, browse doctors, book appointments, and manage their profiles.
- **Doctor Portal:** For doctors to manage appointments, update their profiles, and view analytics.
- **Admin Panel:** For administrators to oversee platform activity, manage doctors, and view all appointments.

The platform is built with a modern tech stack, ensuring security, scalability, and a responsive user experience.

## Project Structure

```
QuickConsult/
├── admin/        # Admin dashboard (React)
│   ├── src/
│   │   ├── components/      # Navbar, Sidebar, etc.
│   │   ├── context/         # Context providers for admin, doctor, app
│   │   ├── pages/           # Login, Admin, Doctor pages
│   │   └── assets/          # Static assets
│   ├── public/
│   └── ...
├── backend/      # Node.js/Express API server
│   ├── config/            # DB, Cloudinary, etc.
│   ├── controllers/       # Business logic
│   ├── middleware/        # Auth, file upload
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   └── server.js
├── frontend/     # User-facing React app
│   ├── src/
│   │   ├── components/      # Banner, Footer, Header, etc.
│   │   ├── context/         # App context
│   │   ├── pages/           # About, Appointment, Contact, Doctors, Home, Login, MyAppointments, MyProfile, Verify
│   │   └── assets/          # Static assets
│   ├── public/
│   └── ...
└── README.md
```

## Key Features

- **User Portal**
  - Register and login
  - Browse doctors by specialty
  - Book and manage appointments
  - View and edit user profile
  - Track appointment history

- **Doctor Portal**
  - Doctor dashboard with analytics
  - Manage appointments and availability
  - View and update doctor profile

- **Admin Panel**
  - Add and manage doctors
  - View all appointments
  - Dashboard analytics
  - Manage doctor list

- **General**
  - Secure authentication for all roles
  - Responsive UI with React and Tailwind CSS
  - Modern, mobile-friendly design

## Technologies Used
- React (frontend & admin)
- Node.js & Express (backend)
- MongoDB (database)
- Tailwind CSS (styling)
- Cloudinary (media storage)
- Stripe & Razorpay (payment integration)

## Author
- [Mashruf Mohd](https://github.com/mashrufmohd)

## License
This project is licensed under the MIT License. See the LICENSE file for details.
