import { useState } from 'react'
import './App.css'

function App() {
  // we are using useState because the color should be reflected in UI
  const [color, setColor] = useState('olive')
  // here the setColor is getting assigned to whole body becuse we are setting the div style with backgroundColor: color
  return (
    <>
      {/* here i gave w-screen and h-screen because i need the background color to come to whole bode if we doesn't specify that then div will occupy
     the space only with the content we mention */}
      {/* i am definnf style beacuse i need color same from useState */}
      {/* when ever definig style we need to define inside {{}} */}
      <div className='flex flex-col-reverse items-center m-0 p-0 w-screen h-screen ' style={{ backgroundColor: color }}>
        {/* flex nowrap means telling Do not wrap the buttons into a new line even if the screen is small. */}
        {/* so use flex-wrap */}
        {/* wx-auto will adjust the width automatically for the number of buttong */}
        <div className='flex flex-wrap b-8 bg-white gap-7 mb-36 justify-center  rounded-2xl wx-auto p-5'>
          <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform duration-300"
          // onclick will always expect a function reference not executing function e.g somefunc() not right because it will get execute and () => will be right we weill be just passing the function
          onClick={() =>setColor('red')}>
            Red
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform duration-300"
          onClick={() =>setColor('blue')}>
            Blue
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform duration-300"
          onClick={() =>setColor('green')}>
            Green
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform duration-300"
          onClick={() =>setColor('yellow')}>
            Yellow
          </button>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform duration-300"
          onClick={() =>setColor('pink')}>
            Pink
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform duration-300"
          onClick={() =>setColor('purple')}>
            Purple
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform duration-300"
          onClick={() =>setColor('black')}>
            Black
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform duration-300"
          onClick={() =>setColor('orange')}>
            Orange
          </button>
        </div>
      </div>
    </>
  )
}

export default App
