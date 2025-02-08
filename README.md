# Healthcare Management System - Backend

## Overview
This backend system allows:
- Patients to view available doctors.
- Categorization of doctors (GP, Ortho, etc.).
- Appointment booking and management.
- Secure authentication using JWT.

## Features
- Doctor Management: List and categorize doctors.
- Patient Management: Register patients and store medical history.
- Appointments: Book and manage appointments.
- Authentication: Secure login/signup with JWT.
- Middleware: Role-based access control and error handling.

## Project Folder Structure

├── config/
│ ├── db.js # Database connection
│ ├── env.example # Environment variable sample

├── controllers/ # Business logic controllers
│ ├── patientController.js
│ ├── doctorController.js
│ ├── authController.js
│ ├── appointmentController.js

├── models/ # Database models (Mongoose/Sequelize)
│ ├── Patient.js
│ ├── Doctor.js
│ ├── Appointment.js
│ ├── User.js

├── routes/ # API endpoints
│ ├── patientRoutes.js
│ ├── doctorRoutes.js
│ ├── authRoutes.js
│ ├── appointmentRoutes.js

├── middleware/ # Authentication and validation middleware
│ ├── authMiddleware.js
│ ├── errorMiddleware.js

├── utils/ # Utility functions
│ ├── errorHandler.js
│ ├── generateToken.js

├── database/ # Database setup
│ ├── schema.sql # SQL schema (if using SQL)
│ ├── seed.js # Sample data

├── server.js # Main backend server file
├── package.json # Dependencies
├── .gitignore # Ignore node_modules, .env
├── .env # Environment variables
├── README.md # Documentation



## Installation & Setup
```bash
# Clone the repository
git clone https://github.com/your-repo/healthcare-management-system-backend.git
cd healthcare-management-system-backend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env  # Update with actual values

# Start the server
npm start

# Or use nodemon for development
npx nodemon server.js
