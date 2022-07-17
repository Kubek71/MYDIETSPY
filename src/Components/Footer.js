import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from './Styles/Box'
import { FooterStyled } from './Styles/FooterStyled'
import { Text } from './Styles/Global'


export default function Footer() {
  return (
    <FooterStyled>
        <Box>
            <Link to="/Diary" className='nav-link'>Diary</Link>
            <Link to="/Recipes" className='nav-link'>Recipes</Link>
        </Box>
        <Text>&copy; Jakub Pala 2022 </Text>
    </FooterStyled>
  )
}
