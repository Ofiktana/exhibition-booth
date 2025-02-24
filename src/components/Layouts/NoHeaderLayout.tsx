import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function NoHeaderLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default NoHeaderLayout