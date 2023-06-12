import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
/* import { Navbar } from '../components/navbar-test/Navbar' */


export default function Main ({ children }) {
  return (
    <>
      <div className='h-screen w-full flex flex-col'>
        <header>
          <Navbar />
        </header>
        <main className='grow'>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}
