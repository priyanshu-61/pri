import React from 'react'

export default function AddLecture() {
  return (
    <>
    <div className=' mt-5  '>
    <form className='p-5 mx-auto w-96 border border-heading rounded-3xl grid place-content-center shadow-xl text-darkblue'>
        <select >
          <option>Select Category</option>
          <option>Category 1</option>
          <option>Category 2</option>
        </select>
        <select>
            <option>Select Course</option>               
            <option>Course 1</option>
            <option>Course 2</option>
          </select>
        <select>
            <option>Select Lesson</option>               
            <option>Lesson 1</option>
            <option>Lesson 2</option>
        </select>
      <br/>
      <h1 className='text-center'>Add Lectures</h1>
      <input type='text ' placeholder=' Title' className='border-b-[1px] border-darkblue'></input><br/>
      <input type='text ' placeholder=' Video Src' className='border-b-[1px] border-darkblue'></input><br/>
      <textarea type='text ' placeholder=' Description' className='border-b-[1px] border-darkblue'></textarea><br/>
      <button className='bg-darkblue text-heading w-20 rounded-xl mx-auto'>Save</button>
    </form>    
  </div>  
    </>
  )
}
