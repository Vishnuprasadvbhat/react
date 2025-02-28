import { useState } from "react"
import Bar from "./components/Bar"
function App() {
  const [bg, setBg] = useState('olive')
  return (
    <>
     <div className="w-full h-screen duration-150" 
     style={{backgroundColor: bg}}>
        <div className="flex fixed flex-wrap justify-center bottom-12  inset-x-0 px-2">

        <div className="fixed flex flex-wrap shadow-lg gap-5 bg-white rounded-full px-3 py-2 ">
          <button onClick={() => setBg('red')} className="rounded-full outline-none text-white px-4 shadow-lg cursor-pointer" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setBg('green')} className="rounded-full outline-none text-white px-4 shadow-lg cursor-pointer" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setBg('yellow')} className="rounded-full outline-none text-black px-4 shadow-lg cursor-pointer" style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setBg('black')} className="rounded-full outline-none text-white px-4 shadow-lg cursor-pointer" style={{backgroundColor: "black"}}>Black</button>
        </div>
        </div>
        </div>
    </>
  )
}

export default App
