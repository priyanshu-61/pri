import React, {useRef, useEffect} from 'react'

const MycourseVideo = ({videoId}) => {
    const videoRef = useRef(null)

    useEffect(()=>{
        if(videoRef.current){
            videoRef.current.pause()
            videoRef.current.removeAttribute('src')
            videoRef.current.load()
        }
    })
  return (
    <div className='flex justify-center pt-20 '>
    <video ref={videoRef} width='50%' height='50%' controls autoPlay>
        <source src="https://youtu.be/6l8RWV8D-Yo" ></source>
        Your browser does not support the video tag.
        {`http://localhost:3000/videos/${"https://drive.google.com/file/d/1DUh3fW_dCAjPCb3M_GnwuDOBlcgniRd1/view?usp=sharing"}`}
    </video>
    </div>
  )
}

export default MycourseVideo