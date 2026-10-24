import { useState } from 'react'
import NavBar from './components/NavBar'
import {Routes,Route} from 'react-router'
import Tools from './pages/Tools'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-5'>
        <NavBar/>
        <Routes>
           <Route path='' element={<Tools/>}/>
        </Routes>
    </div>
  )
}

export default App
