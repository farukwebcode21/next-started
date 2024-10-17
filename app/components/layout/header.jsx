import Link from 'next/link'
import React from 'react'
import NavLink from '../ui/NavLink'

const Header = () => {
  return (
    <header className='bg-gray-200 p-4'>
      <nav className='container'>
        <ul className='flex gap-4'>
          <li>
            <NavLink href={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink href={'/about'}>About</NavLink>
          </li>
          <li>
            <NavLink href={'/about/team'}>Team</NavLink>
          </li>
          <li>
            <NavLink href={'/contact'}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
