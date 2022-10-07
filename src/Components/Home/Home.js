import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './../Dashboard/Dashboard'
import Booking from './../Booking/Booking'
import Navbar from './../Navbar/Navbar'
import Sidebar from './../Sidebar/Sidebar'
import Api from '../Api/Api'
import './Home.css'
function Home() {
  return (
    <div className='home-container'>
     <div className=' grid md:grid-cols-12 container-div grid-cols-1'>
       <div className=' md:col-span-2 sidebar-div'>
          <Sidebar />
        </div>
       <div className=' md:col-span-10 col-span-1'>
          <Navbar />
         <div class="">
           <Routes>
           <Route path='/' element={<Dashboard />}></Route>
              <Route path='/Dashboard' element={<Dashboard />}></Route>
              <Route path='/Booking' element={<Booking />}></Route>
              <Route path='/Api' element={<Api />}></Route>
           </Routes>
         </div>
       </div>
     </div>
   </div>
  )
}
export default Home