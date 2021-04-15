import logo from './logo.svg';
import './index.css';
import {motion} from 'framer-motion'

function App() {
  return (
    <motion.div 
    initial={{opacity: 0, x: 300}} 
    animate={{opacity: 1, x: 0}} 
    transition={{duration: 1}} 
    className="App">

   <img src='http://www.image.farm/images/2021/03/31/fa453a5fb0e5b1f1f44aa8094be12056.png'  className='brigpic'/>
    
    </motion.div>
  );
}

export default App;
