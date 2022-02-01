import styled from "styled-components";
import Imagem from "../../assets/eu.jpeg"
import Button from "../Button";
import './header.css'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

const HeaderContainer = styled.div`
    display:flex;
    background:linear-gradient(to right, #181c2e, #555974);
`

const HeaderItens = styled.div`
    max-width:80%;
    padding:1em;
    display:flex;
    flex-direction:row;
    margin:0 auto;
    width:100%;
    justify-content: space-between;
    align-items:center;
`

function Header() {
    const { signed } = useContext(AuthContext);

    return (    
      <HeaderContainer>
        <HeaderItens>
            <div className="lucas-image">
                <img src={Imagem} alt="Lucas Toffoli" />
            </div>
            <ul>
                <li>
                    <Button link={'/'} text={'About me'} color={'primary'} />
                </li>
                <li>
                    <Button link={signed ? '/user' : '/signin'} text={signed ? 'Usuario' : 'Entrar'} color={'primary'} />
                </li>
            </ul>
        </HeaderItens>          
      </HeaderContainer>
    )
  }
  
  export default Header;