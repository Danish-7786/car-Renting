"use client"
import SearchManufacturer from './SearchManufacturer'
import {useState} from "react"
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const SearchButton=({otherClasses}: {otherClasses:string}) => (
  <button type="submit" className={`-ml-0 z-40 ${otherClasses}`} >
<Image
src="./magnifying-glass.svg"
alt="search"
width={40}
height={40}
className='object-contain'
/>
  </button>
)
const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [model,setModel] =useState('')
    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>)=> {
      // default behaviour of the browser is to refresh once we submitted the form but we are in react and we dont need that
      e.preventDefault()
      if(manufacturer === '' && model === ''){
        return alert('Please fill in the search bar')

      }
      updateSearchParams(model.toLowerCase(),manufacturer.toLowerCase())

    }
    const updateSearchParams = (model:string,manufacturer :string)=>{
// if something was there we would have known

      const searchParams = new URLSearchParams(window.location.search)
      if(model){
        searchParams.set('model',model)
      }
      else{
        searchParams.delete('model')

      }
      if(manufacturer){
        searchParams.set('manufacturer',manufacturer)
      }
      else{
        searchParams.delete('manufacturer')
      }
      const newPathName = `${window.location.pathname}?${searchParams.toString()}`
      router.push(newPathName)


    }

  return (
<form action="" className='flex flex-col sm:flex-row gap-2 md:gap-0 ' onSubmit={handleSearch}>
  <div className='relative flex w-[90vw] md:w-[40vh]' >
    <SearchManufacturer
    manufacturer = {manufacturer}
    setManufacturer = {setManufacturer} />
    <SearchButton otherClasses="sm:hidden hello"/>
  </div>
  <div className='relative w-[90vw]'>
    <Image
    src = "/model-icon.png"
    width={25}
    height={25}
    className='absolute w-[20px] h-[20px] top-6 left-3'
    alt='car-model'
    />
    <input
    type='text'
    name='model'
    value={model}
    onChange={(e)=> setModel(e.target.value)}
    placeholder='Tiguan'
     className='outline-none rounded-full w-[87%] md:w-[20rem] px-9 md:rounded-e-full py-3 bg-neutral-100'/>
     <SearchButton otherClasses='sm:hidden'/>
  </div>
     <SearchButton otherClasses='max-sm:hidden'/>
</form>
  )
}

export default SearchBar