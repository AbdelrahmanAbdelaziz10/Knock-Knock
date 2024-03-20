import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ScreenSlider from './ScreenSlider'
import './screen.css'
const MainScreen = () => {
  return (
    <div className='screen'>
    <h2 className='text-center'>Application Screens</h2>
    <Container >
    <ScreenSlider />
    </Container>
    </div>
  )
}

export default MainScreen