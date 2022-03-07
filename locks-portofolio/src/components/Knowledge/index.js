import Circle from "../../components/Circle";
import {FaReact, FaHtml5, FaCss3Alt, FaGithub} from 'react-icons/fa';
import {RiKakaoTalkFill, RiTeamFill} from 'react-icons/ri';
import {AiFillProject} from 'react-icons/ai';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './knowledge.css';

function Knowledge() {

  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (    
    <div className="holder-knowledge">
      <div className="knowledge">
          <h1>
            Conhecimentos
          </h1>
          <Slider {...settings}>
            <span>
              <Circle percentage={70} colour={'#181c2e'}  />
              <p>
                React
              </p>
              <FaReact className="icon" />
            </span>
            <span>
              <Circle percentage={80} colour={'#005200'}  />
              <p>
                Html
              </p>
              <FaHtml5 className="icon" />
            </span>
            <span>
              <Circle percentage={80} colour={'#580000'}  />
              <p>
                CSS
              </p>
              <FaCss3Alt className="icon" />
            </span>
            <span>
              <Circle percentage={60} colour={'#8f8c01'}  />
              <p>
                GitHub
              </p>
              <FaGithub className="icon" />
            </span>
            <span>
              <Circle percentage={80} colour={'#181c2e'}  />
              <p>
                English
              </p>
              <RiKakaoTalkFill className="icon" />
            </span>
            <span>
              <Circle percentage={65} colour={'#005200'}  />
              <p>
                Gerenciamento de Projetos
              </p>
              <AiFillProject className="icon" />
            </span>
            <span>
              <Circle percentage={70} colour={'#580000'}  />
              <p>
                Gerenciamento de Equipe
              </p>
              <RiTeamFill className="icon" />
            </span>
          </Slider>
          
            
        </div>
      
    </div>
  )
}
export default Knowledge;