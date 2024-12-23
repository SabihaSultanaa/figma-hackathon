import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  return (
    <> 
   <div className='w-full h-[800px] bg-[#FBEBB5] flex md:pl-[202px] xxs:pl-[20px] pr-[38px] gap-[7px]'>
        <div className='w-[440px] h-[276px]   pt-[300px] lg:text-[66px] xxs:text-[50px] font-semibold leading-[90px]'>Rocket single seater <div className=' leading-[60px] '> <Link href={'/shop'} className='  font-semibold text-[24px]'>
        Shop Now </Link>
        <div className='w-[120px] border-b-[3px] border-black'></div></div>
            
            </div>
        {/* <div className='w-[800] h-[800px] relative '> <Image src={'/sofa.png'} alt='hero'  objectFit='cover' layout='fill' /></div> */}
        <div className='xxs:hidden lg:inline-block'> <Image src={'/sofa.png'} alt='hero' width={800} height={800} /></div>
        
        
        </div></>
  )
}

export default Hero