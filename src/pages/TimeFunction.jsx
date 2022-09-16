import { Button, Container, Flex, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import useToggle from '../hooks/useToggle';
import { MdOutlineContentCopy } from 'react-icons/md'
import { motion, useMotionValue, useTransform } from 'framer-motion';

function formatDuration (seconds) {
  // initializing variables
  let minutes = 0;
  let hours = 0;
  let days = 0;
  let years = 0;
  let arr = []; // for making result string some later
  // using while loop calculate duration
  while (seconds >= 60) {
    minutes ++;
    seconds -= 60;
  }
  while (minutes >= 60) {
    hours ++;
    minutes -= 60;
  }
  while (hours >= 24) {
    days ++;
    hours -= 24;
  }
  while (days >= 365) {
    years ++;
    days -= 365;
  }
  // make object and loop through the elements to make an array of duration
  const time = {
    years: years,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }
  for (const [key, value] of Object.entries(time)){
    if (value) {
      value == 1 ? arr.push(`${value} ${key.slice(0, -1)}`) : arr.push(`${value} ${key}`)
    }
  }
  // switch case allows return proper result
  switch (arr.length) {
    case 0:
      return 'now'
    case 1:
      return arr[0]
    default:
      return arr.reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ' and ') + value)
  }
}

export const TimeFunction = () => {
  const [ isCopied, setIsCopied ] = useState(false);
  const [ value, setValue ] = useState(''); 
  const [ res, setRes ] = useState('');
  const handleClick = () => {
     setRes(formatDuration(Number(value)))
  }

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
}

  return (
    <VStack onMouseMove={handleMouse} bg={'gray.100'} p={20}>
      <Heading as='h1' my={5} size='xl'
        bgGradient='linear(to-r, gray.700, teal.700)'
        bgClip='text'
      >Convert seconds to a string</Heading>
      <Container
      as={motion.div}
      
      rotateX={rotateX}
      rotateY={rotateY}
       borderRadius={10} bg={'white'} m={10} w={'30%'} shadow='md'>
        <Input mt={5} value={value} onChange={ e => {setValue(e.target.value); setIsCopied(false)} } placeholder='Seconds'/>
        <Flex my={5} flexDirection='row' justifyContent='space-between' spacing={10}>
          <Button colorScheme='teal' onClick={handleClick}>Make String</Button>
          <Text mx={2} w={200}>{res}</Text>
          { res ? <Button leftIcon={<MdOutlineContentCopy/>} variant={isCopied ? 'outline' : 'solid'} colorScheme='teal' onClick={() => {navigator.clipboard.writeText(res); setIsCopied(true)}}>{ isCopied ? 'Copied' : 'Copy' }</Button > : null}
        </Flex>
      </Container>
    </VStack>
  )
}
