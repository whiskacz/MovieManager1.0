## Movie Manager 1.0

### Introduction
The application is an interactive movie manager designed for browsing, searching, and managing a collection of movies. Its main features include login functionality, user account creation, browsing the most popular, top-rated, and upcoming movies from the external TMDB API, as well as creating a personalized movie list for each registered user.

### The application utilizes:
Frontend: React with TypeScript, employing React Router for managing routes, and Redux for handling the application's state.
Backend: A server written in Express.js with MongoDB as the database.

### Additional tools: 
Axios for handling network requests and primarily communicating with the TMDB service API, Lodash for simplifying data operations, mongoose for handling the external database, and Tailwind CSS for partial styling.

### Routing Structure Description
The application uses React Router to manage paths and render appropriate components based on the logged-in user's status.
BrowserRouter: Utilized to ensure routing within the application.
Routes and Route: Definitions of routing paths and components associated with these paths.
Home, Manager, MovieDetails: Components rendered for specific paths.

### Security and Error Handling
Access to the application is restricted to registered users only.
Field validation (username, password, email) follows strict rules.
All passwords are encrypted before being stored in the database.
The application responds to login errors, registration issues, and server errors, providing appropriate messages for users and information in console.log.

### Planned Development
Planned migration of the server to the cloud to ensure continuous application availability without the need to manually start a dedicated server each time.
Efforts aimed at optimizing performance.
