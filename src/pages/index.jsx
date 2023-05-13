// import Navbar from '../../components/common/Navbar'
import Hero from "../../components/Herosection/Hero";
import ServiceCards from "../../components/Services components/ServiceCards"

import SuperchargeYT from "../../components/CallToAction/CallToAction";
import YtSlider from "../../components/YtSlider/Slider";

import Footer from "../../components/common/Footer";
// import TrustPilotReview from "../../components/TrustPilot/TrustPilotReview"



const Home = () => {
  return (
    <div className=" bg-cover bg-center  bg-[url('/Images/main-bg1.jpg')] ">
      <Hero />
      {/* <TeamSection/> */}
      <YtSlider />
      <ServiceCards />
      {/* <TrustPilotReview /> */}
      <SuperchargeYT />
      <Footer />
    </div>
  )
}

export default Home