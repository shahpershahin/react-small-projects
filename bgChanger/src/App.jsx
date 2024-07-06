import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState(null)

  function changeColor(){
    var clr = document.getElementById("colorField").value;
    setcolor(clr)
    console.log("Ran1")
  }

  useEffect(() =>{
    if(color!==null)
      document.getElementById("body").style.backgroundColor=color
      console.log("Ran2")
  },[color])

  return (
    <div className='w-full h-screen duration-20' id="body" >

        <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

            <input type="text" name="colorField" id="colorField"/>
            <button className='outline-none px-4 py-1 rounded-ful shadow-lg text-black' onClick={changeColor}>Change Color</button>
          
          </div>
        </div>


    </div>
  )
}

export default App
