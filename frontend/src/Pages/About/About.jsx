import {
  Avatar,
  Box,
  Button,
  chakra,
  Flex,
  HStack,
  Input,
  SimpleGrid,
  Stack,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name: 'Ankit Arora',
      role: 'Full Stack Web Developer',
      content:
        'A resume builder website is a web-based tool that allows users to create and customize a professional resume to their desired specifications.',
      avatar: 'https://i.pravatar.cc/150?img=68',
    },
  ]);

  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    content: '',
    avatar: '',
  });

  // Color Mode Responsive Colors
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardText = useColorModeValue('gray.700', 'gray.200');
  const headingColor = useColorModeValue('gray.700', 'gray.50');
  const subTextColor = useColorModeValue('gray.500', 'gray.400');
  const boxBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('purple.100', 'purple.400');

  const handleAdd = () => {
    if (!newTestimonial.name || !newTestimonial.role || !newTestimonial.content) return;
    setTestimonials([...testimonials, newTestimonial]);
    setNewTestimonial({ name: '', role: '', content: '', avatar: '' });
  };

  const handleDelete = (index) => {
    const updated = [...testimonials];
    updated.splice(index, 1);
    setTestimonials(updated);
  };

  return (
    <>
      <Helmet>
        <title>About Us - Resume Builder</title>
        <meta name="description" content="Learn more about the Resume Builder website and its mission." />
      </Helmet>

      <Flex
        direction="column"
        align="center"
        p={8}
        bgGradient={useColorModeValue(
          'linear(to-br, blue.50, purple.100)',
          'linear(to-br, gray.800, gray.900)'
        )}
        minH="100vh"
      >
        <chakra.h3 fontSize="md" color="purple.400" textTransform="uppercase" fontWeight="bold">
          People love us
        </chakra.h3>

        <chakra.h1 fontSize="4xl" fontWeight="extrabold" mt={2} color={headingColor}>
          ResumeCraft Testimonials
        </chakra.h1>

        <chakra.p mt={4} mb={10} maxW="3xl" textAlign="center" fontSize="md" color={subTextColor}>
          Hear what our users have to say about their experience using our resume builder platform.
        </chakra.p>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {testimonials.map((t, index) => (
            <Flex
              key={index}
              p={6}
              rounded="xl"
              bg={cardBg}
              direction="column"
              boxShadow="md"
              maxW="sm"
              mx="auto"
              border="1px solid"
              borderColor={borderColor}
            >
              <Textarea
                value={t.content}
                isReadOnly
                resize="none"
                border="none"
                mb={4}
                fontSize="sm"
                color={cardText}
                bg="transparent"
              />
              <HStack justify="space-between">
                <Flex direction="column">
                  <chakra.p fontWeight="bold" color="purple.500">
                    {t.name}
                  </chakra.p>
                  <chakra.p fontSize="sm" color={subTextColor}>
                    {t.role}
                  </chakra.p>
                </Flex>
                <Avatar src={t.avatar} size="md" />
              </HStack>
              <Button
                mt={4}
                size="sm"
                variant="ghost"
                colorScheme="red"
                onClick={() => handleDelete(index)}
              >
                Delete
              </Button>
            </Flex>
          ))}
        </SimpleGrid>

        <Box
          mt={12}
          w="full"
          maxW="lg"
          bg={boxBg}
          p={6}
          rounded="lg"
          shadow="md"
          border="1px solid"
          borderColor={borderColor}
        >
          <chakra.h2 fontSize="xl" fontWeight="bold" mb={4} color={headingColor}>
            Add Testimonial
          </chakra.h2>
          <Stack spacing={3}>
            <Input
              placeholder="Name"
              value={newTestimonial.name}
              onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
            />
            <Input
              placeholder="Role"
              value={newTestimonial.role}
              onChange={(e) => setNewTestimonial({ ...newTestimonial, role: e.target.value })}
            />
            <Textarea
              placeholder="Testimonial Content"
              value={newTestimonial.content}
              onChange={(e) => setNewTestimonial({ ...newTestimonial, content: e.target.value })}
            />
            <Input
              placeholder="Avatar URL"
              value={newTestimonial.avatar}
              onChange={(e) => setNewTestimonial({ ...newTestimonial, avatar: e.target.value })}
            />
            <Button colorScheme="purple" onClick={handleAdd}>
              Add Testimonial
            </Button>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default About;
