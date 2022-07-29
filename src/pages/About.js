import map from "../assets/mmap.jpg";
import "../styles/About.css";
import { useRef } from "react";
import Header from "../shared/Header";
import FooterInfo from "../shared/FooterInfo";
import Footer from "../shared/Footer";
function About() {
  const nameRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const nameInput = nameRef.current.value;

    console.log(nameInput);
  }
  return (
    <>
    <Header/>
    
    <div className="contact">
   

      <div
        className="leftSide"
        style={{ backgroundImage: `url(${map})` }}
      >

      </div>
      <div className="rightSide">
             
        <h1> Branches</h1>
        <h2>ALEXANDRIA : </h2>
        <p>camshizar</p>
        <p>taram station </p>
        <p>Agamy</p>
        <p>sedigabr</p>
        <p>Sporting</p>
        
      </div>
    </div>
    <FooterInfo/>
    <Footer/>
    </>
  );
}

export default About;
