# Autonomous API Monitoring and Alerting Dashboard

An autonomous Node.js service designed to monitor API health, featuring automated error logging and secure environment configuration.

## Features Built So Far
*   **Automated Health Checks:** Utilizes `setInterval` and `fetch` to ping target APIs at regular intervals.
*   **Error Handling:** Implements `try/catch` blocks to gracefully handle network failures and API downtimes without crashing the server.
*   **Secure Configuration:** Uses `dotenv` to decouple sensitive configuration (like Ports and Target URLs) from the main codebase.

## Tech Stack
*   JavaScript (Node.js)
*   Express.js
*   Dotenv

## How to Run Locally
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the root directory and add your variables:
   * `PORT=8000`
   * `TARGET_URL=https://api.github.com/users/github`
4. Run `node server.js` to start the monitor.