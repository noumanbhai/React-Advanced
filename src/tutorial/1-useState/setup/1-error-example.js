import React,  {useState}  from 'react';


  let title='This is React cource';

const ErrorExample = () => {
const [txt, settxt] = useState(1);


const changeTitle= () =>{
// alert(title);
settxt(txt+1)
 
}


  return (
    <div>
  <h1>{txt}</h1>
  <button className='btn' onClick={changeTitle}>Change title</button>

  </div>)};

export default ErrorExample;
