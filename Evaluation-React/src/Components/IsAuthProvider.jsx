import React, { createContext, useState } from 'react'
const IsAuthContext = createContext();
const IsAuthProvider = ({children}) => {

  const[isLoggedIn,setIsLoggedIn] = useState(true)
  return (
   <IsAuthContext value={isLoggedIn}>
    {children}
   </IsAuthContext>
  )
}

export default IsAuthProvider



