import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './components/Layouts/DefaultLayout'
import Learning from './pages/Learning'
import Home from './pages/Home'
import Login from './pages/Login'
import Welcome from './pages/Welcome'
import Raffle from './pages/Raffle'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<Home />}/>
          <Route path='login' element={<Login />}/>
          {/* Wrap the routes below with Auth Required. See protected routes learning */}
          <Route path='learning' element={<Learning />}/>
          <Route path='leader-board' element={<Welcome />}/>
          <Route path='raffle' element={<Raffle />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
