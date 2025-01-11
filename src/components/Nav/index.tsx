import {FC} from 'react'
import NextLink from 'next/link'

type linkType = {
  links: {href: string; label: string}[]
}

const Nav: FC<linkType> = ({links}) => {
  return (
    <nav className='flex items-center'>
      <ul className='flex flex-row space-x-10 '>
        {links.map((l, i) => {
          return (
            <li key={i}>
              <NextLink href={l.href}>{l.label}</NextLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
