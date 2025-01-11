import React from 'react'
import Heading from '../Heading'
import Link from '../Link'
import Image from 'next/image'

interface CardProps {
  title: string
  link: string
  variant: 'green' | 'gray' | 'dark'
  image: string
  titleVariant:"green" | "white" | "dark"
}

function Card({title,link,variant,image,titleVariant}:CardProps) {
    const variants:any= {
        green:"bg-green",
        gray:"bg-gray",
        dark:"bg-dark"
    }

  return (
    <div className={`w-[600px] h-[300px] rounded-[45px] border border-dark` + variants[variant]}>
        <div className='p-3 flex items-center justify-between'>
            <div className='flex flex-col items-center justify-between'>
                <Heading label={title} variant={titleVariant} />
                <Link label='Learn more' link={link} variant={variant === "dark"?"white":"green"} />
            </div>
            <Image src={image} alt="image" width={200} height={200} />
        </div>
    </div>
  )
}

export default Card