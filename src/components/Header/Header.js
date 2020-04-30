import React from 'react'

import './Header.scss'
import logo from '../../logo.svg'

export default () => {
  return (
    <header className='app-header bg-primary'>
      <div className='container'>
        <nav className="navbar bg-primary">
          <span className="navbar-brand mb-0 h1 text-white">
            <span className='app-header__logo'>
              <img src={logo} alt=""/>
            </span>
            React Cards Game
          </span>
        </nav>
      </div>
    </header>
  )
}
