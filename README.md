# TravelKuy API
⚠️ UNDER CONSTRUCTION ⚠️
Welcome to the TravelKuy API repository! This repository contains the backend code for the TravelKuy application, a travel booking platform. This API is built using Express.js, Prisma, Cors, Dotenv, and Nodemon.

## Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

TravelKuy is a travel booking platform designed to make travel planning and booking easier for users. This API serves as the backend for the TravelKuy application, providing essential functionalities for managing user accounts, booking travel packages, and more.

## Tech Stack

The TravelKuy API is built using the following technologies:

- **Express**: A fast, unopinionated, and minimalist web framework for Node.js, perfect for building APIs.
- **Prisma**: A modern database toolkit that simplifies database access in Node.js, including an ORM (Object-Relational Mapping) for PostgreSQL, MySQL, and SQLite.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.js applications.
- **Dotenv**: A zero-dependency module that loads environment variables from a .env file into process.env.
- **Nodemon**: A utility that monitors for changes in your source code and automatically restarts your server.

## Getting Started

To get started with the TravelKuy API, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/travelkuy-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd travelkuy-api
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and configure your environment variables:

   ```env
   # Example .env file

   # Database
   DATABASE_URL=your_database_url

   # Port
   PORT=3000

   # Other variables...
   ```

5. Migrate the database schema and seed initial data (if needed):

   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

The TravelKuy API should now be running locally at `http://localhost:3000`. You can access the API endpoints as described below.

## API Endpoints

Here are the main API endpoints provided by the TravelKuy API:
⚠️ UNDER CONSTRUCTION ⚠️
- **POST /api/auth/signup**: Create a new user account.
- **POST /api/auth/login**: Log in with an existing user account.
- **GET /api/packages**: Retrieve a list of available travel packages.
- **GET /api/packages/:id**: Retrieve details of a specific travel package.
- **POST /api/bookings**: Book a travel package.
- **GET /api/bookings**: Retrieve a list of user bookings.
- **GET /api/bookings/:id**: Retrieve details of a specific booking.

For more detailed information on each endpoint and how to use them, please refer to the API documentation.

## Contributing

We welcome contributions to the TravelKuy API! If you'd like to contribute, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
