/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

const SingleProfile = async (props:any) => {
   
    const user = await props.params;
    console.log(user)
  return (
   
    <div>
        <span>Dynamic User Names</span>
        <h1> User Name is:{user.username} </h1>
     </div>
   
  )
}

export default SingleProfile