import React from 'react'
import {motion} from "framer-motion"
import SectionWrapper from "../hoc/SectionWrapper"
import { textVariant } from '../utils/motion'


const Details = () => {
  return (
    <motion.div className=" py-32 text-[30px] flex flex-col gap-6 w-full lg:px-32 md:px-16 px-8 ">
           
    <motion.p variants={textVariant()} className=" text-black " >
    The project consists of the refurbishment of a property in Évenos. The
  break between the vertiginous slope of the land and the elevation of
  the house by a base accentuates the overhang on the gorges of
  Ollioules. The homogenized building in its simple architectural
  apparatus assumes its coexistence with the site now perceived as a
  landscape, and fitted out with endemic plant species conducive to the
  invention of a sensitive park. The use of greiges tones or natural
  stones taken from regional quarries, raising awareness of the simple
  lines of the facades, ends up expressing a desire for architecture
  that the delicacy of the heritage treatment, far from upsetting,
  achieves by the asserted perpetuation of this vernacular residence.
  What was once an ammunition battery and a guarded sentry finally
  offers itself to the pleasures of its panoramic views.
    </motion.p>
    <motion.p variants={textVariant()} className=" text-black " >
    The project consists of the refurbishment of a property in Évenos. The
  break between the vertiginous slope of the land and the elevation of
  the house by a base accentuates the overhang on the gorges of
  Ollioules. The homogenized building in its simple architectural
  apparatus assumes its coexistence with the site now perceived as a
  landscape, and fitted out with endemic plant species conducive to the
  invention of a sensitive park. The use of greiges tones or natural
  stones taken from regional quarries, raising awareness of the simple
  lines of the facades, ends up expressing a desire for architecture
  that the delicacy of the heritage treatment, far from upsetting,
  achieves by the asserted perpetuation of this vernacular residence.
  What was once an ammunition battery and a guarded sentry finally
  offers itself to the pleasures of its panoramic views.
    </motion.p>
    <motion.p variants={textVariant()} className=" text-black " >
    The project consists of the refurbishment of a property in Évenos. The
  break between the vertiginous slope of the land and the elevation of
  the house by a base accentuates the overhang on the gorges of
  Ollioules. The homogenized building in its simple architectural
  apparatus assumes its coexistence with the site now perceived as a
  landscape, and fitted out with endemic plant species conducive to the
  invention of a sensitive park. The use of greiges tones or natural
  stones taken from regional quarries, raising awareness of the simple
  lines of the facades, ends up expressing a desire for architecture
  that the delicacy of the heritage treatment, far from upsetting,
  achieves by the asserted perpetuation of this vernacular residence.
  What was once an ammunition battery and a guarded sentry finally
  offers itself to the pleasures of its panoramic views.
    </motion.p>
 
</motion.div>
  )
}

export default SectionWrapper(Details,"")