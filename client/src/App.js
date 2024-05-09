import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import User from './pages/User.js'
import Contact from './pages/contact'
import Login from './pages/Login'
import Signup from './pages/signup'
import Userdetails from './pages/Userdetails'
import Admin from './pages/Admin'
import Newsupdate from './pages/Newsupdate'
import Checkout from './pages/Checkout'
import Tickettable from './pages/Tickettable'
import TicketUpdate from './pages/ticketupdate'
import Adminlogin from './pages/Adminlogin'
import Finalpage from './pages/Finalpage'
import Tasks from './pages/Tasks'
import Messages from './pages/Messages.js'
import Question01 from './pages/Question01'
import Question02 from './pages/Question02.js'
import Question03 from './pages/Question03.js'
import Question04 from './pages/Question04.js'
import Question05 from './pages/Question05.js'
import Question06 from './pages/Question06.js'
import Question07 from './pages/Question07.js'
import Question08 from './pages/Question08.js'
import Question09 from './pages/Question09.js'
import Question10 from './pages/Question10.js'
import Submisions from './pages/Submissions.js'
import fetch from './pages/fetch.js'
import Studentprofile from './pages/Studentprofile.js'
import './index.css'



export default function App(){
  return(
    <>

      
      <Router>
        <Routes>
        <Route path='/' Component={Home} />
        <Route path='/signup' Component={Signup} />
        <Route path='/user' Component={User} />
          <Route path='/contact' Component={Contact} />
          <Route path='/login' Component={Login} />
          <Route path='/admin' Component={Admin} />
          <Route path='/userdetails' Component={Userdetails} />
          <Route path='/submission' Component={Submisions} />y
          <Route path='/newsupdate/:id' Component={Newsupdate} />
          <Route path='/checkout/:id' Component={Checkout} />
          <Route path='/Tickettable' Component={Tickettable} />
          <Route path='/ticketupdate/:id' Component={TicketUpdate} />
          <Route path='/adminlogin' Component={Adminlogin} />
          <Route path='/finalpage/:id' Component={Finalpage} />
          <Route path='/tasks' Component={Tasks} />
          <Route path='/question01/:id' Component={Question01} />
          <Route path='/question02/:id' Component={Question02} />
          <Route path='/question03/:id' Component={Question03} />
          <Route path='/question04/:id' Component={Question04} />
          <Route path='/question05/:id' Component={Question05} />
          <Route path='/question06/:id' Component={Question06} />
          <Route path='/question07/:id' Component={Question07} />
          <Route path='/question08/:id' Component={Question08} />
          <Route path='/question09/:id' Component={Question09} />
          <Route path='/question10/:id' Component={Question10} />
          <Route path='/studentprofile' Component={Studentprofile} />
          <Route path='/messages' Component={Messages} />
          <Route path='/fetch' Component={fetch} />

        

        </Routes>
      </Router>
    </>
  )
}
