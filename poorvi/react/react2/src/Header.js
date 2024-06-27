import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
<>
<NavLink to = '/'>HOME</NavLink>
<NavLink to = '/about'>ABOUT</NavLink>
<NavLink to = '/contact'>CONTACT</NavLink>
</>
  )
}

export default Header