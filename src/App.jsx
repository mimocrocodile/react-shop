import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { About } from './components/pages/About'
import { Contacts } from './components/pages/Contacts'
import { News } from './components/pages/News'
import { Register } from './components/pages/Registration'
import { Favourite } from './components/pages/Favourite'
import { Cart } from './components/pages/Cart'
import { InProgress } from './components/pages/InProgress'
import { Main } from './components/elements/MainPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
          <Route path="/" element={<Layout />}>
              <Route path='/' element={<Main/>} />
              <Route path="about" element={<About />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="news" element={<News />}/>
              <Route path='register' element={<Register/>}/>
              <Route path='favourite' element={<Favourite/>}/>
              <Route path='cart' element={<Cart/>}/>
              <Route path="*" element={<InProgress/>} />
          </Route>
      </Routes>


    </>
  )
}

export default App
