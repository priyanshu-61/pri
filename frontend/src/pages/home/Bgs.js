import { Link } from "react-router-dom";

function Bgs() 
{
    return(
        <div className=" ">
                    <div className="relative" id="parallex2">
            <div className=" h-full w-full grid grid-cols-1 md:grid-cols-2  absolute content-center  ">
            <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
      
          <h1 className="font-primary font-extrabold text-white text-[30px] sm:text-[10px] md:text-[35px] md:leading-snug">
          What Are You Looking For? Get Started Now

          </h1>
      
          <div className="space-y-8 py-4">
           
            <p className="font-secondary text-white text-base md:text-[20px] lg:text-[20px]">
            There are many variations of passages of Lorem Ipsum but the majority have suffered in some form.


            </p>
            <Link to="login"> <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 w-40 px-4 border-4 border-white hover:border-transparent">
  Button
</button> </Link>
            
          </div>
       
      </div>
            </div>
        <div className="bg-fixed bg-no-repeat bg-cover  h-[500px]" style={{'backgroundImage': 'url(A4.jpg)'}}></div>
        </div>

        </div>
    )
    
}
export default Bgs;