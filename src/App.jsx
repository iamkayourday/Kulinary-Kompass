import AboutUs from "./components/AboutUs"
import Contactus from "./components/Contactus"
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
    </div>
     
    </>
  )
}

export default App
