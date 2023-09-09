import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {motion} from "framer-motion"
import { useNavigate } from "react-router-dom";
import {navlinks} from "../utils/Links"

const NavBarItem = ({ title,link, classprops }) => {
   const navigate=useNavigate()
 return (
  <li onClick={()=>navigate(`/${link}`)}  style={{ position: "relative" }} className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
)};

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between p-4 items-center">
      <div className=" md:flex-[0.5] flex-initial justify-center items-center">
        <p className=" flex flex-row gap-2 text-[20px] " >Enzo rosada <span className=" text-[12px] " >architect</span> </p>
      </div>

      <motion.ul
       initial={{ x: 100,opacity:0 }}  
       animate={{ x: 0,opacity:1 }} 
       exit={{ x: -100 }}     
       transition={{duration:2}} 
      
      className=" text-black md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {navlinks.map((item, index) => (
          <NavBarItem key={index} title={item.title} link={item.link} />
        ))}
        <li style={{ position: "relative" }} className=" font-bold py-2 px-7 mx-4 rounded-full cursor-pointer ">
          En
        </li>
      </motion.ul>
      <div className="flex relative">
        {toggle ? (
          ""
          // <AiOutlineClose
          //   fontSize={28}
          //   className="text-black md:hidden cursor-pointer "
          //   onClick={()=>setToggle(false)}
          // />
        ) : (
          <HiMenuAlt4
          fontSize={28}
            className="text-black md:hidden cursor-pointer "
            onClick={()=>setToggle(true)}
          />
        )}
        { toggle && (
          <ul className=" animate-slideright z-[100] bg-black bg-opacity-40 fixed top-0 -right-2 p-3 w-[60vw] h-screen shadow-2xl md:hidden list-none
           flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in" >
            <li className=" text-xl w-full my-2" >
              <AiOutlineClose onClick={()=>setToggle(false)} />
            </li>
            {navlinks.map((item, index) => (
          <NavBarItem key={index} title={item.title} link={item.link} classprops="my-2 text-lg" />
        ))}
          </ul>
        )

        }
      </div>
    </nav>
  );
}

export default Navbar;
