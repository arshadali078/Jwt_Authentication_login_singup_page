import React, { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ handleLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Login failed");

      // Store token, name, and email in localStorage
      localStorage.setItem("token", result.token);
      localStorage.setItem("name", result.user.name); 
      localStorage.setItem("email", result.user.email); 

      // Update authentication state and navigate to dashboard
      handleLogin(result.token);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #6c63ff, #3b3a6b)", // Gradient background
        padding: "0 20px",
      }}
    >
      <Card
        style={{
          width: "400px",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "white", // Card background color
        }}
      >
        <h3 className="text-center mb-4 text-primary">Login</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-pill"
              placeholder="Enter your email"
            />
          </Form.Group>

          <Form.Group controlId="password" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="rounded-pill"
              placeholder="Enter your password"
            />
          </Form.Group>

          <Button
            type="submit"
            className="w-100 mt-4 rounded-pill"
            variant="primary"
            style={{ padding: "10px 0" }}
          >
            Login
          </Button>
        </Form>

        <p className="text-center mt-3">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary">
            Sign up
          </Link>
        </p>
      </Card>
    </Container>
  );
};

export default Login;
