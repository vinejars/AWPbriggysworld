import logo from './logo.svg';
import './index.css';
import {motion} from 'framer-motion'

function FancyFeast() {
  return (
    <motion.div 
    initial={{opacity: 0, x: 300}} 
    animate={{opacity: 1, x: 0}} 
    transition={{duration: 1}} >

   <motion.img  animate={{ opacity: 1 }}
   initial={{opacity: 0}}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.2 }}
      height='300'
      width='300'
      className='foodpic'
      src='https://i5.walmartimages.com/asr/739eb9b9-1014-4473-9482-2c31dd8af470_2.a1421edb3a448139c02a3e8ab07fa1f7.png'/>    
    </motion.div>
  );
}

export default FancyFeast;