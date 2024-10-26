import React, { useState } from "react";
import { TextField, Button, Typography, CircularProgress, Box, Container } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    setLoading(true);
    setError("");

    const auth = getAuth();

    // Firebase Authentication
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(false);
        onLoginSuccess(userCredential.user);
      })
      .catch((error) => {
        setLoading(false);
        setError("Failed to login. Please check your email and password.");
        console.error("Login error", error);
      });
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10vh",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {loading ? (
          <CircularProgress sx={{ marginTop: "20px" }} />
        ) : (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: "20px" }}
            onClick={handleLogin}
          >
            Login
          </Button>
        )}

        {error && (
          <Typography color="error" sx={{ marginTop: "20px" }}>
            {error}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Login;
