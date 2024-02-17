import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='hero'>
        {/* left side */}
        <div className='pt-36 padding-x flex-1 '>
   
            
            <h1 className='hero__title'>Find,book, rent a car - quick and super easy!</h1>
            <p className='hero__subtitle'>Streamline your car rental experience with our effortless booking process</p>
            
            <CustomButton 
            title={'Explore Now'}
            containerStyles={'bg-primary-blue text-primary-blue-100 mt-8 rounded-full'} />
            </div>

            {/* right side  */}
            <div className='hero__image-container' >
    <div className="hero__image">

        
          {/* <img src="./hero.png"  className="z-10 h-60 lg:h-[27rem] lg:mt-40" alt="" /> */}
          <Image src ="/hero.png" alt ="hero" fill className='object-contain' />

          {/* <img src="./hero-bg.png" className='absolute rotate-3 -z-10 -top-8 h-60 -right-16 lg:h-[55rem] lg:left-80 lg:-top-60' alt="" /> */}
    </div>
       <div className="hero__image-overlay"/>
    </div>
    </div>
  )
}

export default Hero