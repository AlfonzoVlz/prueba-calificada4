import React from 'react'

export const UserCard = ({user}) => {
    const image = `https://picsum.photos/200/300?id=${user.id}`

  return (
    <div className='userCard'>
      <img src={image} alt="" />
      <div className='informacion'>
        <h3>{user.name}</h3>
        <p>{user.username}</p>
        <p>{user.email}</p>
      </div>
    </div>
  )
}


