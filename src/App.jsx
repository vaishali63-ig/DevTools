import { useState } from 'react'
import NavBar from './components/NavBar'
import {Routes,Route, Router} from 'react-router'
import Tools from './pages/Tools'
import JsonValidator from './pages/jsonValidator'
import JsonParser from './pages/jsonParser'
import JwtDecoder from './pages/jwtDecoder'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-5'>
        <NavBar/>
        <Routes>
           <Route path='' element={<Tools/>}/>
           <Route path='json-validator' element={<JsonValidator/>} />
           <Route path='json-parser' element={<JsonParser/>}/>
           <Route path='jwt-decoder' element={<JwtDecoder/>}/>
        </Routes>
    </div>
  )
}

export default App
