# Autonomous API Monitoring and Alerting Dashboard

An autonomous Node.js service designed to monitor API health, featuring automated error logging, secure environment configuration, strict type safety, and local data persistence.

## Core Features

*   **Data Persistence & REST API:** Engineered a local data persistence layer using the native Node.js File System (`fs/promises`) to log API health history, and transformed the background monitor into a consumable `/api/history` REST endpoint.
*   **Automated Health Checks:** Utilizes `setInterval` and `fetch` to autonomously ping target APIs at regular intervals.
*   **Asynchronous I/O & Path Resolution:** Performs non-blocking file operations to ensure high responsiveness. Implements absolute pathing using `fileURLToPath` and `import.meta.url` for cross-platform compatibility.
*   **Advanced Error Handling:** Implements precise `try/catch` blocks and specific error code checking (e.g., handling `ENOENT` for uninitialized files) to gracefully manage network and file system failures without crashing the server.
*   **Secure Configuration:** Uses `dotenv` to decouple sensitive configurations (like Ports and Target URLs) from the main codebase.
*   **TypeScript Architecture:** Built with strictly-typed TypeScript, utilizing modern ES6 modules (`import/export`) and explicit type definitions for Express.

## Tech Stack
*   TypeScript (Node.js)
*   Express.js
*   Dotenv
*   ts-node

## How to Run Locally
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the root directory and add your variables:
    * `PORT=8000`
    * `TARGET_URL=https://api.github.com/users/github`
4. Run `npm run dev` to start the local development server.