import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { DeleteIcon } from '@chakra-ui/icons';
import ResumeContext from '../../Context/ResumeContext';
import ThemeTemplateData from '../../db/ThemeTemplateData';
import homeLogo from '../../Assets/home-logo.png';

export default function Introduction() {
  const { selectBtn, setSelectBtn, setCurrentTheme, setShowComponent } = useContext(ResumeContext);
  const [templates, setTemplates] = useState(ThemeTemplateData);
  const [newTemplate, setNewTemplate] = useState({ id: '', imageSrc: '', imageAlt: '' });

  const headingColor = useColorModeValue('gray.800', 'white');
  const subTextColor = useColorModeValue('gray.600', 'gray.300');
  const cardBg = useColorModeValue('white', 'gray.800');
  const bgGradient = useColorModeValue(
    'linear(to-tr, teal.100, pink.100, blue.50)',
    'linear(to-br, gray.800, gray.700)'
  );

  const handleSelectTemplate = () => setSelectBtn(false);

  const showTheme = (e) => {
    setCurrentTheme(e.target.id);
    setShowComponent(true);
  };

  const handleAddTemplate = () => {
    if (!newTemplate.id || !newTemplate.imageSrc) return;
    setTemplates([...templates, newTemplate]);
    setNewTemplate({ id: '', imageSrc: '', imageAlt: '' });
  };

  const handleDeleteTemplate = (id) => {
    setTemplates(templates.filter((t) => t.id !== id));
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Helmet>
        <title>Resume Builder - Create Your Resume in Minutes</title>
        <meta name="description" content="Build your professional resume in minutes using our easy-to-use online resume builder." />
      </Helmet>

      <Box bgGradient={bgGradient} minH="100vh" py={{ base: 10, md: 16 }}>
        <Container maxW="7xl">
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
            <Stack maxW="2xl" spacing={6} textAlign={{ base: 'center', md: 'left' }}>
              <Heading fontSize={{ base: '3xl', md: '5xl' }} color={headingColor}>
                {selectBtn ? (
                  <>
                    Create your resume in{' '}
                    <Text as="span" color="teal.400">3 simple steps</Text>
                  </>
                ) : (
                  <>
                    Choose a <Text as="span" color="blue.400">template</Text> to get started
                  </>
                )}
              </Heading>

              {selectBtn && (
                <>
                  <Text color={subTextColor}>
                    Our tool makes resume creation fast and easy. Pick a template, fill your details, and download your resume in minutes.
                  </Text>

                  <VStack align="start" spacing={4}>
                    {['Select a template.', 'Build your resume.', 'Download your PDF.'].map((text, i) => (
                      <Flex align="center" key={i}>
                        <Button size="sm" colorScheme="pink" mr={3}>{i + 1}</Button>
                        <Text>{text}</Text>
                      </Flex>
                    ))}
                  </VStack>
                </>
              )}
            </Stack>

            {selectBtn && (
              <Stack spacing={4} mt={{ base: 10, md: 0 }} align="center">
                <Image src={homeLogo} alt="home logo" boxSize={isMobile ? '250px' : '300px'} />
                <Button
                  colorScheme="blue"
                  rounded="full"
                  px={8}
                  size="lg"
                  onClick={handleSelectTemplate}
                  bg="blue.400"
                  _hover={{ bg: 'blue.500' }}
                >
                  Select Template
                </Button>
              </Stack>
            )}
          </Flex>

          {!selectBtn && (
            <Box mt={12}>
              <Heading fontSize="2xl" mb={6} color={headingColor}>
                Available Templates
              </Heading>

              <Flex wrap="wrap" gap={6}>
                {templates.map((item, index) => (
                  <Box
                    key={index}
                    position="relative"
                    bg={cardBg}
                    p={4}
                    rounded="md"
                    shadow="lg"
                    w={{ base: '100%', sm: '48%', md: '30%' }}
                    _hover={{ transform: 'scale(1.02)', transition: '0.3s' }}
                  >
                    <Image
                      id={item.id}
                      src={item.imageSrc}
                      alt={item.imageAlt || `Template ${item.id}`}
                      cursor="pointer"
                      onClick={showTheme}
                      borderRadius="md"
                    />
                    <IconButton
                      icon={<DeleteIcon />}
                      colorScheme="red"
                      size="sm"
                      position="absolute"
                      top={2}
                      right={2}
                      onClick={() => handleDeleteTemplate(item.id)}
                      aria-label="Delete template"
                    />
                  </Box>
                ))}
              </Flex>

              <Box mt={10}>
                <Heading fontSize="lg" mb={4} color={headingColor}>
                  Add New Template
                </Heading>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                  <Input
                    placeholder="Template ID"
                    value={newTemplate.id}
                    onChange={(e) => setNewTemplate({ ...newTemplate, id: e.target.value })}
                  />
                  <Input
                    placeholder="Image URL"
                    value={newTemplate.imageSrc}
                    onChange={(e) => setNewTemplate({ ...newTemplate, imageSrc: e.target.value })}
                  />
                  <Button colorScheme="teal" onClick={handleAddTemplate} minW="120px">
                    Add Template
                  </Button>
                </Stack>
              </Box>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
}
