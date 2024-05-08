// server.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Define your routes
// Example route for handling signup data
app.post("/signup", (req, res) => {
  const { email, fullName, phoneNumber, password } = req.body;
  // Here you can save the signup data to your database
  console.log("Received signup data:", {
    email,
    fullName,
    phoneNumber,
    password,
  });
  res.send("Signup successful");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
