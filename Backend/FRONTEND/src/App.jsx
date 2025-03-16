import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginScreen from './Screens/LoginScreen.jsx'
import RegisterScreen from './Screens/RegisterScreen.jsx'
import RewritePassword from './Screens/RewritePasswordScreen.jsx'
import ResetPassword from './Screens/ResetPasswordScreen.jsx'
import ProtectedRoute from './Components/ProtectedRoute.jsx'
import WorkspaceScreen from './Screens/WorkspaceScreen.jsx'
import ChannelScreen from './Screens/ChannelScreen.jsx'
import CreateWorkspaceScreen from './Screens/CreateWorkspaces.jsx'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<RegisterScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/' element={<LoginScreen/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path='/reset-password' element={<ResetPassword/>}/>
          <Route path='/rewrite-password' element={<RewritePassword/>}/>
        </Route>
        <Route path='/workspaces' element={<WorkspaceScreen/>}/>
        <Route path='/create-workspaces' element={<CreateWorkspaceScreen/>}/>
        <Route path='/:workspace_id' element={<ChannelScreen/>}/>
      </Routes>
    </div>
  )
}

export default App
