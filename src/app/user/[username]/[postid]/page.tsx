import React from 'react'

const UserPost = async (props) => {
    const userpostID = await props.params
    console.log(userpostID)
  return (
    <div>User post ID is: {userpostID.postid}</div>
  )
}

export default UserPost