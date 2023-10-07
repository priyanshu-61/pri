import React from 'react'

export default function Recentlyaccessedcourses() {
  return (
    <div>
       <div className=" container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className=" bg-white p-2 h-12 border-b-2 border-black">
        <h1>
          Recently accessed courses
        </h1>
      </div>
      <div className="bg-white h-12 md:border-b-2 border-black sm:border-b-2 border-black ">
      <div class="flex flex-row m-2 rounded-2xl justify-center ">
         <a class="rounded-full hover:bg-blue-500 font-medium m-2 hover:text-white shadow-lg border px-2 " href="#"><ion-icon name="arrow-back-circle-outline" class="text-lg"></ion-icon></a> <a class="rounded-full hover:bg-blue-500 font-medium m-2 hover:text-white shadow-lg border px-2 " href="#">1</a> <a class="rounded-full hover:bg-blue-500 font-medium m-2 hover:text-white shadow-lg border px-2 " href="#">2</a> <a class="rounded-full hover:bg-blue-500 font-medium m-2 hover:text-white shadow-lg border px-2 " href="#">3</a> <a class="rounded-full hover:bg-blue-500 font-medium m-2 hover:text-white shadow-lg border px-2 " href="#">..</a> <a class="rounded-full hover:bg-blue-500 font-medium m-2 hover:text-white shadow-lg border px-2 " href="#"><ion-icon name="arrow-forward-circle-outline" class="text-lg"></ion-icon></a> </div> <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script> <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script> 
          
        </div>
      <div className="">
        <div className="bg-white ml-4">
        <div class="bg-white p-4 rounded shadow">
          <p>Perfomance</p>
          <h2 class="text-lg font-bold mb-4">Grade/Progress</h2>
        </div>
        <div class="flex  py-8">



        </div>
      </div>
      
         </div>
    </div>
    </div>
    </div>
  )
}
