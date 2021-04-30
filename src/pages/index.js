import React, { useState } from "react";
import './../components/index.css'

export default function Home() {
   
  const [on, setOn] = useState(false);

  const lightSwitchCenter = () => setOn(on => !on);

  return <div>
  <div className='container'>
    <div className='topRow'>
        <div className='topLeftPink'></div>
        <div className={on ? 'topMiddleBlue' : 'topMiddlePink'}></div>
        <div className='topRightPink'></div>
    </div>
    <div className='middleRow'>
        <div className={on ? 'middleLeftBlue': 'middleLeftPink'}></div>
        <button className='middleMiddle' onClick={lightSwitchCenter}></button>
        <div className={on ? 'middleRightBlue' : 'middleRightPink'}></div>
    </div>
    <div className='bottomRow'>
        <div className='bottomLeftPink'></div>
        <div className={on ? 'bottomMiddleBlue' : 'bottomMiddlePink'}></div>
        <div className='bottomRightPink'></div>
    </div>
  </div>
  </div>
}
