import React,{useState} from 'react'
import arch from "../assets/arch.jpg"
import arch2 from "../assets/arch2.jpg"
import {motion} from "framer-motion"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import linkedin from "../assets/linkedin.svg"
import { useNavigate } from 'react-router-dom'
import { fadeIn } from '../utils/motion'
import SectionWrapper from "../hoc/SectionWrapper";


const Item=({title,image,index})=>{
  const navigate=useNavigate()
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} > 
     <motion.div 
           
      animate={{ y:[20,0,20],x:[20,0,20]
               }}
        transition={{duration:5,repeat:Infinity}}
     onClick={()=>navigate("/projet/1")}          
    onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    className='flex justify-center items-center  relative ' >
      <img style={{boxShadow: "0 0 7px rgba(0,0,0,0.5)"}} src={image} alt="" className=' hover:cursor-pointer h-[500px] w-[400px] hover:opacity-50 object-cover ' />
      {showTooltip && (
        <motion.div 
        initial={{ x: 100,opacity:0 }}  
        animate={{ x: 0,opacity:1 }} 
        exit={{ x: -100 }}     
        transition={{duration:0.2}} 
        className=' absolute z-10 hover:cursor-pointer opacity-100 text-[20px] top-[49%] p-2 text-black rounded'>
          {title}
        </motion.div>
      )}

    </motion.div>

    </motion.div>
   
  )
}

const Home = () => {
  return (
    <div className=' px-16 grid grid-cols-1 sm:grid-cols-2 py-10' >
      <div className=' flex flex-col justify-center items-center gap-44   ' >
      <Item title="yahia azdazdaz" image={arch} index={1} />
      <Item title="the carte of adaz" image={arch} index={3} />
      </div>
      
     <div  className=' pt-44 flex flex-col justify-center items-center gap-44 ' >
     <Item title="the beach on the bridge" image={arch2} index={2} />
      <Item title="the quartier riche" image={arch2} index={4} />
     </div>

     <div className=' fixed bottom-4 left-4 flex flex-col gap-4 justify-center items-center  ' >
       <img src={facebook} alt="" className=' cursor-pointer hover:scale-110 transition duration-200 '  />
       <img src={twitter} alt="" className=' cursor-pointer hover:scale-110 transition duration-200 '  />
       <img src={linkedin} alt="" className=' cursor-pointer hover:scale-110 transition duration-200 ' />

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

export default  SectionWrapper(Home,"") 