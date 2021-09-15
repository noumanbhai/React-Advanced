import React, { useState } from 'react';


const UseStateObject = () => {
  const [Person, setPerson] = useState({
   id: 1,
   name: 'Kamran' ,
   age:22,
   message:"This is a custom message"





  })
console.log(Person);
  const changeMessage=()=>{

setPerson({
   id: 2,
   name: 'Nouman' ,
   age:28,
   message:"This is Update message"
}
)
}
  return (<>
  <h1>useState object example</h1>
<h3>{Person.id}</h3>
<h3>{Person.name}</h3>
<h3>{Person.age}</h3>
<h3>{Person.message}</h3>
<button className='btn' onClick={changeMessage}>Change Message</button>
</>);
};

export default UseStateObject;
