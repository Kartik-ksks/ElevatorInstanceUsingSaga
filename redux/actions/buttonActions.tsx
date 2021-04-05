import {types} from '../actionTypes/types';

const lift = (e) => {
//const name = e.target.getAttribute('name');
return{
  type: types.ELEVATE,
   payload: types.name
 }
}

export{
  lift
}
