import Header from '../NavHeader/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'


function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default DefaultLayout