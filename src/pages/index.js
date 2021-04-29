import React from "react";
import './../components/index.css'

export default function Home() {
  return <div className='container'>
    <div className='topRow'>
      <div className='topLeft'>
        <div className='firstPink'></div>
        <div className='firstBlue'></div>
      </div>
      <div className='topRight'>
        <div className='secondBlue'></div>
        <div className='secondPink'></div>
      </div>
    </div>
    <div className='bottomRow'>
        <div className='bottomLeft'></div>
          <div className='thirdPink'></div>
          <div className='thirdBlue'></div>
        <div className='bottomRight'></div>
          <div className='fourthBlue'></div>
          <div className='fourthPink'></div>
    </div>
  </div>
}
