import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginScreen from './Screens/LoginScreen.jsx'
import RegisterScreen from './Screens/RegisterScreen.jsx'
import RewritePassword from './Screens/RewritePasswordScreen.jsx'
import ResetPassword from './Screens/ResetPasswordScreen.jsx'
import ProtectedRoute from './Components/ProtectedRoute.jsx'
import WorkspaceScreen from './Screens/WorkspaceScreen.jsx'
import ChannelScreen from './Screens/ChannelScreen.jsx'
import ChannelSelectScreen from './Screens/ChannelSlectScreen.jsx'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<RegisterScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/' element={<LoginScreen/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/rewrite-password' element={<RewritePassword />} />
          <Route path='/workspaces' element={<WorkspaceScreen />} />
          <Route path='/:workspace_id' element={<ChannelScreen />} />
          <Route path='/workspace/:workspace_id/channel/:channel_id' element={<ChannelSelectScreen />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
