import React,{useState} from 'react'
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import Typewriter from "typewriter-effect";
import Footer from "./Footer"
import Team from '../pages/home/Team';

const AboutUs = () => {
  return (
    <>

    <div className=''>
        
        
      <div id="firstcontainer" className="py-10 grid grid-cols-1 md:grid-cols-2 bg-slate-300 h-auto md:h-[42rem] " >
        <div className="mt-20">
        
          <div className=" md:text-start text-center lg:w-[450px] w-full mt-10 ml-0 md:ml-5 lg:ml-24 ">
            <h1 className="md:text-[40px] text-4xl font-bold text-[#040239]">
              <Typewriter
                options={{
                  autoStart: true,
                  delay: 80,
                  loop: true,
                  strings: [
                    "Get in touch",
                  ],
                }}
              />
            </h1>
            <br />
            <p>
            Want to get in touch? We'd love to hear from you. Here's how you can reach us...
            </p>
            {/* <button className="border-2 animate-bounce border-blue-600 bg-blue-400 text-2xl mt-8 rounded-3xl p-2 text-gray-900 font-bold">
              For Know about it...
              <span className="text-#de5e18">
                <PhoneForwardedIcon />
              </span>
            </button> */}
            <button
              className="relative btn4 mt-12 px-10 py-5 border border-black uppercase text-blue-500 font-semibold tracking-wider leading-none overflow-hidden"
              type="button"
            >
              <span className="absolute inset-x-0 h-3 bottom-0 bg-blue-500"></span>
              For Know about it...
              <span className="text-#de5e18">
                <PhoneForwardedIcon />
              </span>
            </button>
            <div>

            </div>
          </div>

        </div>
        <div className="mt-10 w-full flex justify-end md:w-[30rem] lg:w-full  lg:ml-0 md:ml-10 pb-10">
        
          
          <img src="h2.jpg" className=" h-[35rem] mr-0 lg:mr-32 rounded-l-[50%] rounded-r-[20%]" alt="" />
        </div>

      </div>
     <div className='w-full md:block hidden md:-mt-64' >
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,32L60,69.3C120,107,240,181,360,213.3C480,245,600,235,720,202.7C840,171,960,117,1080,85.3C1200,53,1320,43,1380,37.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
     </div>
        </div>     
    
    {/* _____________________________________first_________________________________ */}

    <div className='grid md:grid-cols-2 grid-cols-1'>
      <div className=''>
        <div className='flex justify-center mt-20'>
<img src="h3.jpg" alt="" className='w-96 ' />
</div>
      </div>
    <div className=' p-14 '>
              

<p className=' p-5 text-xl'>At Cybrom Technology, we are committed to providing exceptional software training to students in Bhopal, Indore, and Gwalior. Our team of experienced trainers comes from diverse industry backgrounds and are passionate about sharing their knowledge with students.

We have two well-equipped institutes in Bhopal, located in the popular areas of MP Nagar and Indrapuri, making them easily accessible from all parts of the city. Our training centers are equipped with modern facilities, including spacious classrooms, well-equipped computer labs, and high-speed internet, ensuring that our students have a comfortable and conducive learning environment.

We understand that every student has unique learning needs and requirements, which is why we offer flexible training schedules that cater to their specific needs. Our training programs are designed to provide students with a strong foundation in software development and help them acquire the skills and knowledge required to succeed in the industry.
</p>
    </div>
    </div>
      <Team/>
      {/* _____________________________________first_________________________________ */}
      <div>
        <div className="text-3xl font-bold text-center mt-10">Our Vaules</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-center mt-10  ">
          <div className="  m-auto  ">
            <div className="w-80 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]  md:ml-10 lg:ml-32 ml-0 p-2 ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRioQJUMTBxwm1mrtxo7zMhRIw_Bj9STxntig&usqp=CAU"
                width="80%"
                className="m-auto"
                alt=""
              />
              <div className="bg-white    p-8 rounded-lg ">
                <h1 className="text-2xl font-bold mt-4 md:mt-10 ">mission</h1>
                <p>
                  We at Whiltor are committed to bring the best in our society
                  and to remove hesitation from our youth to start a new venture
                  of thier own due lack of knowledge of a technology or
                  resources. We are continously working to .
                </p>
              </div>
            </div>
          </div>
          <div className="  m-auto  my-20    ">
            <div className="w-80 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] p-2 ">
              <img
                src="https://img.freepik.com/free-vector/business-vision-concept-illustration_114360-7130.jpg?w=360"
                width="70%"
                className="m-auto"
                alt=""
              />

              <div className="bg-white    p-8 pt-0 rounded-lg ">
                <h1 className="text-2xl font-bold mt-4 md:mt-10 ">vision</h1>
                <p>
                  We at Whiltor are committed to bring the best in our society
                  and to remove hesitation from our youth to start a new venture
                  of thier own due lack of knowledge of a technology or
                  resources. We are continously working to .
                </p>
              </div>
            </div>
          </div>
          <div className="  m-auto md:flex ">
            <div className="w-80 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] justify-center  lg:-ml-32 md:ml-64  p-2 ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJyaq3rQHEesFi5VG28aM4_SFk7L_6p53WA&usqp=CAU"
                width="70%"
                className="m-auto"
                alt=""
              />
              <div className="bg-white    p-8 rounded-lg  ">
                <h1 className="text-2xl font-bold mt-4 md:mt-10 ">Goal</h1>
                <p>
                  We at Whiltor are committed to bring the best in our society
                  and to remove hesitation from our youth to start a new venture
                  of thier own due lack of                 resources. We are continously working to .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ____________________________________second____________________ */}
      <Footer/>
    </>
  )
}

export default AboutUs