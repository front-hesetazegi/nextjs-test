import React, {FC} from 'react'
import NextLink from 'next/link'
interface PropsTypes {
  variant: 'primary' | 'secondary' | 'tertiary'
  label: string | React.ReactNode
}

const Button: FC<PropsTypes> = ({label, variant}) => {
  const variants = {
    primary: 'bg-dark text-white border-none',
    secondary: 'text-black border-dark border',
    tertiary: 'bg-green text-black border-none',
  }

  return (
    <NextLink
      href='request-a-quote'
      className={`py-5 px-9 rounded-[14px] w-fit ${variants[variant]}`}
    >
      {label}
    </NextLink>
  )
}

export default Button
