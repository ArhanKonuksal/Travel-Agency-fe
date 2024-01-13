import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import AboutImg from "../assets/about.jpg"
import AboutUs from "../components/About/AboutUs";
import Footer from "../components/Footer/Footer"
import TripData from "../components/Trip/TripData"
import Arhan from "../assets/arhan.jpg"
import Aral from "../assets/aral.jpg"
import Zihni from "../assets/zihni.jpg"


function About (){
    return(
        <>
        <Navbar />
    <Hero 
    cName="hero-mid"
    heroImg={AboutImg}
    title="About"
    btnClass="hide"
    />
    <AboutUs />
    <div className="trip">
    <h1>All over the World</h1>
    <p>We are the builder of the project</p>
    <div className="tripcard">
    <TripData
    image={Arhan}
    heading="Arhan Konuksal"
    text="I am 18 years old and I am a full-stack web developer and this project was a lot of fun thanks to
    my team and teachers."
        />
    <TripData
    image={Aral}
    heading="Aral Hüdaoğlu"
    text="I am 25 years old living in UK. I am aspiring to be a full-stack developer in the future and I have learned a lot in these 6 months thanks to my great teachers and friends in my group."
        />
        <TripData
    image={Zihni}
    heading="Zihni Güçlü"
    text="Zihni Guclu: Hi my name is Zihni I the least helper at this project lol"
        />
        </div>
    </div>
    <Footer />
    </>
    )
}

export default About;