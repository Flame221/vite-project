import { Button, Input, Text, VStack } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { Component } from '../components/Component'
import { noCase } from "no-case";

export const SecondFunction = () => {
  const [ answer, setAnswer ] = useState('');

  const inpRef = useRef(null);

  const handleClick = () => {
    setAnswer(noCase(inpRef.current.value));
  }
  
  return (
    <VStack h={'100vh'} bg={'gray.100'} p={10} spacing={{ base: 3, md: 4 }} alignItems='center'>
      <Component/>
      <Input ref={inpRef} placeholder='string' />
      <Button onClick={handleClick}>Okey</Button>
      <Text>{answer}</Text>
    </VStack>
  )
}
