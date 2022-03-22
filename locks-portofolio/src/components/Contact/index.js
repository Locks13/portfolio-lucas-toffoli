import React, { useRef } from 'react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, GitHubIcon } from "../../components/SocilaMedia"
import emailjs from '@emailjs/browser';
import '../../translate/i18n';
import { useTranslation } from "react-i18next";


import './contact.css';


function Contact() {
  const form = useRef();

  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tmei80c', 'template_gmzefrf', form.current, 'YvKaNesPHr8cX0Z09')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (    
      <div className="holder-contact" id="contact">
        <div className='contact-email-phone'>
          <h1>{t('contato.title')}</h1>
          
          <div className='flex'>
            <div className="contact">
              <div className='contact-infos'>
                <span>
                  <h3>
                    {t('contato.telefone')}
                  </h3>
                  <p>
                    +55 (11) 98224-7422
                  </p>
                </span>

                <span>
                  <h3>
                    Email:
                  </h3>
                  <p>
                    lktoffoli@gmail.com
                  </p>
                </span>
              </div>

              <div className="socialMedia">
                <FacebookIcon />
                <InstagramIcon />
                <LinkedinIcon />
                <GitHubIcon />
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder='Nome' name="user_name" />
              <input type="email" placeholder='Email' name="user_email" />
              <textarea name="message" placeholder='Digite sua mensagem' />
              <input type="submit" value="Send"/>
            </form>
          </div>
        </div>          
      </div>
    )
  }
export default Contact;