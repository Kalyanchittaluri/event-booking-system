Event Booking System (MERN)
A full-stack Event Booking System built using the MERN stack (MongoDB, Express.js, React, Node.js).
Users can browse events, book tickets with a dummy payment interface, and view their bookings. Admin can add new events and manage availability.
Tech Stack & Versions
Frontend
  - React
  - Axios
  - React Router DOM

Backend
  - Node.js
  - Express.js
  - Mongoose
  - JSON Web Token (JWT)
  - bcryptjs
  - dotenv
  - cors

Database
  - MongoDB Atlas

Features
  Responsive UI
  - Works on desktop and mobile
  - Modern dark theme with event cards

  Authentication
  - User signup & login using JWT
  - Token stored on client side (localStorage)

 Event Management
   - Admin (specific email) can:
   - Add new events (title, date, price, seats)
   - Events visible on home page for all users
   - Normal users cannot access Add Event page

 Booking & Availability
  - Users can book an event if seats are available
  - Seat count decreases on each confirmed booking
  - My Bookings page shows all events booked by that user

 Payment Flow
  - Payment modal simulating:
   - Card/UPI details input
   - Confirm Payment
   - After "payment success", booking is saved in DB

Test Credentials (Example)

  - Admin Account (can add events)
  - Email: `admin@email.com`  
  - Password: `admin123`

 Normal User (for booking flow)
  - Sign up via UI and then login.

Dummy Payment Details (For Testing UI)
These are not real payments; they are only for interface demonstration:

 - Card Number: `4242 4242 4242 4242`  
 - Expiry: 12/28 (any future date works)  
 - CVV: 123  
 - Name:  Any name

Setup Instructions (Local)
Clone Repo
git clone https://github.com/Kalyanchittaluri/event-booking-system
cd event-booking-system

Backend Setup
cd backend
npm install

Create .env file inside backend:
PORT=5000
MONGO_URL=<your mongo atlas uri>
JWT_SECRET=event123secret

Run backend:
node server.js

Expected:
Server running on port 5000
MongoDB Connected

Frontend Setup
Open new terminal:
cd frontend
npm install
npm start

App launches at:
👉 http://localhost:3000/


Project Structure
event-booking-system/
 ├── backend/
 │   ├── server.js
 │   ├── config/
 │   │   └── db.js
 │   ├── models/
 │   │   ├── User.js
 │   │   ├── Event.js
 │   │   └── Booking.js
 │   ├── routes/
 │   │   ├── authRoutes.js
 │   │   └── eventRoutes.js
 │   ├── middleware/
 │   │   └── authMiddleware.js
 │   └── .env  (not committed)
 │
 └── frontend/
     ├── src/
     │   ├── pages/
     │   │   ├── Home.js
     │   │   ├── Login.js
     │   │   ├── Signup.js
     │   │   ├── Admin.js
     │   │   └── MyBookings.js
     │   ├── components/
     │   │   ├── Navbar.js
     │   │   └── PaymentModal.js
     │   ├── App.js
     │   └── index.js
     ├── package.json
     └── public/
         └── index.html

