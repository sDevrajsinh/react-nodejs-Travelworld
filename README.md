# Travel World - Full Stack Travel Booking Application

A modern travel booking application built with React.js (Frontend) and Node.js, Express, MongoDB (Backend).

## Features

- **Dynamic Tours**: Fetch and display tours dynamically from the backend.
- **Featured Tours**: Highlighting top destinations on the homepage.
- **User Authentication**: Secure Login and Registration using JWT.
- **Search Functionality**: Search tours by location, distance, and group size.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Smooth Animations**: Powered by Framer Motion.
- **Custom Hook**: Reusable `useFetch` for API calls.
- **State Management**: React Context API for Global Auth State.

## Folder Structure

### Frontend
- `src/assets`: Images and icons.
- `src/components`: Reusable UI components (Navbar, Footer, TourCard, etc.).
- `src/context`: AuthContext for global state.
- `src/hooks`: Custom hooks (useFetch).
- `src/layouts`: MainLayout for consistent page structure.
- `src/pages`: Application pages (Home, Tours, About, Login, Register).
- `src/routes`: Route definitions.
- `src/utils`: API configuration and helper functions.

### Backend
- `config`: Database and connection settings.
- `controllers`: Logic for handling API requests.
- `middleware`: Auth protection and error handling.
- `models`: Mongoose schemas (Tour, User).
- `routes`: API route definitions.
- `utils`: Helper scripts like database seeder.

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB Atlas account (or local MongoDB)

### Backend Setup

1. Navigate to the `Backend` folder:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Environment Variables:
   Create a `.env` file in the `Backend` folder and add:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```
4. Seed the Database (Optional):
   ```bash
   node utils/seeder.js
   ```
5. Run the server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the `Frontend` folder:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Auth
- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login and get JWT

### Tours
- `GET /api/v1/tours` - Get all tours
- `GET /api/v1/tours/:id` - Get single tour
- `GET /api/v1/tours/search/getFeaturedTours` - Get featured tours
- `POST /api/v1/tours` - Create a new tour (Admin only)
- `PUT /api/v1/tours/:id` - Update a tour (Admin only)
- `DELETE /api/v1/tours/:id` - Delete a tour (Admin only)
