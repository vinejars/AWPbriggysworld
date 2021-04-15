import logo from './logo.svg';
import './index.css';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion';

function FavoriteFoods() {
  return (
    <div className="fave-foods">
   <Link to='/treats/fancyfeast'><motion.img  animate={{ rotate: 360 }}
      transition={{ duration: 2 }}
      height='300'
      width='300'
      src='https://i5.walmartimages.com/asr/739eb9b9-1014-4473-9482-2c31dd8af470_2.a1421edb3a448139c02a3e8ab07fa1f7.png'/> </Link>
    <Link to='/treats/tempatations'><motion.img  animate={{ rotate: 360 }}
      transition={{ duration: 2 }}
      height='300'
      width='300'
      src='https://www.atwoods.com/media/catalog/product/cache/1e64df74cdc3e937b9d983cdd6a7869a/h/t/httpwww.atwoodsoutdoors.comimagespet65604404.png'/></Link>
    </div>
  );
}

export default FavoriteFoods;
