import { Button, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Simple from './appbar/NavBar'
import { ConvertTime } from './pages/ConvertTime'
import { Home } from './pages/Home'
import { SecondFunction } from './pages/SecondFunction'
import { TimeFunction } from './pages/TimeFunction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Simple/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="timefunction" element={<TimeFunction />} />
        <Route path="secondfunction" element={<SecondFunction />} />
        <Route path="convertTime" element={<ConvertTime />} />
      </Routes>
    </>
  )
}

export default App
