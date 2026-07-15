# Autonomous API Monitoring & Alerting Dashboard

A fully autonomous, full-stack monitoring system that tracks API health in real-time and provides an enterprise-grade visual dashboard for alerting.

## Features
* **Autonomous Backend**: Node.js engine that periodically pings target APIs and manages local data persistence.
* **Real-time Dashboard**: React-based frontend built with Vite & TypeScript for instant status visualization.
* **Smart Alerting**: Automatically detects backend service failures and triggers visual alerts in the UI.
* **Auto-Polling**: Front-end engine updates the dashboard every 10 seconds without page refreshes.

## Architecture
* **Frontend**: React + TypeScript + Vite.
* **Backend**: Node.js + Express.
* **Communication**: REST API with CORS enabled for cross-origin security.
* **Styling**: Custom CSS with pulse-animation status indicators.

## Setup Instructions

### Prerequisites
* Node.js installed (v18+)
* npm or yarn

### Local Development
1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd autonomous-api-monitor