// src/components/CareerAdvisor/CareerAdvisor.jsx
import { useState } from 'react';
import { Box, Button, Textarea, Text, VStack, Heading } from '@chakra-ui/react';
import axios from 'axios';

const CareerAdvisor = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCareerSuggest = async () => {
    setLoading(true);
    try {
      const result = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: `Suggest career paths for someone with: ${input}` }],
      }, {
        headers: {
          'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
          'Content-Type': 'application/json'
        }
      });

      setResponse(result.data.choices[0].message.content);
    } catch (err) {
      setResponse("Failed to fetch suggestions.");
    }
    setLoading(false);
  };

  return (
    <Box p={6} shadow="md" bg="white" rounded="lg" mt={8}>
      <Heading size="md" mb={4}>Career Suggestion Advisor</Heading>
      <VStack spacing={4}>
        <Textarea
          placeholder="Describe your skills, interests, degree..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleCareerSuggest} isLoading={loading}>
          Get Suggestions
        </Button>
        {response && <Text whiteSpace="pre-wrap">{response}</Text>}
      </VStack>
    </Box>
  );
};

export default CareerAdvisor;
