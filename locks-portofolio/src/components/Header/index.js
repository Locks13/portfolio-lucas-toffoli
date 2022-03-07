import styled from "styled-components";
import Imagem from "../../assets/eu.jpeg"
import BgHeader from "../../assets/bg-header.png"
import Button from "../Button";
import './header.css'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Link } from "react-router-dom";
import { MdLogin, MdLogout } from 'react-icons/md';

const HeaderContainer = styled.div`
    display:flex;
    background-image: url(${BgHeader});
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
`

function Header() {
    const { signed, user, signOut } = useContext(AuthContext);

    return (    
      <HeaderContainer>
        <HeaderItens>
            <div className="lucas-image">
                <img src={Imagem} alt="Lucas Toffoli" />
            </div>
            <ul>
                <li>
                    <Button link={'/lucas-toffoli/cv'} text={'CV'} color={'primary'} />
                </li>
                <li>
                    <Button link={'/lucas-toffoli'} text={'Referência'} color={'primary'} />
                </li>
                {!signed ? (
                    <li className="hidden">
                        <div ></div>
                    </li>
                ) : (
                    <li>
                        <Button link={'/lucas-toffoli/user'} text={user.nome} color={'primary'} />
                    </li>
                )}
                <li>
                    {!signed ? (
                        <Link className="primary-icon" to="/lucas-toffoli/signin">
                            <MdLogin className="icon-header signin" />
                        </Link> 
                    ) : (
                        <button className="primary-icon" onClick={ () => signOut() }>
                            <MdLogout className="icon-header signout" />
                        </button>
                    )}
                </li>
            </ul>
        </HeaderItens>          
      </HeaderContainer>
    )
  }
  
  export default Header;