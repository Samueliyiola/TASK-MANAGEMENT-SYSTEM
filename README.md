# User and Task Management API

## Overview
This project implements a backend system for managing users, tasks, and related features. It provides role-based access control, tagging, commenting, and notification functionalities. The API is built with Express.js and uses a relational database for data persistence.

---

## Features

### User Management
- **JWT Authentication**: Secure user registration and login using JSON Web Tokens.
- **User Roles**:
  - **Admin**: Can perform elevated actions.
  - **Regular User**: Limited access.
- **Admin Management**: Only Admins can promote other users to the Admin role.

### Task Management
- **Task CRUD**: Users can create tasks with the following fields:
  - Title
  - Description
  - Due Date
  - Status (e.g., To-Do, In Progress, Completed)
- **Task Assignment**:
  - Users can assign tasks to themselves or others.
  - Status of tasks can only be updated by:
    - Task owners (for their own tasks).
    - Admins (for any task).

### Tagging System
- **Tags**: Add tags to tasks (e.g., "Urgent", "Bug", "Feature").
- **Filter by Tags**: Filter tasks based on associated tags.

### Commenting System
- **Commenting**:
  - Users can add comments to tasks.
  - Users can edit or delete their own comments.
  - Admins can delete any comment.

### Notifications
- **Task Notifications**:
  - Notify users when they are assigned a task.
  - Notify users when the status of a task they are involved in changes.
- **Real-Time Notifications**: Optional real-time notifications using WebSockets.

### Validation
- **Payload Validation**: Ensure proper input for all endpoints (e.g., valid email format, required fields).

### Pagination & Sorting
- **Task Pagination**: Paginate tasks for better performance.
- **Task Sorting**: Sort tasks by due date, status, or other parameters.

### Database
- **Relational Database**: Use PostgreSQL or MySQL.
- **Migrations**: Provide database schema migrations for easy setup.

---

## Setup

### Prerequisites
- Node.js and npm installed.
- PostgreSQL/MySQL database instance.

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables by creating a `.env` file:
   ```env
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   PORT=your_desired_port
   ```
4. Run database migrations:
   ```bash
   npm run migrate
   ```

5. Start the server:
   ```bash
   npm start
   ```

---

## API Endpoints
### Authentication
- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Login and receive a JWT.

### Users
- **GET /users**: Get a list of all users (Admin only).
- **PATCH /users/:id/role**: Promote a user to Admin (Admin only).

### Tasks
- **POST /tasks**: Create a new task.
- **GET /tasks**: Retrieve tasks with optional filters (e.g., by tag or status).
- **PATCH /tasks/:id**: Update task status (Admin or owner only).
- **DELETE /tasks/:id**: Delete a task (Admin only).

### Tags
- **POST /tasks/:id/tags**: Add tags to a task.
- **GET /tasks?tag=tag_name**: Filter tasks by tag.

### Comments
- **POST /tasks/:id/comments**: Add a comment to a task.
- **PATCH /comments/:id**: Edit a comment (Owner only).
- **DELETE /comments/:id**: Delete a comment (Owner or Admin).

### Notifications
- **GET /notifications**: Retrieve user notifications.

---

## Technologies Used
- **Backend**: Express.js
- **Database**: MySQL
- **Authentication**: JWT
- **Validation**: Middleware for payload validation

---

## Future Enhancements
- Implement unit and integration tests.
- Add support for task priority levels.
- Extend notification system for email or push notifications.

---



