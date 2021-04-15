import logo from './logo.svg';
import './index.css';
import {motion} from 'framer-motion'

function Temptations() {
  return (
      <div>
    <motion.div 
    initial={{opacity: 0, x: 300}} 
    animate={{opacity: 1, x: 0}} 
    transition={{duration: 1}} >

<motion.img  animate={{ opacity: 1 }}
   initial={{opacity: 0}}
      transition={{ duration: 1}}
      whileHover={{ scale: 1.2 }}
      height='300'
      width='300'
            className='foodpic'

      src='https://www.atwoods.com/media/catalog/product/cache/1e64df74cdc3e937b9d983cdd6a7869a/h/t/httpwww.atwoodsoutdoors.comimagespet65604404.png'/>
    </motion.div>
    <div className='info'>
        <div className='container'>

    <h2>AKA:</h2>
    <p>"Rug Flowers"</p>
    <h3>Favorite Flavor: </h3>
    <p>Surfer's Delight</p>
    <h3>Schedule:</h3>
    <p>🐈 12pm</p>
    <p>🐈 11:30pm</p>
    </div>
    </div>
    </div>
   
  );
}

export default Temptations;