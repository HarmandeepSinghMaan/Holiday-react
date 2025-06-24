import React, { useContext } from 'react'
import UserContext from '../context/context'
function Profile() {
  const {user} = useContext(UserContext)
   if(!user) return <div>Pleas Login First</div>
  return (
    <div>
      Welcom {user.username}
    </div>
  )
}

export default Profile
