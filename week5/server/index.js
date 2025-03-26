const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = 8000;

  // Middleware
  app.use(cookieParser());
  app.use(express.json());
  app.use(
    cors({
      origin: "http://127.0.0.1:5501", // Allow all origins
      credentials: true, // Allow credentials
    })
  ); // Allow frontend access

// Simple Authentication API - (Cookie Based)
app.get("/", (req, res) => {
  res.cookie("userId", "1234", {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days,
    secure: true,
    sameSite: "None",
  });
  res.cookie("sessionId", "1", {
    secure: true,
    sameSite: "None",
  });
  res.json({ message: "Welcome to Cookie API!" });
});

app.post("/check-mobile", (req, res) => {
  const { mobileNumber } = req.body;
  const mobile = mobileNumber.trim();

  // Check if User ID is present in cookies
  console.log("UserId: ", req.cookies.userId);
  if (!req.cookies.userId) {
    return res.status(401).json({ message: "Unauthorized!" });
  }

  // Check if mobile number is valid using regex
  const mobileRegex = /^[0-9]{10}$/;
  if (!mobileRegex.test(mobile)) {
    return res.status(400).json({ message: "Mobile number is invalid!" });
  }

  // Return success message
  res.json({ message: "Mobile number is valid!" });
});

// Start Server
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
