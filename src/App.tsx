import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './components/Layouts/DefaultLayout'
import Learning from './pages/Learning'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<h1 className='main-bg-dark' style={{minHeight: '500px'}}>Home Page</h1>}/>
          <Route path='learning' element={<Learning />}/>
          <Route path='leader-board' element={<h1 style={{minHeight: '1000px'}}>Leader Board</h1>}/>
          <Route path='raffle' element={<h1 style={{minHeight: '1000px'}}>Raffle Draw</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
