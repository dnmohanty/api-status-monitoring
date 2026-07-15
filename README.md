# Autonomous API Monitoring Dashboard

A full-stack monitoring system that autonomously pings a target API, logs the uptime and response data into a cloud database, and visualizes the system's health in real-time. 

## 🚀 Live Demo
* **Frontend:** [https://api-status-monitoring.vercel.app](https://api-status-monitoring.vercel.app)
* **Backend API:** [https://api-status-monitoring.onrender.com/api/history](https://api-status-monitoring.onrender.com/api/history)

## ✨ Features
* **Autonomous Polling:** A Node.js backend engine automatically pings a target endpoint (e.g., GitHub API) at 10-second intervals.
* **Persistent Cloud Logging:** Integrates with MongoDB Atlas to store timestamped successful payloads and error logs.
* **Real-Time Health UI:** React frontend fetches and displays the most recent 100 database logs, complete with a dynamic status badge ("System Healthy" vs. "Backend Disconnected").
* **Fully Cloud Deployed:** Microservice architecture deployed across Render (backend) and Vercel (frontend).

## 🛠 Tech Stack
**Frontend:**
* React (Vite)
* TypeScript
* CSS

**Backend & Database:**
* Node.js / Express.js
* TypeScript
* MongoDB Driver 
* MongoDB Atlas (Cloud Database)

**Infrastructure:**
* Vercel (Frontend Hosting)
* Render (Backend Hosting)

## 💻 Local Development

### Prerequisites
* Node.js installed
* A MongoDB Atlas cluster and connection string

### 1. Clone the repository
\`\`\`bash
git clone https://github.com/dnmohanty/api-status-monitoring.git
cd api-status-monitoring
\`\`\`

### 2. Set up Environment Variables
Create a `.env` file in the root of your backend directory and add the following keys:
\`\`\`env
PORT=8000
TARGET_URL=https://api.github.com/users/github
MONGO_URI=your_mongodb_connection_string
\`\`\`

### 3. Install Dependencies & Run
Start both the backend and frontend servers:

**Backend:**
\`\`\`bash
cd backend
npm install
npm run dev
\`\`\`

**Frontend:**
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`