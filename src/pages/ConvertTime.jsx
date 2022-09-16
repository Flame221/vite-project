import React from 'react'
import { Button, Container, Heading, HStack, Select, Text, VStack } from '@chakra-ui/react'
import convert from 'convert';
import { ConvertKmMiles } from '../components/ConvertKmMiles';

const distance = ['miles', 'km']

export const ConvertTime = () => {


  return (
    <VStack p={10} shadow='md'>
        <Heading m={1}>Distance Converter</Heading>
        <ConvertKmMiles/>
    </VStack>
  )
}
