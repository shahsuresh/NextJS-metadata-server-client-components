import React,{useState} from 'react'

const Counter = () => {
    const [counter,setCounter] = useState(0)
  return ( 
    <>
    <button className='p-2 border' onClick={()=>setCounter((prev)=>(prev+1) ) }> Add-{counter} </button>
    
    </>
  )
   
}

export default Counter