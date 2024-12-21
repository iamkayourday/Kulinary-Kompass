import AboutUs from "./components/AboutUs"
import BackToTop from "./components/BackToTop"
import Contactus from "./components/Contactus"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Header from "./components/Header"
import SetUsApart from "./components/SetUsApart"

function App() {
 

  return (
    <>
    <div className='dark:bg-[#1e1e1f]'>
      <Header />
      <AboutUs />
      <SetUsApart />
      <Gallery />
      <Contactus />
      <BackToTop />
      <Footer />
    </div>
     
    </>
  )
}

export default App
