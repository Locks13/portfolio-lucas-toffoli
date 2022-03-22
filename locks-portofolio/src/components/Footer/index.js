import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, GitHubIcon } from "../../components/SocilaMedia"

import './footer.css';

function Footer() {

    return (    
      <div className="holder-Footer">
        <div className="socialMedia">
            <FacebookIcon />
            <InstagramIcon />
            <LinkedinIcon />
            <GitHubIcon />
        </div>
      </div>
    )
  }
export default Footer;