import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { About } from './components/pages/About'
import { Contacts } from './components/pages/Contacts'
import { News } from './components/pages/News'
import { Register } from './components/pages/Registration'
import { Favourite } from './components/pages/Favourite'
import { Cart } from './components/pages/Cart'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
          <Route path="/" element={<Layout />}>
              <Route path="about" element={<About />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="news" element={<News />}/>
              <Route path='register' element={<Register/>}/>
              <Route path='favourite' element={<Favourite/>}/>
              <Route path='cart' element={<Cart/>}/>
          </Route>
      </Routes>


    </>
  )
}

export default App
