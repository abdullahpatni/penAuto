Nodejs Backend For penauto

TECH STACK FOR BACKEND
Nodejs,Express,Prisma,Postgresql



Local Setup
--------------
1) Postgresql commands

=>create role penauto with SUPERUSER login password 'penauto'; //Create Role
=>create database penauto with owner = penauto; //Create Database


2) Migrate Schema

Go to local Src project and fire
=>npx prisma migrate dev

3) Run local server by
=>npm run start