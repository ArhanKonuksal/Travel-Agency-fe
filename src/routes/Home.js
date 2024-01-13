import Destination from "../components/Destination/Destination";
import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import HomeImg from "../assets/home.jpg"
import Trip from "../components/Trip/Trip"
import Footer from "../components/Footer/Footer"

function Home (){
    return(
    <>
    <Navbar />
    <Hero 
    cName="hero"
    heroImg={HomeImg}
    title="Your Journey Your Story"
    text="Explore the world of travel with us and discover new horizons."
    buttonText="Travel Plan"
    url="/"
    btnClass="show"
    />
    <Destination />
    <Trip />
    <Footer />
    </>
    );
}

export default Home;