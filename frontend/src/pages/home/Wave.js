import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CompassCalibrationIcon from '@mui/icons-material/CompassCalibration';
import ComputerIcon from '@mui/icons-material/Computer';
export default function Wave() {
  return (
    <>
      <div className=" md:h-[42.8rem] ">
        <div className="w-full">
          <h1 className="text-center my-11 text-4xl font-bold
         ">why Choose Us </h1>
          <div className="h-24  z-2  ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ff5500"
                fillOpacity="0.8"
                d="M0,288L60,288C120,288,240,288,360,266.7C480,245,600,203,720,176C840,149,960,139,1080,149.3C1200,160,1320,192,1380,208L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              ></path>
            </svg>
          </div>

          <div className=" block md:flex md:justify-center justify-end p-6">
            <div className=" z-10 w-80 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]">
              <ul className="md:p-5 p-2 ">
                <li className="mt-6 "><SchoolIcon className="text-gray-900   " /> <span className="mx-2"> 2000 Yearly Graduates</span> </li>
                <li className="mt-6"><AccountBalanceIcon /><span className="mx-2">Relation between management and student</span> </li>
                <li className="mt-6"><CompassCalibrationIcon /><span className="mx-2">Top Professionals in The World</span></li>
                <li className="mt-6"><ComputerIcon /><span className="mx-2">Best Online Teaching Assistant Course </span></li>
                <li className="mt-6"><SchoolIcon /><span className="mx-2">Best Teachers </span> </li>
              </ul>
            </div>
            <div>

              <img
                className="md:h-96 z-5 h-64 md:mt-12 mt-0 "
                src="https://preview.colorlib.com/theme/oneschool/images/person_transparent.png"
                alt=""
              />
            </div>
          </div>
          <div className="z-10 md:h-24 h-64">
            <svg
              className="relative md:-mt-64  mt-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#0099ff"
                fillOpacity="0.8"
                d="M0,320L34.3,272C68.6,224,137,128,206,101.3C274.3,75,343,117,411,154.7C480,192,549,224,617,234.7C685.7,245,754,235,823,229.3C891.4,224,960,224,1029,197.3C1097.1,171,1166,117,1234,90.7C1302.9,64,1371,64,1406,64L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
