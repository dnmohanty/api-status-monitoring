# Autonomous API Monitoring & Alerting Dashboard

A fully autonomous, full-stack monitoring system that tracks API health in real-time and provides an enterprise-grade visual dashboard for alerting.

**Live Demo Frontend (Vercel):** [View Dashboard Here](https://api-status-monitoring-h7b0qx9ib-sentinels3.vercel.app/)  
**Live API Backend (Render):** [https://api-status-monitoring.onrender.com](https://api-status-monitoring.onrender.com)

## Features
* **Autonomous Backend Engine**: Node.js microservice that periodically polls target APIs to assess health and latency.
* **Cloud Data Persistence**: Seamlessly logs API status history and connection metrics to a MongoDB Atlas cluster.
* **Real-time Dashboard**: React-based frontend built with Vite & TypeScript for instant, autonomous status visualization.
* **Smart Alerting & Polling**: The frontend engine automatically fetches updates every 10 seconds without page refreshes, triggering visual alerts for service disruptions.
* **Fully Deployed Workflow**: Continuous Integration/Continuous Deployment (CI/CD) pipelines set up via Vercel (Frontend) and Render (Backend).

## Tech Stack
* **Frontend**: React, TypeScript, Vite, Vercel
* **Backend**: Node.js, Express, Render
* **Database**: MongoDB Atlas
* **Styling**: Custom CSS with pulse-animation status indicators

## Setup Instructions

### Prerequisites
* Node.js installed (v18+)
* npm or yarn
* A MongoDB Atlas account and connection URI

### Local Development

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd autonomous-api-monitor