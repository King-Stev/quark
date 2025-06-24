# How to Use This API
This project uses node js and to run it you should have node installed on your computer

## STEPS
1. Inialize npm packages installation: npm install
2. Run the server: node server.js

## curl commands examples
#### Create a user
curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe","email":"john@example.com"}' http://localhost:5000/users

#### Get a user (replace :id with actual ID from the create response)
curl http://localhost:5000/users/:id
