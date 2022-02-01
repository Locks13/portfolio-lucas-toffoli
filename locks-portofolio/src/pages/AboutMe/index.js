import Header from "../../components/Header";
import Circle from "../../components/Circle"
import styled from "styled-components";
import Image from "../../assets/eu.jpeg"

import { FacebookIcon, InstagramIcon, LinkedinIcon, GitHubIcon } from "../../components/SocilaMedia"

import './about.css';


function AboutMe() {

    const Wrapper = styled.div`
        max-width:900px;
        margin:0 auto;
        padding:20px;
        display:flex;
        flex-direction:column;
    `

    return (    
      <>
        <Header />
        <Wrapper>
          <div className="aboutme">
            <h1>Sobre mim</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis blandit scelerisque. Duis ultrices est libero, in euismod lectus mollis et. Proin sed arcu ac felis molestie dignissim. Nulla in nisl libero. Sed eu sapien ut libero feugiat tincidunt ac eu massa. Maecenas in tincidunt lorem. Vivamus rutrum metus sit amet tellus porttitor, ac egestas tortor tincidunt. Nunc velit arcu, dictum hendrerit pellentesque et, tempor vel ipsum. Nunc varius bibendum velit ac rutrum. Vivamus et efficitur ex. Vestibulum nunc mauris, aliquam sed euismod ut, lobortis et ligula. Nulla at nulla sapien. Maecenas id semper metus. Ut dignissim nulla non felis vehicula convallis.
            </p>
            <p>
              Vivamus venenatis massa ex. Vivamus magna purus, semper sed elit vitae, laoreet consectetur lorem. Fusce maximus quam quis efficitur gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis posuere placerat nulla, a accumsan massa laoreet rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam turpis, eleifend et magna varius, malesuada molestie felis.
            </p>
            <p>
              Fusce bibendum feugiat dolor eget lobortis. In ante sapien, consequat at nisi eget, lobortis porttitor orci. Nulla condimentum ornare sem, eu porttitor magna consequat sed. Morbi finibus lacus at libero tristique porttitor. Aliquam fermentum purus lobortis metus vestibulum, ac convallis dui faucibus. Maecenas felis eros, iaculis quis iaculis a, congue vitae tellus. Quisque gravida at magna sed imperdiet. Praesent massa ante, tempus a convallis auctor, eleifend ornare nulla. Sed vitae pellentesque erat, vitae eleifend arcu. Sed facilisis, nisi et suscipit porttitor, dui felis iaculis nulla, ut efficitur lectus velit nec neque. Integer et tincidunt orci. Quisque sollicitudin augue quis erat placerat aliquam.
            </p>
            <div className="socialMedia">
              <FacebookIcon />
              <InstagramIcon />
              <LinkedinIcon />
              <GitHubIcon />
            </div>
          </div>

          <div className="knowledge">
            <h1>
              Conhecimentos
            </h1>
            <span>
              <Circle percentage={80} colour={'#181c2e'}  />
              <p>
                React
              </p>
            </span>
            <span>
              <Circle percentage={80} colour={'#181c2e'}  />
              <p>
                React Hooks
              </p>
            </span>
            <span>
              <Circle percentage={80} colour={'#181c2e'}  />
              <p>
                Html
              </p>
            </span>
            <span>
              <Circle percentage={80} colour={'#181c2e'}  />
              <p>
                React
              </p>
            </span>
            <span>
              <Circle percentage={80} colour={'#181c2e'}  />
              <p>
                React Hooks
              </p>
            </span>
            <span>
              <Circle percentage={80} colour={'#181c2e'}  />
              <p>
                Html
              </p>
            </span>
            
          </div>

          <div className="referral">
            <h1>Referência</h1>

            <div className="boxReferral">

              <div className="imgReferral">
                <img src={Image} alt="Nome da Pessoa" />
                <h2>Nome da pessoa</h2>
              </div>

              <div className="depoiment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis blandit scelerisque. Duis ultrices est libero, in euismod lectus mollis et. Proin sed arcu ac felis molestie dignissim. Nulla in nisl libero. Sed eu sapien ut libero feugiat tincidunt ac eu massa. Maecenas in tincidunt lorem. Vivamus rutrum metus sit amet tellus porttitor, ac egestas tortor tincidunt. Nunc velit arcu, dictum hendrerit pellentesque et, tempor vel ipsum. Nunc varius bibendum velit ac rutrum. Vivamus et efficitur ex. Vestibulum nunc mauris, aliquam sed euismod ut, lobortis et ligula. Nulla at nulla sapien. Maecenas id semper metus. Ut dignissim nulla non felis vehicula convallis.
              </div>

              <div className="socialMedia">
                <FacebookIcon />
                <InstagramIcon />
                <LinkedinIcon />
                <GitHubIcon />
              </div>

            </div>
            
          </div>

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

        </Wrapper>
        
      </>
    )
  }
export default AboutMe;