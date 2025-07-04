import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
  Button,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as ReachLink, useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext'; // 👈 import context

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, logout } = useContext(AuthContext); // 👈 access user & logout
  const navigate = useNavigate();

  const navBg = useColorModeValue('white', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const hoverBg = useColorModeValue('gray.100', 'gray.700');
  const hoverText = useColorModeValue('teal.700', 'teal.300');
  const brandColor = useColorModeValue('teal.600', 'teal.300');

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
  ];

  return (
    <Box bg={navBg} px={4} shadow="md" position="sticky" top={0} zIndex={10}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo & Title */}
        <ReachLink to="/">
          <Flex align="center">
            <img src={logo} alt="logo" style={{ height: '40px' }} />
            <Text ml={2} fontSize="xl" fontWeight="bold" color={brandColor}>
              ResumeCraft
            </Text>
          </Flex>
        </ReachLink>

        {/* Desktop Links */}
        <HStack spacing={5} display={{ base: 'none', md: 'flex' }} align="center">
          {navLinks.map((link) => (
            <ReachLink
              key={link.label}
              to={link.path}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                fontWeight: '500',
                color: textColor,
              }}
              onMouseEnter={(e) => {
                e.target.style.background = hoverBg;
                e.target.style.color = hoverText;
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = textColor;
              }}
            >
              {link.label}
            </ReachLink>
          ))}

          {/* Auth Button */}
          {user ? (
            <Button onClick={logout} colorScheme="teal" size="sm" variant="outline">
              Logout
            </Button>
          ) : (
            <Button
              onClick={() => navigate('/auth')}
              colorScheme="teal"
              size="sm"
              variant="outline"
            >
              Login / Signup
            </Button>
          )}

          <Button onClick={toggleColorMode} size="sm">
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>

        {/* Mobile Toggle */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Navigation"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Mobile Nav Links */}
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={3}>
            {navLinks.map((link) => (
              <ReachLink
                key={link.label}
                to={link.path}
                onClick={onClose}
                style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontWeight: '500',
                  color: textColor,
                }}
              >
                {link.label}
              </ReachLink>
            ))}

            {/* Auth Button */}
            {user ? (
              <Button onClick={logout} colorScheme="teal" size="sm">
                Logout
              </Button>
            ) : (
              <Button onClick={() => navigate('/auth')} colorScheme="teal" size="sm">
                Login / Signup
              </Button>
            )}

            <Button onClick={toggleColorMode} size="sm">
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
