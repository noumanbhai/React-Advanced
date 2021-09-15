import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people,setPeople]=React.useState(data)

const remove=(id)=>{

  let newPeople=people.filter((data)=>data.id !==id);
         setPeople(newPeople);
}

  return(<div>

{
  people.map((person)=>{
    const {id,name}=person;
    
return( 
<div key={id} className='item'>
  <h3>{id}={name}</h3>
    <button className='btn' onClick={()=>remove(id)}>
    Clear single Item
  </button>
  </div>
  );
  })}
  <button className='btn' onClick={()=>setPeople()}>
    Clear all Item
  </button>
</div>
  );
  };
  
  // <h2>useState array example</h2>;


export default UseStateArray;
