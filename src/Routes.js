import React from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import App from './App'
import index from './index.css'
import FavoriteFoods from './FavoriteFoods'
import FancyFeast from './FancyFeast'
import Temptations from './Temptations'
import {motion} from 'framer-motion'

const Routes = () => {
  return (
      <div id='main-container'>
<motion.nav initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
<Link to='/home' className='nav-link'> Meet the Handsome Boi! </Link>
<Link to='/treats' className='nav-link'> See his Favorite Foods! </Link>
</motion.nav>
        <Switch>
        <Route exact path='/home' component={App}/>
        <Route exact path='/treats' component = {FavoriteFoods}/>
        <Route exact path='/treats/fancyfeast' component = {FancyFeast}/>
        <Route exact path='/treats/tempatations' component= {Temptations}/>
        </Switch>

      </div>
   
  );
};

export default Routes;
