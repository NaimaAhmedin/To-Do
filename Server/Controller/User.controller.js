const User = require("../Model/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// User registration (signup)
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// User login (signin)
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate a token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get user profile (protected route)
exports.getProfile = async (req, res) => {
  try {
    console.log("User ID from req.user:", req.user.id); // Debug log

    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    if (!user) {
      console.log("User not found"); // Debug log
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User profile fetched successfully:", user); // Debug log
    res.status(200).json(user); // Return the user object directly
  } catch (error) {
    console.error("Error fetching profile:", error); // Debug log
    res.status(500).json({ message: "Server error", error });
  }
};
