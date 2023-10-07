import React from 'react'
import { UilEditAlt,UilTrashAlt,UilEye } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'


export default function ViewLecture() {
  return (
    <>
    <div className=' w-full  p-10 '>
    <table className=' w-full  '>
        <thead className='bg-darkblue text-heading '>
            <tr className='flex justify-between mx-10'>
                <td className=''>Sr no</td>
                <td className=''>Course Name</td>
                <td className=''>Total Lessons</td>
                <td className=''>Action</td>
            </tr>
        </thead>
        <tbody className=''>
            <tr className='flex justify-between mx-10 mr-2' >
                <td>01</td>
                <td>xyz</td>
                <td>xyz</td>
                <td className='flex gap-2'>
                  <button className='bg-gray text-white rounded-md text-[12px] px-1'><UilEditAlt/></button>
                  <button className='bg-gray text-white rounded-md text-[12px] px-1'><UilTrashAlt/></button>
                  <button className='bg-gray text-white rounded-md text-[12px] px-1'><Link to=''><UilEye/></Link></button>
                </td>
            </tr>      
        </tbody> 
      </table>
    </div>
      
    </>
  )
}
