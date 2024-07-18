
```markdown
# Ionic Resume Builder App

This project is a resume builder application built with Ionic and Angular for the frontend, and NestJS with MongoDB for the backend. Users can create, update, and delete their resume sections such as personal information, education, experience, and skills. It also includes user authentication with JWT.

## Features

- User authentication with JWT
- CRUD operations for resume sections (personal info, education, experience, skills)
- Responsive design using Ionic and Bootstrap
- Integration with a NestJS backend

## Table of Contents

- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

### Backend Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/sarbjitrana/ionic-resume-builder-backend.git
   cd ionic-resume-builder-backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file with the following content:

   ```env
   MONGODB_URI=mongodb://localhost:27017/resume-builder
   JWT_SECRET=your_secret_key
   ```

4. Start the NestJS server:

   ```sh
   npm run start
   ```

### Frontend Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/sarbjitrana/ionic-ng-resume-builder-app.git
   cd onic-ng-resume-builder-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Update the backend API URL in `src/environments/environment.ts`:

   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:3000'
   };
   ```

4. Start the Ionic app:

   ```sh
   ionic serve
   ```

## Usage

1. Register a new user or log in with an existing account.
2. Navigate through the tabs to add or update personal information, education, experience, and skills.
3. View the resume by navigating to the "Preview" tab.

## API Endpoints

The backend API provides the following endpoints:

- **POST** `/auth/register` - Register a new user
- **POST** `/auth/login` - Log in an existing user
- **GET** `/personal-info` - Get personal information
- **POST** `/personal-info` - Create or update personal information
- **GET** `/education` - Get all education records
- **POST** `/education` - Create or update an education record
- **GET** `/experience` - Get all experience records
- **POST** `/experience` - Create or update an experience record
- **GET** `/skills` - Get all skills records
- **POST** `/skills` - Create or update a skills record

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```
