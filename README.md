# Introduction
This is the backend to a fullstack website.

# Installation
1. Clone the repository
2. Open the project in your IDE.
3. Create an empty MariaDB database.
4. Configure the database connection in db/secret-diary-db.sql
5. Use npm install to install the required dependencies.
6. Run the application using npm run dev.
7. Open the browser and go to http://localhost:3000.
8. BackEnd is now running.

# Instructions
1. Run the application
2. Click start to be redirected to the login page.
3. On the login page you can register a new account or log in if you already have an account. You need to be logged in, in order to make new diary and habit entries as well as look at your own diary entries and habit entries.
4. Front page displays creating a new diary entry as well as some info.
5. In the habit page you can log new habit entries.
6. In the history page you can fetch your diary entries and habit entries and browse through them.
7. The navigation bar houses the logout button that will bring you back to the login page

# Dependencies
"bcryptjs": "^2.4.3",
"cors": "^2.8.5",
"dotenv": "^16.4.7",
"express": "^4.21.2",
"jsonwebtoken": "^9.0.2",
"mysql2": "^3.12.0"

# Programming
Javascript
Html/CSS