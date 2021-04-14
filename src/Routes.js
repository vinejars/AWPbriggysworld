import React from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import App from './App'
import index from './index.css'
import FavoriteFoods from './FavoriteFoods'


const Routes = () => {
  return (
      <div id='main-container'>
<nav>
<Link to='/home' className='nav-link'> Meet the Handsome Boi! </Link>
<Link to='/treats' className='nav-link'> See his Favorite Foods! </Link>
</nav>
        <Switch>
        <Route exact path='/home' component={App}/>
        <Route exact path='/treats' component = {FavoriteFoods}/>
        </Switch>

      </div>
   
  );
};

export default Routes;
