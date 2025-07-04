// src/components/auth/LoginForm.jsx
import {
  Box, Input, Button, Heading, VStack, useToast
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import AuthContext from "../../Context/AuthContext";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const toast = useToast();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        login(data.user, data.token);
        toast({ title: "Login successful", status: "success" });
      } else {
        toast({ title: "Login failed", description: data.error, status: "error" });
      }
    } catch (err) {
      toast({ title: "Server error", status: "error" });
    }
  };

  return (
    <Box p={6} shadow="md" borderWidth="1px">
      <Heading mb={4}>Log In</Heading>
      <VStack spacing={3}>
        <Input placeholder="Email" name="email" onChange={handleChange} />
        <Input placeholder="Password" name="password" type="password" onChange={handleChange} />
        <Button colorScheme="blue" onClick={handleSubmit}>Login</Button>
      </VStack>
    </Box>
  );
};

export default LoginForm;
