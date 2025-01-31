import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './components/Layouts/DefaultLayout'
import Agenda from './components/Utilities/Agenda'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<h1>Home Page</h1>}/>
          <Route path='programs' element={<Agenda />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
