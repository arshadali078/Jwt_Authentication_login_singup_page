const User = require("../models/user");
const bcrypt = require("bcrypt");

async function createAdminAccount() {
  try {
    // ✅ Fix variable name typo
    const existingAdmin = await User.findOne({ email: "admin@example.com" });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash("admin", 10); // ✅ Ensure async hashing
      const newAdmin = new User({
        email: "admin@example.com",
        name: "admin",
        password: hashedPassword,
        role: "admin",
      });

      await newAdmin.save();
      console.log("Admin Account created successfully");
    } else {
      console.log("Admin already exists");
    }
  } catch (error) {
    console.error("Error creating admin:", error.message);
  }
}

module.exports = createAdminAccount;
