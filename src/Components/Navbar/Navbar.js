import React, { useState } from 'react'
import searchImage from '../../search.png'
import profileImage from '../../profile.png'
import notificationImage from '../../notification.png'
import './Navbar.css'
import Sidebarmobile from '../Sidebarmobile/Sidebarmobile'
import menueIcone from '../../bars.svg'
function Navbar() {
  const [show, setShow] = useState(true)
  return (
    <nav className=' p-5 grid md:grid-cols-3 navbar-container grid-cols-4'>
      <span className="mobile-menue col-span-1 md:invisible lg:invisible xl:invisible visible ">
        {
          show ? <Sidebarmobile /> : null
        }
        <button onClick={() => setShow(!show)} className='sm:pt-2 sm:px-3 p-1'>
          <img src={menueIcone} className="h-8"></img>
        </button>
      </span>
      <div className='serach-div col-span-3 flex justify-start mx-2'>
        <span className='search-icon-span'>
          <img className='' src={searchImage} />
        </span>
        <input type='text' placeholder='Search or type' className='px-10 search-input' />
      </div>
      <div className=' flex col-span-1 justify-end items-center profile-div'>
        <span className='md:px-2  p-1'>
          <img className='' src={notificationImage} />
        </span>
        <span className='md:px-2  p-1 '>
          <img className='rounded-full' src={profileImage} />
        </span>
      </div>
    </nav>
  )
}
export default Navbar