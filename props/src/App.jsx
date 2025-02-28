import { useState } from 'react'

import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <h1 className=' text-center rounded bg-red-400 font-bold text-3xl underline'>Hello Tailwind</h1>
    <div className='flex justify-center  gap-10 bg-slate-700 py-10  '>
      <Card title ='BSDK' />
      <Card title ='BSDK' />
      <Card title ='BSDK' />
    </div>

    </>
  )
}

export default App
