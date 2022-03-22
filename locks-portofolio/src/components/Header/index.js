import styled from "styled-components";
import Imagem from "../../assets/eu.png"
import BgHeader from "../../assets/bg-header.png"
import './header.css'
import Burger from "./Burger";
import CountryFlags from "../CountryFlags";


const HeaderContainer = styled.div`
    display:flex;
    background-image: url(${BgHeader});
    background-size: cover;
    @media(max-width:968px){
        background:linear-gradient(to right, #181c2e, #555974);
    }
`

const HeaderItens = styled.div`
    max-width:900px;
    padding:1em;
    display:flex;
    flex-direction:row;
    margin:0 auto;
    width:100%;
    justify-content: space-between;
    align-items:center;
    @media(max-width:768px){
        display:block;
        postion:relative;
    }
`

function Header() {

    return (    
      <HeaderContainer>
        <HeaderItens>
            <div className="lucas-image">
                <img src={Imagem} alt="Lucas Toffoli" />
            </div>
            <Burger />
        </HeaderItens>
        <CountryFlags />
      </HeaderContainer>
    )
  }
  
  export default Header;