# FRONT END SETUP
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

### `npm run build` fails to minify


Nodejs Backend For penauto

TECH STACK FOR BACKEND
Nodejs,Express,Prisma,Postgresql


# FRONT END SETUP LOCAL
--------------
1) Postgresql commands

=>create role penauto with SUPERUSER login password 'penauto'; //Create Role
=>create database penauto with owner = penauto; //Create Database


2) Migrate Schema

Go to local Src project and fire
=>npx prisma migrate dev

3) Run local server by
=>npm run start