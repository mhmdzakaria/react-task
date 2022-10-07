import React from 'react'
import silvercarImage from '../../silvercar.png'
import arrowImage from '../../arrow.png'
import filterImage from '../../filter.png'
import gridImage from '../../grid.png'
import userImage from '../../user.png'
import favouriteImage from '../../favourite.png'
import './Booking.css'
import car1Image from '../../car-1.png'
import car2Image from '../../car-2.png'
import car3Image from '../../car-3.png'
import car4Image from '../../car-4.png'
import car5Image from '../../car-5.png'
import car6Image from '../../car-6.png'
import car7Image from '../../car-7.png'
import car8Image from '../../car-8.png'
import car9Image from '../../car-9.png'
function Booking() {
  return (
    <div className='booking-container p-5'>
      <h1 className='text-3xl py-3 booking-title mb-2'> Booking</h1>
      <div className='filter-container'>
        <div className='filter-buttons mb-3'>
          <span className=' mr-5 '>
            <select name="cars" id="cars" className='py-1 md:px-5 rounded-full'>
              <option value="volvo">New</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </span>
          <span className=''>
            <select name="cars" id="cars" className='rounded-full py-1 md:px-5'>
              <option value="volvo">Toyota</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </span>
        </div>
        <div className='filter-icons'>
          <span className='grid-icon rounded-full p-3'>
            <img className='  ' src={gridImage}></img></span>
          <img className=' md:px-5 filter-image' src={filterImage}></img>
        </div>
      </div>
      <div class="grid md:grid-cols-3 gap-2 py-1 grid-cols-1 sm:grid-cols-3 px-3">
        <div className='first-car-card rounded car-card border booking-card sm:col-span-1'>
          <div className='card-title'>
            <h1 className=''>
              Porshe 718 Cayman S
            </h1>
            <img className=' ml-12' src={favouriteImage}></img>
          </div>
          <h3 className='car-card-span'>
            Coupe
          </h3>
          <div className='car-image-div'>
            <img className='' src={car1Image}></img>
          </div>
          <div className='icons-box'>
            <img className='px-1' src={userImage}></img>
            <span className='px-1 mr-2'>4</span>
            <img className='px-1' src={arrowImage}></img>
            <span className='px-1'>Manual</span>
            <span className='pl-16'>$400/d</span>
          </div>
        </div>
        <div className='second-car-card rounded car-card my-2 booking-card sm:col-span-1'>
          <div className='card-title'>
            <h1 className=''>
              Porshe 718 Cayman S
            </h1>
            <img className=' ml-12' src={favouriteImage}></img>
          </div>
          <h3 className='car-card-span'>
            Coupe
          </h3>
          <div className='car-image-div'>
            <img className='' src={car2Image}></img>
          </div>
          <div className='icons-box'>
            <img className='px-1' src={userImage}></img>
            <span className='px-1 mr-2'>4</span>
            <img className='px-1' src={arrowImage}></img>
            <span className='px-1'>Manual</span>
            <span className='pl-16'>$400/d</span>
          </div>
        </div>
        <div className='third-car-card rounded car-card my-2 booking-card sm:col-span-1'>
          <div className='card-title'>
            <h1 className=''>
              Porshe 718 Cayman S
            </h1>
            <img className=' ml-12' src={favouriteImage}></img>
          </div>
          <h3 className='car-card-span'>
            Coupe
          </h3>
          <div className='car-image-div'>
            <img className='' src={car3Image}></img>
          </div>
          <div className='icons-box'>
            <img className='px-1' src={userImage}></img>
            <span className='px-1 mr-2'>4</span>
            <img className='px-1' src={arrowImage}></img>
            <span className='px-1'>Manual</span>
            <span className='pl-16'>$400/d</span>
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-3 gap-2 py-1 grid-cols-1 sm:grid-cols-3">
        <div className='first-car-card rounded car-card border booking-card sm:col-span-1'>
          <div className='card-title'>
            <h1 className=''>
              Porshe 718 Cayman S
            </h1>
            <img className=' ml-12' src={favouriteImage}></img>
          </div>
          <h3 className='car-card-span'>
            Coupe
          </h3>
          <div className='car-image-div'>
            <img className='' src={car4Image}></img>
          </div>
          <div className='icons-box'>
            <img className='px-1' src={userImage}></img>
            <span className='px-1 mr-2'>4</span>
            <img className='px-1' src={arrowImage}></img>
            <span className='px-1'>Manual</span>
            <span className='pl-16'>$400/d</span>
          </div>
        </div>
        <div className='second-car-card rounded car-card my-2 booking-card sm:col-span-1'>
          <div className='card-title'>
            <h1 className=''>
              Porshe 718 Cayman S
            </h1>
            <img className=' ml-12' src={favouriteImage}></img>
          </div>
          <h3 className='car-card-span'>
            Coupe
          </h3>
          <div className='car-image-div'>
            <img className='' src={car5Image}></img>
          </div>
          <div className='icons-box'>
            <img className='px-1' src={userImage}></img>
            <span className='px-1 mr-2'>4</span>
            <img className='px-1' src={arrowImage}></img>
            <span className='px-1'>Manual</span>
            <span className='pl-16'>$400/d</span>
          </div>
        </div>
        <div className='third-car-card rounded car-card my-2 booking-card sm:col-span-1'>
          <div className='card-title'>
            <h1 className=''>
              Porshe 718 Cayman S
            </h1>
            <img className=' ml-12' src={favouriteImage}></img>
          </div>
          <h3 className='car-card-span'>
            Coupe
          </h3>
          <div className='car-image-div'>
            <img className='' src={car6Image}></img>
          </div>
          <div className='icons-box'>
            <img className='px-1' src={userImage}></img>
            <span className='px-1 mr-2'>4</span>
            <img className='px-1' src={arrowImage}></img>
            <span className='px-1'>Manual</span>
            <span className='pl-16'>$400/d</span>
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-3 gap-2 py-1 grid-cols-1 sm:grid-cols-3">
        <div className='first-car-card rounded car-card border booking-card sm:col-span-1'>
          <div className='card-title'>
            <h1 className=''>
              Porshe 718 Cayman S
            </h1>
            <img className=' ml-12' src={favouriteImage}></img>
          </div>
          <h3 className='car-card-span'>
            Coupe
          </h3>
          <div className='car-image-div'>
            <img className='' src={car7Image}></img>
          </div>
          <div className='icons-box'>
            <img className='px-1' src={userImage}></img>
            <span className='px-1 mr-2'>4</span>
            <img className='px-1' src={arrowImage}></img>
            <span className='px-1'>Manual</span>
            <span className='pl-16'>$400/d</span>
          </div>
        </div>
        <div className='second-car-card rounded car-card my-2 booking-card sm:col-span-1'>
          <div className='card-title'>
            <h1 className=''>
              Porshe 718 Cayman S
            </h1>
            <img className=' ml-12' src={favouriteImage}></img>
          </div>
          <h3 className='car-card-span'>
            Coupe
          </h3>
          <div className='car-image-div'>
            <img className='' src={car8Image}></img>
          </div>
          <div className='icons-box'>
            <img className='px-1' src={userImage}></img>
            <span className='px-1 mr-2'>4</span>
            <img className='px-1' src={arrowImage}></img>
            <span className='px-1'>Manual</span>
            <span className='pl-16'>$400/d</span>
          </div>
        </div>
        <div className='third-car-card rounded car-card my-2 booking-card sm:col-span-1'>
          <div className='card-title'>
            <h1 className=''>
              Porshe 718 Cayman S
            </h1>
            <img className=' ml-12' src={favouriteImage}></img>
          </div>
          <h3 className='car-card-span'>
            Coupe
          </h3>
          <div className='car-image-div'>
            <img className='' src={car9Image}></img>
          </div>
          <div className='icons-box'>
            <img className='px-1' src={userImage}></img>
            <span className='px-1 mr-2'>4</span>
            <img className='px-1' src={arrowImage}></img>
            <span className='px-1'>Manual</span>
            <span className='pl-16'>$400/d</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Booking