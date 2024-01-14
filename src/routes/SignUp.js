import React from "react";
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import SignUpImg from "../assets/signUp.jpg"
import SignUpForm from "../components/SignUp/SignUpForm"
import Footer from "../components/Footer/Footer";

function SignUp () {
    return(
        <>
        <Navbar />
        <Hero cName="hero-mid" heroImg={SignUpImg} title="Sign Up" />
        <SignUpForm />
        <Footer />
    </>
    )
}





export default SignUp