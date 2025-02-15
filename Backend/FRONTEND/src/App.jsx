import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginScreen from './Screens/LoginScreen.jsx'
import RegisterScreen from './Screens/RegisterScreen.jsx'
import RewritePassword from './Screens/RewritePasswordScreen.jsx'
import ResetPassword from './Screens/ResetPasswordScreen.jsx'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/register' element={<RegisterScreen/>}/>
        <Route path='/' element={<LoginScreen/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/rewrite-password' element={<RewritePassword/>}/>
      </Routes>
    </div>
  )
}

export default App
