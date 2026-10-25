import { useState } from 'react'
import NavBar from './components/NavBar'
import {Routes,Route, Router} from 'react-router'
import Tools from './pages/Tools'
import JsonValidator from './pages/jsonValidator'
import JsonParser from './pages/jsonParser'
import JwtDecoder from './pages/jwtDecoder'
import UrlEncoderDecoder from './pages/urlEncoder-Decoder'
import UuidGenerator from './pages/uuidGenerator'
import ColorCodeConverter from './pages/colorCodeConverter'


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
           <Route path='url-encoder-decoder' element = {<UrlEncoderDecoder/>}/>
           <Route path='uuid-generator' element = {<UuidGenerator/>}/>
           <Route path='color-code-converter' element = {<ColorCodeConverter/>}/>
        </Routes>
    </div>
  )
}

export default App
