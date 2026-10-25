import { useState } from 'react'
import NavBar from './components/NavBar'
import {Routes,Route, Router} from 'react-router'
import Tools from './pages/Tools'
import JsonValidator from './pages/jsonValidator'
import JsonParser from './pages/jsonParser'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-5'>
        <NavBar/>
        <Routes>
           <Route path='' element={<Tools/>}/>
           <Route path='json-validator' element={<JsonValidator/>} />
           <Route path='json-parser' element={<JsonParser/>}/>
        </Routes>
    </div>
  )
}

export default App
