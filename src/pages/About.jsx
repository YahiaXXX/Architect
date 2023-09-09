import React from 'react'
import Details from '../components/Details'
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import {motion} from "framer-motion"

const About = () => {
  return (
    <div className="h-full flex justify-center items-center min-h-screen " >
         

        
       <Details/>
        
      <div className=" fixed z-20 bottom-4 left-4 flex flex-col gap-4 justify-center items-center  ">
        <img
          src={facebook}
          alt=""
          className=" cursor-pointer hover:scale-110 transition duration-200 "
        />
        <img
          src={twitter}
          alt=""
          className=" cursor-pointer hover:scale-110 transition duration-200 "
        />
        <img
          src={linkedin}
          alt=""
          className=" cursor-pointer hover:scale-110 transition duration-200 "
        />
      </div>

      <div className=' fixed bottom-4 right-4 flex flex-col gap-4 justify-center items-center  ' >
      <p className=' text-slate-500 font-semibold ' >3, place aux Huiles</p>
      <p className=' text-slate-500 font-semibold '>13001 Marseille, France</p>
      <p className=' text-slate-500 font-semibold '>+33 4 91 44 69 84</p>
      <a style={{position:'relative'}} className=' hover:scale-110 transition duration-300 ' href="mailto:example@gmail.com">example@gmail.com</a>

     </div>

    </div>
  )
}

export default About