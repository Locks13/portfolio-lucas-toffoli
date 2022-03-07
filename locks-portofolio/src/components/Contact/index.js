import Image from "../../assets/eu.jpeg"

import './contact.css';


function Contact() {

    return (    
      <div className="holder-contact">
        <div className="contact">
            <h1>Contato</h1>
            <div>
              <img src={Image} alt="Lucas Toffoli" />
              <span>
                <h2>
                  Telefone:
                </h2>
                <p>
                  +55 (11) 98224-7422
                </p>
              </span>

              <span>
                <h2>
                  Email:
                </h2>
                <p>
                  lktoffoli@gmail.com
                </p>
              </span>

            </div>
          </div>        
      </div>
    )
  }
export default Contact;