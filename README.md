# Jobsy - Full-Stack Recruitment Platform Prototype

This is a full-stack web application built with the MERN stack technology. It features a complete user authentication system using a MERN stack (MongoDB, Express, React, Node.js).

---

### ## Features

* **User Registration:** New users can sign up with their name, email, and password.
* **JWT Authentication:** Users can log in to receive a JSON Web Token (JWT) for secure session management.
* **Protected Routes:** A user profile page is protected and only accessible to authenticated users.
* **Persistent Login:** Users remain logged in even after refreshing the page.

---

### ## Tech Stack

* **Backend:** Node.js, Express.js, MongoDB (with Mongoose)
* **Frontend:** React (with Vite), Tailwind CSS
* **Authentication:** JSON Web Tokens (JWT), bcryptjs for password hashing

---

### ## Setup and Installation

To run this project locally, please follow these steps:

**1. Clone the repository:**
```bash
git clone <your-github-repository-url>
cd colbin-recruitment-platform
```

**2. Backend Setup:**
```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Create a .env file in the /backend directory and add the following variables:
# MONGO_URI=<your_mongodb_connection_string>
# JWT_SECRET=<your_super_secret_jwt_string>

# Start the backend server
node server.js
```
The backend server will be running on `http://localhost:5000`.

**3. Frontend Setup:**
```bash
# Navigate to the frontend directory from the root
cd frontend

# Install dependencies
npm install

# Start the frontend development server
npm run dev
```
The frontend application will be available at `http://localhost:5173`.