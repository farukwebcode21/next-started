import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-gray-200 p-4'>
      <nav className='container'>
        <ul className='flex gap-4'>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/about/team'}>Team</Link>
          </li>
          <li>
            <Link href={'/contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
