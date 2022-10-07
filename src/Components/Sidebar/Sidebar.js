import React, { Fragment } from 'react'
import { Link, NavLink } from "react-router-dom";
import logoImage from '../../logo.png'
import dashboardiconImage from '../../dashboardicon.png'
import bookingImage from '../../booking.png'
import settingsImage from '../../settings.png'
import signoutImage from '../../signout.png'
import Api from '../Api/Api';
import './Sidebar.css'
function Sidebar() {
  return (
    <Fragment>
      <div className=' flex flex-col justify-center sidebar-container desktop-nav'>
        <Link to='/dashboard'>
          <div className='Logo-div  mt-10'>
            <span className='logo-image px-1'>
              <img src={logoImage} ></img>
            </span>
            <h2 className='logo-name px-1 '>Motiv.</h2>
          </div>
        </Link>
        <div className='sidebar-links-container grid grid-col-3 content-between'>
          <div className='sidebar-links mb-48'>
            <div className='links-list flex flex-col gap-3 mt-5'>
              <NavLink className='link' activeClassName="active" to="/dashboard" >
                <img src={dashboardiconImage} className='px-2'></img>
                Dashboard </NavLink>
              <NavLink className='link' activeClassName="active" to="/booking" >
                <img src={bookingImage} className='px-2'></img>
                Cars</NavLink>
              <NavLink className='link' activeClassName="active" to="/api" >
                API retrieving data</NavLink>
            </div>
          </div>
          <div className='sidebar-links mt-24'>
            <div className='links-list'>
              <NavLink className='link' activeClassName="active" to="/settings" >
                <img src={settingsImage} className='px-2'></img>
                Settings </NavLink>
              <NavLink className='link' activeClassName="active" to="/logout" >
                <img src={signoutImage} className='px-2'></img>
                Logout</NavLink>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Sidebar