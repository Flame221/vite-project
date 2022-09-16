import { Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import useToggle from '../hooks/useToggle';

const Element = () => {
  return (
    <Container
      bg='gray.100'
      p={5} 
      borderRadius={17}
      transition='all 0.1s ease-in-out'
      >
      <Heading h={20}>Hello world</Heading>
      <Button colorScheme='teal' variant='solid'>Click me</Button>
    </Container>
  )
}


export const Component = () => {
  const [ toggle, setToggle ] = useToggle();

  return (
    <>
    <Container
      bg={toggle ? 'gray.50' : 'gray.100'} 
      p={5} 
      borderRadius={17} 
      boxShadow={toggle ? "lg" : "none" }
      transition='all 0.1s ease-in-out'
      >
      <Heading h={20} >{ toggle ? 'Hello' : 'Bye' } world</Heading>
      <Button colorScheme='teal' variant={toggle ? 'solid' : 'outline'} onClick={setToggle}>Click me</Button>
    </Container>
    </>
  )
}
