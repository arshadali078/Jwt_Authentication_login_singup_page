import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve values from localStorage
    const storedName = localStorage.getItem("name") || "Guest";
    const storedEmail = localStorage.getItem("email") || "No email provided";
    const storedPassword = localStorage.getItem("password") || "No password provided";

    setUser({ name: storedName, email: storedEmail, password: storedPassword });
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #6c63ff, #3b3a6b)", // Gradient background
        padding: "0 20px", // Add padding for better spacing
      }}
    >
      <Card
        className="shadow-lg p-4 text-center"
        style={{
          width: "100%",
          maxWidth: "450px",
          borderRadius: "20px",
          border: "none",
          backgroundColor: "white", // Card background color
        }}
      >
        <Card.Body>
          <Card.Title
            className="mb-4 text-primary"
            style={{ fontSize: "26px", fontWeight: "600" }}
          >
            Welcome, {user.name}
          </Card.Title>
          <Card.Text className="mb-3" style={{ fontSize: "16px", color: "#333" }}>
            <strong>Email:</strong> {user.email}
          </Card.Text>
          <Card.Text className="mb-4" style={{ fontSize: "16px", color: "#333" }}>
            <strong>Password:</strong> {user.password.length > 6 ? "***" : user.password}
          </Card.Text>
          <Button
            variant="danger"
            className="w-100"
            onClick={handleLogout}
            style={{
              padding: "10px",
              fontSize: "16px",
              borderRadius: "50px",
              backgroundColor: "#ff4d4f", // Updated logout button color
              borderColor: "#ff4d4f",
            }}
          >
            Logout
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard;
