
import { FacebookIcon, InstagramIcon, LinkedinIcon, GitHubIcon } from "../../components/SocilaMedia"
import './about.css';
import '../../translate/i18n';
import React from "react";
import { useTranslation } from "react-i18next";


function About() {
  const { t } = useTranslation();
  
    return (    
      <div className="holder-about" id="sobreMim">
        <div className="aboutme">
            <h1>
              {t('sobreMim.title')}
            </h1>
            <p>
              {t('sobreMim.paragrafo-1')}
            </p>
            <p>
              {t('sobreMim.paragrafo-2')}
            </p>
            <p>
              {t('sobreMim.paragrafo-3')}
            </p>
            <p>
              {t('sobreMim.paragrafo-4')}
            </p>            
            <p>
              {t('sobreMim.paragrafo-5')}
            </p>
            <div className="socialMedia">
                <FacebookIcon />
                <InstagramIcon />
                <LinkedinIcon />
                <GitHubIcon />
            </div>
        </div>
      </div>
    )
  }
export default About;