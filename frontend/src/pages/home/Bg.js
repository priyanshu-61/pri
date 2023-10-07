import { useState } from 'react'


function Bg() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <div className="bg-gradient-to-tr from-blue-900 to-purple-400 relative h-screen w-full  ">
      <div className='bg-fixed'>
      <img className="absolute inset-0 w-full h-full object-cover bg-cover mix-blend-multiply filter brightness-50"
        alt="main background image"
        src="https://i.pinimg.com/736x/f2/37/27/f237272b83bffd74131857f792f8d89b.jpg" />
        </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
        {subscribed ? (
          <h1 className="font-primary font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-snug">
            You have subscribed!
          </h1>
        ) : (
          <div className="space-y-8">
            <h1 className="font-primary font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight">
              Easily capture emails on
              <span className="text-palette-primary">
                Notion.
              </span>
            </h1>
            <p className="font-secondary text-white text-base md:text-lg lg:text-xl">
              Capture your customer emails on a beautiful landing page that syncs with your Notion workspace.
            </p>
            
          </div>
        )}
      </div>
    </div>
    
    
  )
}

export default Bg;