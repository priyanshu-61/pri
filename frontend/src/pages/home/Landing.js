import React from 'react';
import Lorem from './Lorem';
import Car from './Car';
import Blog from './Blog';
import Team from './Team';
import Bgs from './Bgs';
import Top from './Top';
import Bg from './Bg';
import Wave from './Wave';
import Footer from '../../components/Footer';

export default function Landing() {
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch();
  // },[dispatch] )
  return (
    <div>
      <Lorem />
      <Car />
      <Blog />
      <Team />
      <Bgs />
      <Top />
      <Bg />
      <Wave />
      <Footer />

    </div>
  )
}
