import express from "express";
import "dotenv/config";

const app = express();
app.use(express.json());

// Create list of users
let users = [];

// @route POST /users
// @desc Creating new user with generated uuid
// @access Public
app.post("/users", (req, res) => {
  try {
    const { name, email } = req.body;

    // Validate request body
    if (!name || !email) {
      return res.status(400).json({
        error: "Both name and email are required",
      });
    }

    // Validate email format
    if (!email.includes("@")) {
      return res.status(400).json({
        error: "Invalid email format",
      });
    }

    // Create new user
    const newUser = {
      id: users.length+1,
    //   id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
    };

    // Store user
    users.push(newUser);

    console.log(users);
    // Return created user
    res.status(201).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
});

// @route POST /users:id
// @desc Returns the user object corresponding to the given id
// @access Public
app.get("/users/:id", (req, res) => {
  try {
    const userId = req.params.id;

    // Get user with requested ID
    const user = users[(userId-1)];

    // Validate user
    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    // Return found user
    res.json(user);
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
