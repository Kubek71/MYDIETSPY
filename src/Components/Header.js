import React, { useEffect, useRef, useState } from 'react'
import { StyledHeader } from './Styles/HeaderStyled'
import logo from "../logo.svg"
import { Link } from 'react-router-dom'
import { Box } from './Styles/Box'





export default function Header(props) {

  const headerOffsetHeight = useRef()
  useEffect(()=> {

    props.setHeaderHeight(headerOffsetHeight.current.clientHeight)
      // console.log(headerOffsetHeight.current.clientHeight)


  }, [headerOffsetHeight?.current?.clientHeight])
  return (
    <StyledHeader ref={headerOffsetHeight}>
        <Box className="logo-box">
            <Link to="/">
                <img src={logo}></img>
            </Link>
            
        </Box>
        
        <Box className="nav-box">
            <Link to="/Diary" className='nav-link'>Diary</Link>
            <Link to="/Recipes" className='nav-link'>Recipes</Link>
        </Box>
    </StyledHeader>
  )
}
