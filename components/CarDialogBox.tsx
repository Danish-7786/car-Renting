"use client"
import React, { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { carprops } from '@/Types'
import Image from 'next/image'
import { generateCarImgUrl } from '@/utils'
interface CarDetailsProps {
  isOpen?: boolean;
  closetheModal?: () => void;
  car: carprops;
}
const CarDialogBox = ({ isOpen, closetheModal, car }: CarDetailsProps) => {
 

 
  const carProperty = Object.keys(car)
  
  return (

    < >

      <Transition appear show={isOpen} as={Fragment}>


        <Dialog as="div" className="relative z-10 flex flex-col " onClose={closetheModal} >

          {/* this transition child is for backdrop */}
          <Transition.Child as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>
          </Transition.Child>
          <div className="fixed inset-0 ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-80"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-80"
              >
                <Dialog.Panel className="relative bg-white max-h-[90vh] max-w-lg rounded-lg overflow-y-scroll">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 rounded-full bg-primary-blue-100"
                    onClick={closetheModal}>
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain" />
                  </button>
                  {/* Actual Content */}
                  <div className="flex-1 p-4 flex flex-col gap-3 rounded-lg ">
                    <div className="relative bg-pattern bg-cover rounded-lg items-center bg-center w-full">
                      <Image
                        src="/pattern.png"
                        width={350}
                        height={50}
                        alt="bg"
                        className='h-[10rem] w-[80rem] rounded-lg'
                      />
                      <Image src={generateCarImgUrl(car)}
                        width={200}
                        height={60}
                        alt="car"
                        className="absolute translate -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] f" />


                    </div>
                    <div className="flex gap-2">
                      <div className="carCardDiffAngle">

                        <Image src={generateCarImgUrl(car,'29')}
                          width={200}
                          height={60}
                          alt="car"
                          className="" />
                      </div>
                      <div className="carCardDiffAngle">

                        <Image src={generateCarImgUrl(car,'33')}
                          width={200}
                          height={60}
                          alt="car"
                          className=" " />
                      </div>
                      <div className="carCardDiffAngle">

                        <Image src={generateCarImgUrl(car,'13')}
                          width={200}
                          height={60}
                          alt="car"
                          className="" />
                      </div>



                    </div>
                    <div className='flex flex-col justify-start gap-4'>
                      <h1 className='text-start capitalize font-bold mb-2 text-2xl'>{car.make} {car.model}</h1>
                      {/* <h1>Hello</h1> */}
                      {carProperty.map((key) => (
                      // <h1>{car.make} {car.model}</h1>
                      <div className='flex justify-between'>
                      {/* <span>{key}:</span> */}
                       <span className='capitalize font-normal text-gray-500'>{key.replace("_"," ")}:</span>
                      <span className='font-[600]'>{car[`${key}`]}</span>
                      </div>
                      ))


                      }
                    </div>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>

        </Dialog>
      </Transition>

    </>
  )
}

export default CarDialogBox