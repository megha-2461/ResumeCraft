import React, { useContext } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
  Flex,
  chakra,
  VStack,
} from '@chakra-ui/react';
import Introduction from '../../Components/Intro/Introduction';
import ResumeContext from '../../Context/ResumeContext';
import BuilderArea from '../BuilderArea';
import Theme1 from '../../Theme/Theme1/Theme1';
import Theme2 from '../../Theme/Theme2/Theme2';
import Theme3 from '../../Theme/Theme3/Theme3';
import ErrorPage from '../Error/ErrorPage';
import CareerAdvisor from '../../Components/CareerAdvisor/CareerAdvisor';


const Home = () => {
  const { currentTheme, showComponent, themeData, componentRef } = useContext(ResumeContext);

  const bg = useColorModeValue('gray.50', 'gray.900');
  const sectionBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.700', 'gray.100');
  const subTextColor = useColorModeValue('gray.600', 'gray.400');

  const getThemeComponent = () => {
    switch (currentTheme) {
      case 'Theme1':
        return <Theme1 componentRef={componentRef} themeData={themeData} />;
      case 'Theme2':
        return <Theme2 componentRef={componentRef} themeData={themeData} />;
      case 'Theme3':
        return <Theme3 componentRef={componentRef} themeData={themeData} />;
      case 'Theme4':
        return <ErrorPage />;
      default:
        return <ErrorPage />;
    }
  };

  return (
    <Box bgGradient="linear(to-br, purple.50, blue.100)" minH="100vh" py={10}>
      <Container maxW="6xl">
        {!showComponent ? (
          <Box
            bg={sectionBg}
            rounded="xl"
            shadow="lg"
            px={{ base: 4, md: 10 }}
            py={{ base: 8, md: 12 }}
            transition="all 0.3s"
          >
            <VStack spacing={4} textAlign="center" mb={10}>
              <Heading fontSize="4xl" color={headingColor}>
                Build Your Dream Resume
              </Heading>
              <Text fontSize="md" color={subTextColor} maxW="2xl">
                Customize professional resume templates with ease. Choose a theme, enter your
                details, and download your resume instantly!
              </Text>
            </VStack>
            <Introduction />
          </Box>
        ) : (
          <Box
            bg={sectionBg}
            rounded="xl"
            shadow="xl"
            px={{ base: 4, md: 10 }}
            py={{ base: 6, md: 10 }}
            mt={4}
            transition="all 0.3s"
          >
            <Flex direction="column" align="center" justify="center">
    {getThemeComponent() && (
      <>
        <BuilderArea theme={getThemeComponent()} />
        <CareerAdvisor /> 
      </>
    )}
  </Flex>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Home;
