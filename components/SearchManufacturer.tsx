"use client"
import { manufacturersprops } from '@/Types'
import {Combobox, Transition} from "@headlessui/react"

import Image from 'next/image'
import React, { useState ,Fragment} from 'react'
import { manufacturers } from '@/constants'
const SearchManufacturer = ({manufacturer,setManufacturer}:manufacturersprops) => {
   
    const [query, setQuery] = useState('');
    
    const filteredManufacturers = 
    query === ""?manufacturers:
    manufacturers.filter((item)=> (

      // removing empty spaces from manufacurer list
      item.toLowerCase().replace(/\s+/g,"")
      // /\s => empty space
      //  /g is for global so we are basically replacing empty space with empty string
      // var str = '  A B  C   D EF ';
      // console.log(str.replace(/\s/g, '#'));  // ##A#B##C###D#EF#
      // console.log(str.replace(/\s+/g, '#')); // #A#B#C#D#EF#
      .includes(query.toLowerCase().replace(/\s+/g,""))
      //removing empty spaces from the query or the user types and turning it into the lowercase
    ))
  return (
   <div >
    <Combobox value={manufacturer} onChange={setManufacturer}>
        {/* <Combobox.Input onChange={(event) => setQuery(event.target.value)}/> */}
        <div className='relative w-[90vw] '>
          <Combobox.Button className="absolute top-[14px] -left-1">
            <Image src="/car-logo.svg"
            width={20}
            height={20}
            className ="ml-4"
            alt="car-logo"
             />

          </Combobox.Button>
          <Combobox.Input 
          className='px-9  w-[87%] py-3 bg-gray-100 outline-none text-gray-600 rounded-full md:rounded-l-full md:w-[25rem]'
          placeholder = "Volkswagen"
          displayValue={(manufacturer:string)=> manufacturer}
          onChange={(e)=> {setQuery(e.target.value); 
          console.log(e.target.value);}}/>

          <Transition as ={Fragment} 
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          afterLeave={() => setQuery('')}>
    <Combobox.Options>
      {/* {filteredManufacturers.length === 0 && query !== "" ?(
        <Combobox.Option
        value = {query}
        className="">

        Create "{query}"
        </Combobox.Option>
      ):( */}
      {filteredManufacturers.map((item)=> (
        <Combobox.Option
        key = {item}
        className = {({active}) => `relative 
        ${active ? 'bg-primary-blue text-white' :'text-gray-900'}` }
        value ={item}>
         {item}
        </Combobox.Option>
      ))
}

    </Combobox.Options>
          </Transition>
        </div>
    </Combobox>
   </div>
  )
}

export default SearchManufacturer