import {CustomFilter, Hero, SearchBar,CarCard} from '@/components'
import { fetchCars } from '@/utils';

import Image from 'next/image'

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year : searchParams.year || 2022,
    fuel : searchParams.fuel || '',
    limit: searchParams.Limit || 10,
    model : searchParams.model ||'',
   } );

  const  isDataEmpty = !Array.isArray(allCars) || allCars.length<1 || !allCars;
  //Arrays.isArray(allCars) => checking is getted answer is an array or not
   
    return (
    <main className="overflow-hidden">
      <Hero/>
      <div className='px-16 xl:px-28 mt-16 flex flex-col gap-4'>
      <div >
       <h1 className="text-4xl font-extrabold mb-4 ">Car catalogue</h1>
       <p className='text-gray-500'>Explore the cars you might like</p>
      </div>

      <div>

        <SearchBar/>
        
      </div>
      <div className='flex gap-4 text-gray-500'>
        <CustomFilter title='fuel'/>
        <CustomFilter title="year"/>
      </div>
      {!isDataEmpty ?
      <section className='grid gap-4 grid-col-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
        {allCars?.map((car) => (
          <CarCard car = {car}/>
        ))}
      </section>:
      <section>
        we dont have cars</section>}
      </div>
     

          </main>
  )
}
