# 🍽️ Restaurant Admin Dashboard

**Eatoes Intern – Technical Assessment**

A full-stack Restaurant Admin Dashboard that allows restaurant owners to manage menu items, track inventory availability, and handle customer orders.  
This project demonstrates MERN-stack development, RESTful API design, MongoDB querying, and modern React best practices.

---

## 🚀 Features

### Menu Management
- Create, update, and delete menu items
- Toggle item availability with Optimistic UI updates
- Search menu items with debouncing (300ms delay)
- Filter menu items by category and availability

### Orders Management
- View all customer orders
- Filter orders by status
- Update order status (Pending → Preparing → Ready → Delivered)
- Paginated order listing

### Performance & Best Practices
- Custom React hooks (`useDebounce`)
- Optimistic UI updates with rollback on failure
- MongoDB text indexing for search
- Clean component-based React architecture
- Environment variable–based configuration

---

## 🛠️ Tech Stack

### Frontend
- React 18 (Vite)
- React Router DOM
- JavaScript
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS

---

## 📂 Project Structure

root/
├── server/
│ ├── config/ # Database connection
│ ├── models/ # Mongoose schemas
│ ├── controllers/ # API logic
│ ├── routes/ # REST API routes
│ ├── scripts/ # Seed script
│ ├── .env # Environment variables
│ └── server.js # Server entry point
└── client/
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Application pages
│ ├── hooks/ # Custom React hooks
│ ├── context/ # Global state (optional)
│ ├── App.jsx
│ └── main.jsx


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone <git remote add origin https://github.com/Laharivanaja/restaurant-admin-dashboard.git>
cd restaurant-admin-dashboard
2️⃣ Backend Setup
cd server
npm install
Create a .env file inside the server folder:

PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/eatoes_dashboard
NODE_ENV=development
Run the backend server:

node server.js
3️⃣ Seed the Database
node scripts/seed.js
This will populate the database with sample menu items and orders.

4️⃣ Frontend Setup
cd client
npm install
Create a .env file inside the client folder:

VITE_API_URL=http://localhost:5000
Run the frontend application:

npm run dev
Open in browser:

http://localhost:5173


Done by "Lahari Prasanna"
