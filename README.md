# Messenger App
![image](https://res.cloudinary.com/dezqiqsqb/image/upload/v1686650908/Messenger4_ilvf2x.png)
## Description
Messenger App is a real-time chat application built with Next.js, Tailwind CSS, TypeScript, Prisma, and MongoDB. It allows users to chat with each other in real-time.

## Features
- Real-time messaging
- User authentication
- Online/offline status
- Message notifications

## Demo
A live demo of the application is available at [Demo Link](https://messengerylcn.vercel.app/).

## Screenshots
![image](https://res.cloudinary.com/dezqiqsqb/image/upload/v1686650908/Messenger1_lmblbf.png)
![image](https://res.cloudinary.com/dezqiqsqb/image/upload/v1686650908/Messenger2_mpgx3e.png)
![image](https://res.cloudinary.com/dezqiqsqb/image/upload/v1686650908/Messenger5_ifukdm.png)

## Installation
To run the Messenger App locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/messenger-app.git`
2. Install dependencies: `npm install`
3. Set up environment variables:
   - Create a `.env` file based on `.env.example`
   - Provide necessary configuration values in the `.env` file
4. Set up the database:
   - Ensure you have MongoDB installed and running
   - Update the database connection URL in the `.env` file
   - Run migrations: `npx prisma migrate dev`
5. Start the development server: `npm run dev`
6. Open your browser and visit `http://localhost:3000`

## Technologies Used
- Next.js
- Tailwind CSS
- TypeScript
- Prisma
- MongoDB
