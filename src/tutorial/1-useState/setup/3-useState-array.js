import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people,setPeople]=React.useState(data)
  return(<div>

{
  people.map((person)=>{
    const {id,name}=person;
return( 
<div key={id} className='item'>
  <h3>{id}={name}</h3>
  </div>
  );
  })}
  <button className='btn' onClick={()=> setPeople([])}>
    Clear Item
  </button>
</div>
  );
  };
  
  // <h2>useState array example</h2>;


export default UseStateArray;
