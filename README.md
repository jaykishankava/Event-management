Event Management Application - README
Description
This Event Management Application is built using React, providing a user-friendly interface to create, view, and manage events. Users can sign up, log in, and perform various operations such as adding events, viewing event details, editing events, and deleting them. The app utilizes localStorage to store event data and user credentials, making it persistent across page reloads without requiring a backend.

Features
Add Event: Users can create an event by filling out a form that requires a title, description, date, location, and max attendees.
View Events: Display a list of events with their details such as title, description, date, location, and attendee capacity.
Search Events: Users can search for events by title, description, date, location, or maximum attendees.
Edit Events: Users can edit existing event details.
Delete Events: Users can delete an event.
Login/Signup: Simple user authentication using localStorage. Users can sign up, log in, and navigate the app after successful login.
Responsive Design: The app is mobile-friendly and adapts to different screen sizes.
Project Structure
php
Copy code
.
├── public/
├── src/
│   ├── Component/
│   │   ├── Header.js           # Contains the main navigation header
│   ├── pages/
│   │   ├── Add.js              # Add new events
│   │   ├── View.js             # View, search, edit, and delete events
│   │   ├── Login.js            # User login page
│   │   ├── Signup.js           # User signup page
│   └── index.js                # Entry point for React app
├── App.js                      # Main routing and app structure
├── index.css                   # Global CSS styles
├── README.md                   # This file
└── package.json                # Project dependencies and scripts
Pages
1. Add Event (Add.js)
The Add.js page allows users to create new events by filling in the required fields such as title, description, date, location, and the maximum number of attendees. Validation ensures that all fields are completed before submitting. Successfully added events are stored in localStorage.

2. View Events (View.js)
The View.js page displays all created events and allows users to:

Search: Filter events based on the title, description, date, location, or max attendees.
Edit: Modify the details of an existing event.
Delete: Remove an event from the list.
3. Login (Login.js)
The Login.js page allows users to log in using previously registered credentials. If the user provides valid credentials, they are redirected to the Add Event page. If the login attempt fails, an error message is displayed.

4. Signup (Signup.js)
The Signup.js page allows new users to register by providing their name, email, and password. The user details are stored in localStorage, and on successful registration, they can log in.

Technologies Used
React: For building user interfaces.
React Router: For navigation between different pages.
React Toastify: For providing toast notifications on actions like successful addition of events, login failures, etc.
LocalStorage: To store user data and event records persistently.
CSS: For styling and layout of the app.