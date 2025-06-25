import React from 'react'

const UserPost = async (props) => {
    const userpostID = await props.params
    console.log(userpostID)
  return (
    <div>
      <h1>User Name is: {userpostID.username}</h1>
      User post ID is: {userpostID.postid}
      </div>
  )
}

export default UserPost