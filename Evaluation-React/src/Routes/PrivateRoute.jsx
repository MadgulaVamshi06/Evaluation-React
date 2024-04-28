import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
const IsAuth = !!localStorage.getItem('authToken');

  return IsAuth ? children: <Navigate to='/login'/>
}

export default PrivateRoute