# Campus Nexus Authentication Backend

A lightweight and secure authentication service for Campus Nexus applications, built with Express.js and SQLite.

![Node.js](https://img.shields.io/badge/Node.js-16%2B-brightgreen)
![Express.js](https://img.shields.io/badge/Express.js-4.18.2-blue)
![SQLite](https://img.shields.io/badge/SQLite-3-orange)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Sign-Up](#sign-up)
  - [Sign-In](#sign-in)
- [Database Schema](#database-schema)
- [Code Walkthrough](#code-walkthrough)
- [Contributing](#contributing)
- [License](#license)

## Overview

This backend service provides user registration and authentication for Campus Nexus interfaces. It uses a local SQLite database (`authdb.sqlite`) to store user credentials securely with hashed passwords.

## Features

- User registration with `username`, `email`, and `password`
- Secure password hashing using **bcrypt**
- User login authentication
- SQLite for lightweight local storage
- CORS enabled for cross-origin resource sharing
- JSON body parsing for easy API consumption
- Detailed error handling and responses

## Technology Stack

- **Node.js** (v16+)
- **Express.js** (v4.18.2)
- **SQLite3** (local database)
- **bcrypt** (password hashing)
- **CORS** (cross-origin requests)
- **body-parser** (JSON and URL-encoded payloads)

## Project Structure

```text
Backend/
├── index.js           # Main application entry point
├── authdb.sqlite      # SQLite database file
├── package.json       # Project metadata and dependencies
├── db/                # (Optional) SQL scripts and dumps
│   ├── authdb.db
│   └── Users.sql
└── README.md          # Documentation
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/campus-nexus-auth.git
   cd campus-nexus-auth/Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the server**
   ```bash
   node index.js
   ```

The server will start on `http://localhost:3000` and will create `authdb.sqlite` if it does not exist.

## Configuration

- The application listens on port **3000** by default.
- CORS is configured to allow all origins (`*`) for simplicity. In production, restrict to your frontend domain.
- No environment variables are required for this simple setup.

## Usage

Use any HTTP client (e.g., **Postman**, **cURL**, or your Campus Nexus frontend) to interact with the API.

## API Endpoints

### Sign-Up

```http
POST /signup
Content-Type: application/json
```

**Request Body**:
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "yourPassword123"
}
```

**Responses**:
- `201 Created`: User registered successfully
- `400 Bad Request`: Missing fields or unique constraint violation
- `500 Internal Server Error`: Database or server error

### Sign-In

```http
POST /signin
Content-Type: application/json
```

**Request Body**:
```json
{
  "email": "john@example.com",
  "password": "yourPassword123"
}
```

**Responses**:
- `200 OK`: Login successful, returns user info
- `400 Bad Request`: Missing fields or invalid credentials
- `500 Internal Server Error`: Database or server error

## Database Schema

The SQLite database contains a single table `users`:

| Column   | Type    | Constraints                      |
| -------- | ------- | -------------------------------- |
| `id`     | INTEGER | PRIMARY KEY AUTOINCREMENT        |
| `username`| TEXT   | UNIQUE, NOT NULL                 |
| `email`  | TEXT    | UNIQUE, NOT NULL                 |
| `password`| TEXT   | NOT NULL (bcrypt hashed password)|

## Code Walkthrough

- **index.js**:
  - Imports and configures Express, body-parser, CORS, bcrypt, and SQLite3.
  - Sets up middleware for JSON and URL-encoded bodies.
  - Initializes the SQLite database and creates `users` table.
  - Defines `POST /signup` route for user registration.
  - Defines `POST /signin` route for user authentication.
  - Starts the server on the defined port.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/myfeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/myfeature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).
