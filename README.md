# TaskFlow — Smart Task & Project Management System

A real-world full stack application for managing personal/work tasks.

## Features
- Register/Login
- JWT authentication and bcrypt password hashing
- Private user tasks
- Create, edit, delete and complete tasks
- Todo / In Progress / Completed status
- Low / Medium / High priority
- Due dates
- Search and status filters
- Dashboard statistics
- MongoDB persistence
- REST API
- Responsive UI

## Stack
HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs.

## Run locally
1. Install Node.js LTS.
2. Create a MongoDB Atlas database.
3. Copy `backend/.env.example` to `backend/.env`.
4. Put your MongoDB URI and a strong JWT secret in `.env`.
5. Open terminal in `backend/` and run:
   `npm install`
6. Start:
   `npm start`
7. Open `http://localhost:5000`.

Never upload `backend/.env` to GitHub.

## API
POST `/api/auth/register`
POST `/api/auth/login`
GET `/api/tasks`
POST `/api/tasks`
PUT `/api/tasks/:id`
PATCH `/api/tasks/:id/status`
DELETE `/api/tasks/:id`

## Real-world architecture
Browser → Express REST API → JWT authentication → MongoDB → user-specific task data.

## Future upgrades
Team workspaces, task assignment, Kanban board, notifications, email reminders, file attachments, pagination, role-based access and cloud deployment.

## Author
Jivesh Kumar
- GitHub: https://github.com/jivesh07
- LinkedIn: https://www.linkedin.com/in/jiveshkumar07
- Portfolio: https://jivesh07.github.io/portfolio/
