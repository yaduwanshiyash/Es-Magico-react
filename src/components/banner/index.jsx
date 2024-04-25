import HeroSection from "../HeroSection"
import Navbar from "../Navbar"
// import Back from "./Back"
import './index.css'

const Banner = () => {
  return (
    <div className="md:h-[960px] h-auto bg-transparent">
      <Navbar />
      {/* <Back/> */}
      <HeroSection />
    </div>
  )
}

export default Banner
