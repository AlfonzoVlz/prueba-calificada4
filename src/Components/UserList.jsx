import React from 'react'
import { UserCard } from './UserCard'

export const UserList = ({data}) => {
  return (
    <div className='UseList'>
      {data.map(user =>(
        <UserCard key={user.id} user={user}/>
      ))}
    </div>
  )
}


