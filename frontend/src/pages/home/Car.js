import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import {Link} from "react-router-dom";
const Car = () => {

    const scrollLeft = () => {
        document.getElementById("imgs").scrollLeft -= 440;
    };
    const scrollRight = () => {
        document.getElementById("imgs").scrollLeft += 440;
    };

    return (
        <>
            <div className=" place-items-center bg-[#040239] mt-10 py-10">
                <Link to="/all_course">
                <h1 className="py-3 font-semibold text-2xl text-slate-300 uppercase hover:shadow-slate-300 text-center">Growing learning </h1>
                <div id="imgs" className=" md:flex overflow-x-auto scroll-smooth scrollbar-hide content-center ml-0 md:ml-16 w-[90%] h-auto p-0 md:p-4 gap-10  "> 
                <div className="bg-[#040239]   items-center py-2 flex gap-20">
   {/* _________________________front________________________________________ */}
      
         
            <div >
            <div className=" w-72 h-96 mb-5 bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
              <div className="relative">
                <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww&w=1000&q=80" alt="Colors" />
              
              </div>

              <h1 className="mt-4 text-gray-800 text-[15px] font-bold cursor-pointer">we devlopment </h1>
              <div className="my-1">
                <div className="flex space-x-2 text-[12px] items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <p>Cybrom</p>
                </div>
                <div className="flex space-x-1 text-[12px] items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </span>
                  <p>html</p>
                </div>
                <div className="flex item-center mt-2">
                  <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                </div>
                <Link >
                  <button className=" text-[18px] mt-2 h-8 w-full text-white bg-indigo-600  items-center rounded-xl shadow-lg"><Link to="/login">View Lession</Link></button></Link>
              </div>
            </div>

          </div>
       {/* _______________________________________front1______________________________ */}
                
       <div >
            <div className=" w-72 h-96 mb-5 bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
              <div className="relative">
                <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww&w=1000&q=80" alt="Colors" />
              
              </div>

              <h1 className="mt-4 text-gray-800 text-[15px] font-bold cursor-pointer">we devlopment </h1>
              <div className="my-1">
                <div className="flex space-x-2 text-[12px] items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <p>Cybrom</p>
                </div>
                <div className="flex space-x-1 text-[12px] items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </span>
                  <p>html</p>
                </div>
                <div className="flex item-center mt-2">
                  <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                </div>
                <Link >
                  <button className=" text-[18px] mt-2 h-8 w-full text-white bg-indigo-600  items-center rounded-xl shadow-lg"><Link to="/login">View Lession</Link></button></Link>
              </div>
            </div>

          </div>
          {/* _____________________________front12______________________________________ */}
                   
          <div >
            <div className=" w-72 h-96 mb-5 bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
              <div className="relative">
                <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww&w=1000&q=80" alt="Colors" />
              
              </div>

              <h1 className="mt-4 text-gray-800 text-[15px] font-bold cursor-pointer">we devlopment </h1>
              <div className="my-1">
                <div className="flex space-x-2 text-[12px] items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <p>Cybrom</p>
                </div>
                <div className="flex space-x-1 text-[12px] items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </span>
                  <p>html</p>
                </div>
                <div className="flex item-center mt-2">
                  <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                </div>
                <Link >
                  <button className=" text-[18px] mt-2 h-8 w-full text-white bg-indigo-600  items-center rounded-xl shadow-lg"><Link to="/login">View Lession</Link></button></Link>
              </div>
            </div>

          </div>
          {/* _____________________________________front3_________________________________________ */}
                   
          <div >
            <div className=" w-72 h-96 mb-5 bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
              <div className="relative">
                <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww&w=1000&q=80" alt="Colors" />
              
              </div>

              <h1 className="mt-4 text-gray-800 text-[15px] font-bold cursor-pointer">we devlopment </h1>
              <div className="my-1">
                <div className="flex space-x-2 text-[12px] items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <p>Cybrom</p>
                </div>
                <div className="flex space-x-1 text-[12px] items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </span>
                  <p>html</p>
                </div>
                <div className="flex item-center mt-2">
                  <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                </div>
                <Link >
                  <button className=" text-[18px] mt-2 h-8 w-full text-white bg-indigo-600  items-center rounded-xl shadow-lg"><Link to="/login">View Lession</Link></button></Link>
              </div>
            </div>

          </div>
               {/* _____________________________________front4_________________________________________ */}
        
          <div >
            <div className=" w-72 h-96 mb-5 bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
              <div className="relative">
                <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww&w=1000&q=80" alt="Colors" />
              
              </div>

              <h1 className="mt-4 text-gray-800 text-[15px] font-bold cursor-pointer">we devlopment </h1>
              <div className="my-1">
                <div className="flex space-x-2 text-[12px] items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <p>Cybrom</p>
                </div>
                <div className="flex space-x-1 text-[12px] items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </span>
                  <p>html</p>
                </div>
                <div className="flex item-center mt-2">
                  <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                </div>
                <Link >
                  <button className=" text-[18px] mt-2 h-8 w-full text-white bg-indigo-600  items-center rounded-xl shadow-lg"><Link to="/login">View Lession</Link></button></Link>
              </div>
            </div>

          </div>
               {/* _____________________________________front5_________________________________________ */}
        
      </div>
               
                </div>
                </Link>
            </div>
            <div className=" text-3xl text-center bg-[#040239] py-8">
                <button onClick={scrollLeft} className="p-2 m-2  bg-white rounded-full" >
                    <FiChevronLeft />
                </button>
                <button onClick={scrollRight} className="p-2 m-2  bg-white rounded-full"  >
                    <FiChevronRight />
                </button>

            </div>
        </>
    );
}
export default Car;