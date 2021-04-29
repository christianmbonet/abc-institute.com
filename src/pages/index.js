import React from "react";
import './../components/index.css'

export default function Home() {
  return <div className='container'>
    <div className='topRow'>
        <div className='topLeftPink'></div>
        <div className='topMiddleBlue'></div>
        <div className='topRightPink'></div>
    </div>
    <div className='middleRow'>
        <div className='middleLeftBlue'></div>
        <div className='middleMiddle'></div>
        <div className='middleRightBlue'></div>
    </div>
    <div className='bottomRow'>
        <div className='bottomLeftPink'></div>
        <div className='bottomMiddleBlue'></div>
        <div className='bottomRightPink'></div>
    </div>
  </div>
}
