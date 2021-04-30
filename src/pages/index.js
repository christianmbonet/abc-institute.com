import React, { useState } from "react";
import './../components/index.css'

export default function Home() {
   
  const [on, setOn] = useState(false);

  const lightSwitch = () => setOn(on => !on);

  return <div>
  <div className='container'>
    <div className='topRow'>
        <div className='topLeftPink'></div>
        <div className='topMiddleBlue'></div>
        <div className='topRightPink'></div>
    </div>
    <div className='middleRow'>
        <div className='middleLeftBlue'></div>
        <button className='middleMiddle' onClick={lightSwitch}></button>
        <div className={on ? 'middleRightBlue' : 'middleRightPink'}></div>
    </div>
    <div className='bottomRow'>
        <div className='bottomLeftPink'></div>
        <div className='bottomMiddleBlue'></div>
        <div className='bottomRightPink'></div>
    </div>
  </div>
  </div>
}
