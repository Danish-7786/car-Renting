"use client"
import { carprops } from '@/Types'
import React, { useState } from 'react'
import { calculateCarRent } from '@/utils'
import CustomButton from './CustomButton'
import CarDialogBox from './CarDialogBox';
import { generateCarImgUrl } from '@/utils'
interface carCardProps{
    car:carprops
}

const CarCard = ({car}:carCardProps) => {
  const [Open,setOpen] = useState(false)
  function openModal(){
  setOpen(true)
  }
  function closeModal(){
    setOpen(false)
  }
    // destructuring the car component
    const {city_mpg,year,make,model ,transmission,drive} = car;

  return (
    <div className='relative shadow-lg bg-primary-blue-100 p-4 h-[22rem] rounded-lg group'>
      <h2 className='capitalize font-bold text-2xl'>{make} {model}</h2>
      <div className='relative'>

      <span className='text-sm font-medium text-gray-800 absolute'>$</span>
      <span className='ml-[8px] text-3xl font-bold'>{calculateCarRent(city_mpg,year)}</span>
      <span className="text-sm absolute top-4 text-gray-800">/day</span>
      </div>

      <div className='flex w-full py-2 justify-center' >
        <img src={generateCarImgUrl(car)} alt="car-png" className='h-40'/>
      </div>


      <div className="flex px-6 py-4 group-hover:hidden justify-between">
      <div className='flex w-fit flex-col gap-2 justify-center'>
        <img src="./steering-wheel.svg" alt="steering" className='h-5' />
        <p className='text-xs'>{transmission === 'a'?'Automatic':'Manual' }</p>
      </div>
      <div className='flex w-fit flex-col gap-2 justify-center'>
        <img src="./tire.svg" alt="tire" className='h-5' />
        <p className='text-xs'>
          {drive.toUpperCase()}
        </p>
      </div> 

      <div className='flex w-fit flex-col gap-2 justify-center'>
        <img src="./gas.svg" alt="gas" className='h-5' />
        <p className='text-xs'>{city_mpg} MPG</p>
      </div>
      </div>
      <div className="relative hidden group-hover:flex">
        
      <div className='my-4 h-[50px]  w-[100%] justify-between p-4 items-center bg-primary-blue text-white flex rounded-full'>
        <CustomButton
        title ='View More'
      containerStyles='text-white'
      handleClick = {openModal}
        
        />

       <img src="right-arrow.svg" className='h-6' alt="" />
      </div>
        </div>
        <CarDialogBox isOpen={Open}
        car={car}
        closetheModal={closeModal}/>
    </div>
  )
}

export default CarCard