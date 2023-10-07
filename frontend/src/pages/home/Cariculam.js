import React from "react";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const showAvailableCourse = () => {
  let available_course = document.getElementById("available_course");
  if (available_course.style.height == "0px") {
    available_course.style.height = "100%";
  } else {
    available_course.style.height = "0px";
  }
};

export default function Curriculum() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const[show,setShow]=useState(false)

  return (
    <>
      <div className="bg-gray-200 h-full overflow-auto pt-8">
        <div
          class="bg-cover bg-center backdrop-blur-sm  text-white py-20 px-10 "
          style={{
            "background-image":
              "url(https://wallpapercave.com/wp/wp3105538.jpg)",
          }}
        >
          <div class="md:w-1/2 -mt-6 text-left  py-5 lg:ml-9 ml-0 ">
            <p class=" font-bold text-2xl uppercase -mt-4">
              Full Stack Web Development Prime Pack 2023
            </p>
            <p class=" font-bold">
              A complete package to become a Full-Stack Web Developer
            </p>
            <div className="pr-4 mt-2">
              <ul className=" list-item">
                <li className="mt-1 text-sm">Tutorialspoint</li>
                <li className="mt-1 text-sm"> Language - English</li>
                <li className="mt-1 text-sm"> Updated on May, 2023</li>
                <li className=" mt-1 text-sm">
                  Development, Web Development, HTML, CSS, Javascript
                </li>
                <li>★★★★★</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-full">
          <div className="grid lg:grid-cols-3 grid-cols-1 w-full justify-center gap-3 ">
            <div className=" col-span-2 text-left flex justify-center">
              <div className="  text-white w-full lg:w-[50rem]  mt-4 rounded-t-lg ">
                <h1 className=" rounded-t-lg bg-slate-400 text-lg font-bold py-2 px-2">
                  Course Description
                </h1>
                <div className="  py-2 px-4 bg-white rounded-b-lg">
                  <h1 className="text-black  text-lg font-bold">
                    About the Prime Pack:
                  </h1>
                  <p className="text-black font-medium">
                    The Prime Pack is created specifically for learning and
                    developing in-demand website-building skills. You will get a
                    solid foundation for front-end and back-end web development,
                    as well as server-side architecture. The intensive prime
                    pack provides you with a comprehensive set of website
                    development abilities, including real-time projects and a
                    hands-on approach.
                  </p>
                  <div>
                    <h1 className="text-black text-lg font-bold mt-3">
                      The Future of Web Development:
                    </h1>
                    <ol className="px-6 text-black">
                      <li className="text-black font-medium text-sm">
                        <p>
                          According to Indeed, the average full-stack
                          developer's income is $108 million per year.
                        </p>
                      </li>
                      <li className="text-black font-medium text-sm">
                        <p>
                          According to the US Bureau of Labor Statistics, there
                          will be 8.53 million available full-stack developer
                          jobs by 2024.
                        </p>
                      </li>
                      <li className="text-black font-medium text-sm">
                        <p>
                          The average job satisfaction rating in full stack
                          development is 4 out of 5 because they are versatile
                          and have experience on both sides.
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="h-auto bg-white">
                  <button
                    className=" items-center p-2 duration-700 rounded-lg dark:text-black"
                    onClick={()=>setShow(!show)}
                  >
                    view more...
                  </button>
                  {show && <div
                    id="available_course"
                    className=" text-[12px] overflow-hidden text-black duration-500"
                  >
                    <h1 className="text-black text-lg font-bold mt-3 px-4">
                      Why should you get this prime pack?
                    </h1>
                    <ul className="text-black px-8">
                      <li className="text-black font-medium text-sm">
                        <p>
                          We have designed the guide to get you started with
                          HTML, CSS, and JavaScript, Angular and Vue.
                        </p>
                      </li>
                      <li className="text-black font-medium text-sm">
                        <p>
                          You will also learn the fundamentals of popular
                          JavaScript language working with its elements, and
                          easy styling with DOM manipulation.
                        </p>
                      </li>
                      <li className="text-black font-medium text-sm">
                        <p>
                          You will learn Angular coding fundamentals with
                          Syntax, used to make JavaScript easy for website
                          development.
                        </p>
                      </li>
                      <li className="text-black font-medium text-sm">
                        <p>
                          Similarly, you will learn how to build the project in
                          Node JS, React and MongoDB.
                        </p>
                      </li>
                      <li className="text-black font-medium text-sm">
                        <p>
                          Once you're familiar with the fundamental concepts,
                          learn about Git and GitHub version control, which are
                          used to track work and explore changes made to data,
                          code scripts, and notes.
                        </p>
                      </li>
                      <li className="text-black font-medium text-sm">
                        <p>
                          Get hands-on experience with MongoDB from the
                          beginning to the end, including querying, connecting
                          to, saving, and analyzing data.
                        </p>
                      </li>
                    </ul>
                    <div className="mt-2">
                      <h1 className="text-lg text-black font-bold ml-5">
                        Goals
                      </h1>
                      <ul className="px-8">
                        <li className="text-black font-medium text-sm">
                          <p>
                            You will also learn the fundamentals of popular
                            JavaScript language working with its elements, and
                            easy styling with DOM manipulation.
                          </p>
                        </li>
                        <li className="text-black font-medium text-sm">
                          <p>
                            You will learn Angular coding fundamentals with
                            Syntax, used to make JavaScript easy for website
                            development.
                          </p>
                        </li>
                        <li className="text-black font-medium text-sm">
                          <p>
                            Similarly, you will learn how to build the project
                            in Node JS, React and MongoDB.
                          </p>
                        </li>
                        <li className="text-black font-medium text-sm">
                          <p>
                            Once you're familiar with the fundamental concepts,
                            learn about Git and GitHub version control, which
                            are used to track work and explore changes made to
                            data, code scripts, and notes.
                          </p>
                        </li>
                        <li className="text-black font-medium text-sm">
                          <p>
                            Get hands-on experience with MongoDB from the
                            beginning to the end, including querying, connecting
                            to, saving, and analyzing data.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>}
                </div>
                <div className="  bg-white w-full lg:w-[50rem] mt-14 rounded-t-lg ">
                  <h1 className="rounded-t-lg bg-slate-400 text-lg font-bold py-2 px-2">
                    Currinculam
                  </h1>

                  <div className="py-6">
                    <div
                      className="m-8 border-2 hover  :border-black flex px-5"
                      onClick={() => handleOpen(1)}
                    >
                      <Accordion open={open === 1}>
                        <AccordionHeader className="text-black font-bold">
                          HTML/CSS/JavaScript Course for Mordern Web Developer
                          <button>
                        <h1 className="text-black text-4xl">+</h1>
                      </button>
                        </AccordionHeader>
                        <AccordionBody className="px-4">
                          <div class="p-1 ">
                            <div className=" grid grid-cols-2  border-2 border-red-700 w-full p-2">
                              <h1>video</h1>
                              <h1 className="float-right">
                                <button>View</button> 02.56
                              </h1>
                            </div>
                          </div>
                        </AccordionBody>
                      </Accordion>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="  z-50 lg:-mt-48   flex justify-center">
              <div className="block lg:fixed w-96">
                <div
                  id="whoobe-3fery"
                  class="w-full md:w-96 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col p-6"
                >
                  <img
                    src="https://res.cloudinary.com/moodgiver/image/upload/v1633344243/adventure_woman_rujic1.webp"
                    alt="img"
                    title="img"
                    class="w-full h-auto object-cover rounded-t-lg"
                    id="whoobe-ixxe5"
                  />
                  <div
                    id="whoobe-1okdg"
                    class="w-full p-4  justify-start flex flex-col"
                  >
                    <h4 class="border-b-2 text-3xl" id="whoobe-3mr7n">
                      Info Card
                    </h4>
                    <p class="my-4" id="whoobe-950fw">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ac tortor dignissim convallis aenean. Imperdiet
                      massa tincidunt nunc pulvinar.
                    </p>
                    <button
                      value="button"
                      class="my-4 px-4 py-2 text-white hover:bg-blue-700 bg-blue-500"
                      id="whoobe-jkkr2"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className="py-6">
                    <div
                      className="m-8 border-2 hover  :border-black flex px-5"
                      onClick={() => handleOpen(1)}
                    >
                      <Accordion open={open === 1}>
                        <AccordionHeader className="text-black font-bold">
                          HTML/CSS/JavaScript Course for Mordern Web Developer
                        </AccordionHeader>
                        <AccordionBody className="px-4">
                          <div class="p-1 ">
                            <div className=" grid grid-cols-2  border-2 border-red-700 w-full p-2">
                              <h1>video</h1>
                              <h1 className="float-right">
                                <button>View</button> 02.56
                              </h1>
                            </div>
                          </div>
                        </AccordionBody>
                      </Accordion>
                      <button>
                        <h1 className="text-black text-4xl">+</h1>
                      </button>
                    </div>
                  </div> */}
            </div>
          </div>
        </div>
      </div>
          
    </>
  );
}
