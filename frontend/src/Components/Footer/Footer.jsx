import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import logo from '../../Assets/logo123.webp';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('gray.200', 'whiteAlpha.100')}
      rounded={'full'}
      w={10}
      h={10}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'all 0.3s ease'}
      _hover={{
        transform: 'scale(1.1)',
        bg: useColorModeValue('gray.300', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.800')}
      color={useColorModeValue('gray.700', 'gray.200')}
      borderTop="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.700')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={6}
        direction={{ base: 'column', md: 'row' }}
        spacing={6}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction="row" align="center" spacing={2}>
          <Image src={logo} alt="logo" boxSize="40px" />
          <Text fontWeight="bold" fontSize="lg">ResumeCraft</Text>
        </Stack>

        <Text fontSize="sm">© 2025 ResumeCraft. All rights reserved.</Text>

        <Stack direction={'row'} spacing={4}>
          <SocialButton label={'Github'} href={'https://github.com/megha-2461'}>
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
