import React, { useState } from 'react'

import {
  Container,
  Avatar,
  Heading,
  Text,
  VStack,
  Stack,
  Link,
  IconButton,
  Divider,
  Flex,
  Box,
  Center,
  keyframes
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaGithub, FaDev, FaLinkedin, FaQuora, FaTwitter } from 'react-icons/fa';

import { motion } from 'framer-motion';

const animationKeyframes = keyframes`
  0% { transform: rotate(10deg); transform-origin: top ; }
  50% { transform: rotate(-10deg); transform-origin: top ; }
  100% { transform: rotate(10deg); transform-origin: top ; }
`;

const animation = `${animationKeyframes} 3s ease-in-out infinite`;
  

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const accounts = [
  {
    url: 'https://github.com/Flame221',
    label: 'Github Account',
    type: 'gray',
    icon: <FaGithub />
  },
  {
    url: 'https://twitter.com/',
    label: 'Twitter Account',
    type: 'twitter',
    icon: <FaTwitter />
  },
  {
    url: 'https://dev.to/m_ahmad',
    label: 'Dev Account',
    type: 'gray',
    icon: <FaDev />
  },
  {
    url: 'https://linkedin.com/in/muhammad-ahmad20',
    label: 'LinkedIn Account',
    type: 'linkedin',
    icon: <FaLinkedin />
  },
  {
    url: 'https://www.quora.com/profile/Muhammad-Ahmad-66',
    label: 'Quora Account',
    type: 'red',
    icon: <FaQuora />
  }
];



export const Home = () => {

  const clickHandler = () => {
    console.log(1 + true);
  }


  return (
    
    <Container maxW="7xl" p={{ base: 5, md: 10 }} mx="auto" >
      <Center >
      <VStack         as={motion.div}
        animation={animation} bg={'gray.200'} borderRadius='15px' spacing={4} p={10} alignItems={{ base: 'center', sm: 'flex-start' }}>
          <Stack justifyContent="center" alignItems="center">
            <Avatar
              boxShadow="xl"
              size="xl"
              src="https://avatars2.githubusercontent.com/u/37842853?v=4"
            />
            <Text fontSize="sm">Dmytro Chornyi</Text>
          </Stack>
          <Heading
            textAlign={{ base: 'center', sm: 'left' }}
            margin="0 auto"
            width={{ base: '23rem', sm: 'auto' }}
            fontSize={{ base: '2.5rem', sm: '3rem' }}
          >
            Front-end
            <br /> Developer
          </Heading>
          <Text textAlign="center">Passionate about Tech. Lover of web and opensource.</Text>
          <Divider />
          <Flex alignItems="center" justify="center" w="100%">
            <Box textAlign="center">
              {accounts.map((sc, index) => (
                <IconButton
                  key={index}
                  as={Link}
                  isExternal
                  href={sc.url}
                  aria-label={sc.label}
                  colorScheme={sc.type}
                  rounded="full"
                  icon={sc.icon}
                  {...iconProps}
                />
              ))}
            </Box>
          </Flex>
        </VStack>
      </Center>
    </Container>
  )
}
