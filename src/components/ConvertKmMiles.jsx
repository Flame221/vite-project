import { Button, Container, Flex, HStack, IconButton, Input, Text } from '@chakra-ui/react'
import convert from 'convert';
import React, { useState } from 'react'
import { CgArrowsExchangeAltV } from 'react-icons/cg';

export const ConvertKmMiles = () => {
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');

  const clearHandler = () => {
    setValue('');
    setValue1('');
  }

  const handleConvert = () => {
    setValue1(convert(+value, 'kilometers').to('miles'))
  }

  return (
    <Container textAlign='center' p={5} bg={'gray.100'} borderRadius={10} shadow='md'>
      <HStack>
        <Container>
          <HStack gap={2} m={2}>
            <Text w='50px'>From: </Text>
            <Input onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }} onChange={e => setValue(e.target.value)} value={value} variant='outlined' w='200px' />
            <Text>kilometers </Text>
          </HStack>
          <HStack gap={2} m={2}>
            <Text w='50px'>To: </Text>
            <Input onChange={e => setValue1(e.target.value)} value={value1} variant='outlined' w='200px' />
            <Text>miles </Text>
          </HStack>
        </Container>
        <IconButton colorScheme='teal'variant={'solid'} icon={<CgArrowsExchangeAltV size='30px'/>}/>
      </HStack>
      <Flex ml='30px'>
        <Button onClick={handleConvert} colorScheme='teal' variant='solid' m={2} p={5}>Convert</Button>
        <Button onClick={clearHandler} colorScheme='teal' variant='outline' m={2} p={5}>Clear</Button>
      </Flex>
    </Container>
  )
}
