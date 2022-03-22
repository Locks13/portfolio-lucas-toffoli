import React from 'react';
import styled from 'styled-components';
import { Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { MdLogin, MdLogout } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import Button from "../Button";
import HashButton from "../HashButton";

import '../../translate/i18n';
import { useTranslation } from "react-i18next";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
      margin:0 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    display: ${({ open }) => open ? 'block' : 'none'};
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  const { signed, user, signOut } = useContext(AuthContext);

  const { t } = useTranslation();
  
  return (
    
    <Ul open={open}>
        <li>
            <HashButton link={'./lucas-toffoli/#sobreMim'} text={t('sobreMim.title')}color={'primary'} />
        </li>
        <li>
            <HashButton link={'./lucas-toffoli/#conhecimento'} text={t('conhecimento.title')} color={'primary'} />
        </li>
        <li>
            <HashButton link={'./lucas-toffoli/#depoimentos'} text={t('depoimento.title')} color={'primary'} />
        </li>
        <li>
            <Button link={'/lucas-toffoli/cv'} text={'CV'} color={'primary'} />
        </li>
        <li>
            <HashLink className="primary-icon" to="./#contact">
                <AiOutlineMail className="icon-header email" />
            </HashLink>
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
    </Ul>
  )
}

export default RightNav