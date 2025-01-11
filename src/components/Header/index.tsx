import React from 'react'
import {FC} from 'react'
import Button from '../Button'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../Nav'
import {headerNav} from '@/utils/nav/headerNav'
// Heading component
const Header: FC = () => {
  return (
    <div className='flex justify-between'>
      <div className='logo'>
        <Link href='/'>
          <Image
            src='/image/frame_9.svg'
            width={219.54}
            height={56}
            alt='Logo'
          />
        </Link>
      </div>
      <Nav links={headerNav} />
      <Button label='Request a quote' variant='secondary' />
    </div>
  )
}

export default Header
