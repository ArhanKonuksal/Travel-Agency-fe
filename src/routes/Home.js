import Destination from "../components/Destination";
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import HomeImg from "../assets/ucak.jpg"

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
    </>
    );
}

export default Home;