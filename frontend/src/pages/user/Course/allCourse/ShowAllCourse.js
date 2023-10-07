import React from 'react'
import { UilShare } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'


export default function ShowAllCourse() {
  return (
    <>
    <div className='p-5'>
      <h1 className='text-2xl font-medium'>All Available Courses </h1>
      <p className='pb-5'>Here we have alot of different courses for you , So you can join our different programs and build your career in the desired domain </p>

      <div className='w-64 h-72  overflow-hidden border border-black rounded-xl'>
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXdub1xRPoFYM7op8N-ylpIOYw5eeHszO04q0bg7e1FEVLm136t169XMSw-Ljbq4f17M&usqp=CAU'}></img>
        <h1 className='py-2 text-center text-xl text-darkblue'>Title Here</h1>
        <hr className='w-56 mx-auto text-gray'/>
        <h1 className='text-gray'>
          <span>no. of lectures</span>
        </h1>
        <h1 className='text-xl text-orange/70 font-bold py-1'>Price</h1>
        <div className='flex justify-evenly text-darkblue'>
        <button className='col-span-2 w-32 rounded-xl border-b-2 border-darkblue '><Link to='/viewAllcourse'>View More</Link></button>
        <button className=' rounded-xl w-20 border-b-2 border-darkblue'><Link >Buy Now</Link></button>
        </div>
      </div>
    </div>
    
    </>
  )
}
