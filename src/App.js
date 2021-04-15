import './index.css';
import {motion} from 'framer-motion'

function App() {

  return (
    <motion.div 
    initial={{opacity: 0, x: 300}} 
    animate={{opacity: 1, x: 0}} 
    transition={{duration: 1}} 
    className="App">

   <motion.img 
  drag
  dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
   src='http://www.image.farm/images/2021/04/15/f81bd1512f843b9c3546dec625ae5ba6.png'  
   className='brigpic'/>
    
    </motion.div>
  );
}

export default App;
