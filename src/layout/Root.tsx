import MainNavigation from '../components/MainNavigation'
import Footer from '../components/UI/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
        <MainNavigation />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default RootLayout