const authService = require("../Services/Login"); // Ensure correct path


async function login(req, res) {
    try {
      const { email, password } = req.body;
  
      // Call the login function from authService
      const result = await authService.login(email, password);
  
      if (!result) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      // Return the token and user data (excluding password for security reasons)
      res.status(200).json({
        message: "Login successful",
        token: "someToken",
        user: {
          name: "Arshad Ali",
          email: "arshad@example.com",
        },
      });
      
    } catch (error) {
      // Handle error
      console.error("Login Error:", error);
      res.status(401).json({ message: error.message || "Invalid credentials" });
    }
  }
  
  module.exports = { login };
