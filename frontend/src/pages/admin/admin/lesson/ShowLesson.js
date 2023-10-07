import React from 'react'
import {  useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function ShowLesson() {
  const [open, setOpen] = useState(0);
  const handleOpen = (e) => {
    setOpen(open === e ? 0 : e);
  };
  return (
    <>
      <div className='p-1 border border-orange'>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} className='border' />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
           <h1>Lesson 1</h1>
          </AccordionHeader>
          <AccordionBody>
            <p>Lecture 1</p>
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );

}


function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }