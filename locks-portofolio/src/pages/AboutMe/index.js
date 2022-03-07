import styled from "styled-components";
import Header from "../../components/Header";
import About from "../../components/About";
import Knowledge from "../../components/Knowledge"
import Depoiments from "../../components/Depoiments";
import Contact from "../../components/Contact";


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

          <Contact />

          <Depoiments />

        </Wrapper>
        
      </>
    )
  }
export default AboutMe;