# Social Media Website

## Table of Contents
1. [**General Info**](#general-info)
2. [**Backend Technologies Used**](#backend-technology-used)
3. [**Frontend Technologies Used**](#frontend-techlogy-used)
4. [**Setup**](#setup)
5. [**Features**](#features) 
6. [**Code & Snippets**](#CodeSnippets)

## General Info
This project is a social media website built using the MERN (MongoDB, Express.js, React, Node.js) stack. It enables users to create profiles, connect with friends, share posts, comment on posts, and like posts, focusing on creating a seamless social interaction experience.

## Backend Technologies Used:

# Node.js
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side, enabling building scalable and efficient web applications.

# Express.js
Express.js is a web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a robust set of features for routing, middleware, and HTTP utilities.

# MongoDB
MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It's commonly used in MERN stack applications for its scalability and flexibility.

## MongoDB Schema

![schema](https://github.com/AhmadBahr/Social-Media-Application/assets/150359856/1db1d036-8617-4938-a355-344e748d9df7)



# Mongoose
Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a straightforward schema-based solution for modeling application data and interacting with MongoDB databases.

# JsonWebToken
JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. It's commonly used for implementing authentication and authorization in web applications.

# Multer
Multer is a middleware for handling multipart/form-data, which is commonly used for file uploads in Node.js applications.

# GridFS-Storage
GridFS is a specification for storing and retrieving large files in MongoDB. GridFS-Storage is a package that provides GridFS storage engine support for Multer.

## Frontend Technologies Used:

# HTML
HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications. It provides the structure for web content.

# CSS
CSS (Cascading Style Sheets) is used to style the HTML structure, including setting fonts, colors, margins, paddings, and alignments.

# JavaScript
JavaScript is a programming language that enables interactive and dynamic features on web pages. It's commonly used for client-side scripting and interacting with web content.

# React
React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage application state efficiently.

# Redux Toolkit
Redux Toolkit is a package that simplifies the usage of Redux for state management in React applications. It includes utilities to simplify common Redux use cases and reduces boilerplate code.

# React Router
React Router is a routing library for React applications. It enables navigation and rendering of different components based on the URL.

# Redux Persist
Redux Persist is used for persisting Redux state in a browser's local storage. It ensures that the state persists across page reloads or browser sessions.

# React Dropzone
React Dropzone is a lightweight React component for file uploads. It provides a simple and customizable interface for users to upload files.

# Formik
Formik is a form library for React that helps in managing form state, handling form validation, and form submission.

# Yup
Yup is a JavaScript schema builder for value parsing and validation. It's commonly used with Formik for defining validation rules for form fields.

## Setup
Clone the repository: git clone https://github.com/your-username/social-media-website.git

Navigate to the project directory: cd social-media-website

Install backend dependencies: npm install

Install frontend dependencies: cd client && npm install

Start the development server: npm run dev

Open your browser and go to http://localhost:3000 to view the website.

## Features

User Profiles: Utilizes MongoDB and Mongoose to store and retrieve user profile data. Express.js handles user authentication routes, while JsonWebToken provides secure session management.

Friend Connections: MongoDB stores friend connections between users. Express.js defines endpoints for sending and accepting friend requests, and React renders the friend list and friend request notifications.

Post Sharing: MongoDB stores post data, including text content and attached media files. Express.js handles POST requests to create new posts, while React Dropzone enables users to upload images and videos.

Interactions: MongoDB stores likes and comments associated with posts. Express.js defines endpoints for adding likes and comments, while React components handle the display and interaction with these elements.

News Feed: MongoDB stores posts from friends, which are retrieved and displayed in the user's personalized news feed. React Router enables navigation between different views, while Redux Toolkit manages the global state to update the news feed in real-time.

# Code & Snippets: 
## Backend Code Snippets:
![Welcome - Social-Media-Application - ahmad - Visual Studio Code 26-Jul-24 12_07_29 AM](https://github.com/user-attachments/assets/b3c9edfa-0230-4fc8-89ec-1e339cbd418c)
![Welcome - Social-Media-Application - ahmad - Visual Studio Code 26-Jul-24 12_06_58 AM](https://github.com/user-attachments/assets/7fcf7fc2-476c-48d6-9f99-c5bd054b3355)
![Welcome - Social-Media-Application - ahmad - Visual Studio Code 26-Jul-24 12_05_51 AM](https://github.com/user-attachments/assets/44150cbc-c144-43ea-bf65-f31b968a6f01)
![Welcome - Social-Media-Application - ahmad - Visual Studio Code 26-Jul-24 12_05_38 AM](https://github.com/user-attachments/assets/7d70c7ae-37dd-4e00-a03e-088f3a47038d)
![Welcome - Social-Media-Application - ahmad - Visual Studio Code 26-Jul-24 12_04_53 AM](https://github.com/user-attachments/assets/575d1317-3f98-4be6-a3cb-bcce40d9e628)
![MINGW64__c_Users_ATTO_Desktop_Social-Media-Application_server 26-Jul-24 12_06_13 AM](https://github.com/user-attachments/assets/0c9f8ef7-e6ad-4e43-a199-57c75b3c81dc)

## Frontend Code Snippets:

![352292707-a159ca79-0280-4261-86d6-40bef383191b](https://github.com/user-attachments/assets/eb5311a4-8a0c-4455-8a60-1a19aa0d2acd)
![Welcome - Social-Media-Application - ahmad - Visual Studio Code 26-Jul-24 12_08_27 AM](https://github.com/user-attachments/assets/8ae2feed-9649-4b0b-a220-b88838db2673)
![Welcome - Social-Media-Application - ahmad - Visual Studio Code 26-Jul-24 12_08_10 AM](https://github.com/user-attachments/assets/6c4296f0-a156-4fc2-8335-ac2b8143ca50)
![Welcome - Social-Media-Application - ahmad - Visual Studio Code 26-Jul-24 12_07_59 AM](https://github.com/user-attachments/assets/b97c50cc-a461-469a-a086-772ae9436fdd)
![d4e9121d-a04f-4a73-91fb-9b091d90c765](https://github.com/user-attachments/assets/21aa156e-b98c-4327-b645-aa34336eae9b)


