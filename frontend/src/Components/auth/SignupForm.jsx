// src/components/auth/SignupForm.jsx
import {
  Box, Input, Button, Heading, VStack, useToast
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import AuthContext from "../../Context/AuthContext";

const SignupForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const toast = useToast();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        toast({ title: "Signup successful", status: "success" });
      } else {
        toast({ title: "Signup failed", description: data.error, status: "error" });
      }
    } catch (err) {
      toast({ title: "Server error", status: "error" });
    }
  };

  return (
    <Box p={6} shadow="md" borderWidth="1px">
      <Heading mb={4}>Sign Up</Heading>
      <VStack spacing={3}>
        <Input placeholder="Name" name="name" onChange={handleChange} />
        <Input placeholder="Email" name="email" onChange={handleChange} />
        <Input placeholder="Password" name="password" type="password" onChange={handleChange} />
        <Button colorScheme="teal" onClick={handleSubmit}>Create Account</Button>
      </VStack>
    </Box>
  );
};

export default SignupForm;
