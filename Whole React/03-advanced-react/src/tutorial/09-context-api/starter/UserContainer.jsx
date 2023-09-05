import React, { useContext } from 'react'
import { NavbarContext } from './Navbar'

const UserContainer = () => {
    const {user,logout}=useContext(NavbarContext)
  return (
    <div className='user-container'>
        {user?(<>
            <p>Hey {user?.name?.toUpperCase()}</p>
            <button className='btn' onClick={logout}>logout</button>
        </>):(
            <p>PLease Login</p>
        )
    }   
      
    </div>
  )
}

export default UserContainer
