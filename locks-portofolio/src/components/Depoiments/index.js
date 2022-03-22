import { useState, useEffect, useContext } from "react";
import firebase from '../../services/firebaseConnection';
import avatar from '../../assets/avatar.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './depoiments.css';
import Slider from "react-slick";
import '../../translate/i18n';
import { useTranslation } from "react-i18next";


import { AuthContext } from "../../contexts/auth";


function Depoiments() {

  const { t } = useTranslation();

  const [userDepoimento, setUserDepoimento] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function depoimentoUser(){
      await firebase.firestore().collection('users')
      .get()
      .then((snapshot) => {
        let lista = [];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            nome: doc.data().nome,
            sobrenome: doc.data().sobrenome,
            cargo: doc.data().cargo,
            avatarUrl: doc.data().avatarUrl,
            depoimentoBr: doc.data().depoimentoBr,
            depoimentoEn: doc.data().depoimentoEn
          })
        })
        if(lista.length === 0){
          console.log('Sem Usuarios');
        }
        setUserDepoimento(lista)
      })
      .catch((error) => {
        console.log('Algum erro');
        setUserDepoimento([])
      })
    }
    depoimentoUser();
  }, [])

  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="holder-referral">
      <div className="referral" id="depoimentos" >
        <h1>{t('depoimento.title')}</h1>
        {userDepoimento.length === 0 ? (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          ) : (
          <Slider {...settings}>
            {userDepoimento.map((item) => (
              <div key={item.id} className="boxReferral">
                <div className="imgReferral">
                  <img
                    className="rounded-circle"
                    alt={item.nome}
                    src={item.avatarUrl == null ? avatar : item.avatarUrl}
                  />
                  <h2>{item.nome} {item.sobrenome}</h2>
                </div>
                <div className="depoiment">
                  {item.depoimentoBr}
                </div>
                <div className="depoiment">
                  {item.cargo}
                </div>
              </div>
              ))}
            </Slider>
          )}
      </div>
    </div>
  )
}
export default Depoiments;