import styled from "styled-components";
import Header from "../../components/Header";
import About from "../../components/About";
import Knowledge from "../../components/Knowledge"
import Depoiments from "../../components/Depoiments";
import Contact from "../../components/Contact";
import '../../translate/i18n';
import Footer from "../../components/Footer";


function AboutMe() {

    const Wrapper = styled.div`
        margin:0 auto;
        display:flex;
        flex-direction:column;
    `

    return (    
      <>
        <Header />
        <Wrapper>
          
          <About />

          <Knowledge />

          <Depoiments />

          <Contact />

          <Footer />

        </Wrapper>
        
      </>
    )
  }
export default AboutMe;