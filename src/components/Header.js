import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assests/img/logo.svg'

const Header = () => {
  return (
    <header className="main-header">
      <div className="main-logo">
        <Link to="/">
          <img alt="Prothom Alo" src={Logo} />
        </Link>
      </div>
    </header>
  )
}

export default Header
