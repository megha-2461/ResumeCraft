// src/Pages/AuthPage.jsx
import React, { useState } from 'react';
import Signup from '../Components/auth/SignupForm';
import Login from '../Components/auth/LoginForm';
import { Button, Box } from '@chakra-ui/react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Box maxW="md" mx="auto" mt={8} textAlign="center">
      {isLogin ? <Login /> : <Signup />}
      <Button mt={4} onClick={() => setIsLogin(!isLogin)} colorScheme="teal" variant="outline">
        {isLogin ? 'Don\'t have an account? Sign up' : 'Already have an account? Log in'}
      </Button>
    </Box>
  );
};

export default AuthPage;
