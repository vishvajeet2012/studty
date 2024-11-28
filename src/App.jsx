import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PureFunction from './Function/PureFunction'
import ClassCompo from './compo and element/ClassCompo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <PureFunction/> */}
      <ClassCompo/>
    
    </>
  )
}

export default App
