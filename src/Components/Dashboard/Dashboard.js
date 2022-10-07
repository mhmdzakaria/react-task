import React from 'react'
import Chartbar from '../Chartbar/Chartbar'
import './Dashboard.css'
import computerImage from '../../computer.png'
import badgesImage from '../../badges.png'
import pointsImage from '../../points.png'
import energyIcon from '../../energy.png'
import rangeIcon from '../../range.png'
import breakIcon from '../../break.png'
import tireIcon from '../../tire.png'
import silvercarImage from '../../silvercar.png'
import whitecarImage from '../../whitecar.png'
import redcarImage from '../../redcar.png'
import cariconImage from '../../caricon.png'
import arrowImage from '../../arrow.png'
import circleImage from '../../circle.png'
import electricImage from '../../electric.png'
function Dashboard() {
  return (
    <div className='p-5 dashoard-container'>
      {/* // charts  */}
      <div class="grid  gap-4 py-1 grid-cols-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-4 lg:grid-cols-4 lg:gap-2 dashboard-grid">
        <div className='card rounded chart-card  sm:col-span-1 md:col-span-1 chart-card-active '>
          <p className=''>
            <img className='' src={energyIcon}></img>
          </p>
          <h1>Energy</h1>
          <Chartbar />
        </div>
        <div className=' rounded chart-card  sm:col-span-1 md:col-span-1 '>
          <p className=''>
            <img className='' src={rangeIcon}></img>
          </p>
          <h1>Range</h1>
          <Chartbar />
        </div>
        <div className=' rounded chart-card  sm:col-span-1 md:col-span-1 grid'>
          <p className=''>
            <img className='' src={breakIcon}></img>
          </p>
          <h1>Break fluid</h1>
          <Chartbar />
        </div>
        <div className=' rounded chart-card  sm:col-span-1 md:col-span-1 '>
          <p className=''>
            <img className='' src={tireIcon}></img>
          </p>
          <h1>Tire Wear</h1>
          <Chartbar />
        </div>
      </div>
      {/* // cards  */}
      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5 dashboard-grid">
        <div className='col-span-2 card  md:col-span-1 apply-card rounded lg:col-span-2 md:grid sm:col-span-1 md:grid-cols-8  justify-center p-5 gap-2'>
          <div className='col-span-4 sm:col-span-2'>
            <h1 className='text-2xl'>Apply for a car loan !</h1>
            <p>This is a sample of a generated text</p>
            <button className='discover-btn'>Discover More</button>
          </div>
          <div className='col-span-4 px-4  sm:col-span-2'>
            <img src={computerImage} />
          </div>
        </div>
        <div className='badges-card rounded lg:col-span-1 md:col-span-1 md:grid sm:col-span-1 md:grid-cols-8 p-5' >
          <div className='col-span-4    mid:col-span-4'>
            <h1 className='text-2xl'>You have earned <span className='badges-span'>20</span> badges</h1>
          </div>
          <div className='col-span-4 mid:col-span-4'>
            <img src={badgesImage} />
          </div>
          <p className='col-span-12'>Hooray! Way to go Mohammed!</p>
        </div>
        <div className='points-card rounded lg:col-span-1 md:col-span-1 md:grid sm:col-span-1 md:grid-cols-8 points-card p-5' >
          <div className='col-span-4'>
            <h1 className='text-2xl'>You have earned  <span className='points-span'>1500</span> points </h1>
          </div>
          <div className='col-span-4'>
            <img src={pointsImage} />
          </div>
          <p className='col-span-12'>Redeem and claim your rewards!</p>
        </div>
      </div>
      {/* // charts  */}
      <div class="grid  gap-2 py-1 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 dashboard-grid">
        <div className='first-car-card rounded car-card sm:col-span-1  border '>
          <h1 className=''>
            <img className='px-3' src={cariconImage}></img>
            64% Recommend
          </h1>
          <div className='car-image-div'>
            <img className='' src={silvercarImage}></img>
          </div>
          <h1 className='car-card-title'>
            Mini Cooper
          </h1>
          <div className='icons-box'>
            <img className='px-2' src={arrowImage}></img>
            <span className='px-2'>132k</span>
            <img className='px-2' src={circleImage}></img>
            <img className='px-2' src={electricImage}></img>
            <span className='pl-16'>$32/h</span>
          </div>
        </div>
        <div className='second-car-card rounded car-card sm:col-span-1 '>
          <h1 className=''>
            <img className='px-3' src={cariconImage}></img>
            Porsche 911 Carrera
          </h1>
          <div className='car-image-div'>
            <img className='' src={whitecarImage}></img>
          </div>
          <h1 className='car-card-title'>
            Porsche 911 Carrera
          </h1>
          <div className='icons-box'>
            <img className='px-2' src={arrowImage}></img>
            <span className='px-2'>132k</span>
            <img className='px-2' src={circleImage}></img>
            <img className='px-2' src={electricImage}></img>
            <span className='pl-16'>$32/h</span>
          </div>
        </div>
        <div className='third-car-card rounded car-card sm:col-span-1 '>
          <h1 className=''>
            <img className='px-3' src={cariconImage}></img>
            74% Recommend
          </h1>
          <div className='car-image-div'>
            <img className='' src={redcarImage}></img>
          </div>
          <h1 className='car-card-title'>
            74% Recommend
          </h1>
          <div className='icons-box'>
            <img className='px-2' src={arrowImage}></img>
            <span className='px-2'>132k</span>
            <img className='px-2' src={circleImage}></img>
            <img className='px-2' src={electricImage}></img>
            <span className='pl-16'>$32/h</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard