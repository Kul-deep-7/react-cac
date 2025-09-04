import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function BgColor() {
  const [BgColor, setBgColor] = useState('pink')

  return (
    <>
    <div className="w-screen h-screen flex flex-col justify-end " 
    style={{backgroundColor: BgColor}}>
      <div className='bg-white flex justify-center p-5 gap-5 rounded-lg'>
        <button className='bg-red-800' onClick={()=>setBgColor('red')}>RED</button> 
        
        {/* You're doing: style={{ backgroundColor: BgColor }} 
        But you're passing 'bg-red-800' (a Tailwind class name, not an actual color like #ff0000 or 'red').
        So React doesn’t understand 'bg-red-800' as a valid CSS background color.
        OR other way 
        use <div className={`w-screen h-screen flex flex-col justify-end ${BgColor}`}>
        then setBgColor('bg-red-800') to change the color

 */}
        <button onClick={()=>{setBgColor('Green')}}>GREEN</button>
        <button onClick={()=>{setBgColor('Blue')}}>BLUE</button>
      </div>
      </div>
    </>
  )
}

export default BgColor
