/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

const ServerComponent = async () => {
    const URL:string= "https://jsonplaceholder.typicode.com/users";

    const res= await fetch(URL)
    const data = await res.json()
    console.log(data)
  return (
    <div className='center text-center'>{data.map((item:any,index:number)=>( <span key={index} className='flex gap-2 border-2 mb-2 w-1/2 items-center justify-center'> {item.name} , {item.email}</span> ))}</div>
  )
}

export default ServerComponent