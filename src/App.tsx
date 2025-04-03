import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './components/Layouts/DefaultLayout'
import NoHeaderLayout from './components/Layouts/NoHeaderLayout'
import Learning from './pages/Learning'
import Home from './pages/Home'
import Login from './pages/Login'
import Welcome from './pages/Welcome'
import Raffle from './pages/Raffle'
import LearningCourse from './pages/LearningCourse'
import { auth } from './config/firebase-config'



function App() {

  // const user:any = auth.currentUser
  const user:any = {displayName: 'John Doe'}

  return (
    <BrowserRouter>
      {user ? (
        <Routes>
          <Route path="/" element={<DefaultLayout user={user} />}>
            <Route index element={<Welcome />} />
            <Route path="learning" element={<Learning />} />
            <Route path="learning/:slug" element={<LearningCourse />} />
            <Route path="leader-board" element={<h1>Leader Board</h1>} />
            <Route path="raffle" element={<Raffle />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<NoHeaderLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App
