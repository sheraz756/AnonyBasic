import React from 'react'
import './App.css'
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import Authenticate from './pages/Authenticate/Authenticate'
import Room from './pages/Rooms/Room'
import Activate from './pages/Activate/Activate'
const isAuth = false;
const user={
  activated:false
}
const App = () => {
  return (
<Router>
  <NavBar />
  <Routes>
    <Route path='/' element={
      <GuestRoute>
        <Home />
      </GuestRoute>
    } />
    <Route path='/authenticate' element={<Authenticate />} />
    <Route path='/rooms' element={
      <Protected>
        <Room />
      </Protected>
    } />
    <Route path='/activate' element={
      <SemiProtected>
        <Activate />
      </SemiProtected>
    } />



  </Routes>
</Router>
  )
}
//check if user is login then redirect user to rooms otherwise home
const GuestRoute = ({children})=>{
  return isAuth ?(
    <Navigate to='/rooms' />
  ):(
    children
  )

}
//if user is not true then redirect him to home other check if isAuth true and not activated redirect to activate otherwise rooms
const SemiProtected = ({children})=>{
  return !isAuth ?(
    <Navigate to = '/' />
  ):isAuth && !user.activated ?(
    children
  ):
  (
    <Navigate to = '/rooms' />
  )
}

const Protected = ({children})=>{
  return !isAuth?(
    <Navigate to = '/' />
  ):isAuth && !user.activated ?(
    <Navigate to='/activate' />
  ):
  (
    children
  )
}

export default App