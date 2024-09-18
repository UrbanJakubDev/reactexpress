# React + Vite Setup Guide

This guide will walk you through the steps required to set up and run both the server and client sides of your React + Vite project.

## Prerequisites
Ensure you have Node.js installed on your machine. If not, download and install it from [Node.js official website](https://nodejs.org/).

## Project Structure
Your project should be structured as follows:


## Server Setup

1. Navigate to the `server` directory:
    ```bash
    cd server
    ```

2. Install the necessary dependencies:
    ```bash
    npm i
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

Your server will now be running locally. Check your terminal for the specific port it’s running on (e.g., `http://localhost:3000`).

---

## Client Setup

1. Navigate to the `client` directory:
    ```bash
    cd client
    ```

2. Install the necessary dependencies:
    ```bash
    npm i
    ```

3. Start the Vite development server:
    ```bash
    npm run dev
    ```

Vite's dev server will now be running, typically at `http://localhost:5173` (check your terminal for confirmation).

---

## Additional Notes
- **Server**: Make sure to configure your API routes and adjust the server port if necessary in the `.env` or configuration files.
- **Client**: You can modify the base URL in the client’s environment file if you're fetching data from an API.

Happy coding! 🚀
