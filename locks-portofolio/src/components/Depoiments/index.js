import { useState, useEffect, useContext } from "react";
import firebase from '../../services/firebaseConnection';
import avatar from '../../assets/avatar.png'
import './depoiments.css';

import { AuthContext } from "../../contexts/auth";


function Depoiments() {

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

    return (    
      <>

        <div className="referral">
            <h1>Referência</h1>
              {userDepoimento.map((item) => {
                return(
                  <div key={item.id} className="boxReferral">

                    <div className="imgReferral">
                    {item.avatarUrl == null ? 
                      <img src={avatar} alt={user.nome} />
                      : <img src={item.avatarUrl} alt={user.nome} />
                      }
                      <h2>{item.nome} {item.sobrenome}</h2>
                    </div>

                    <div className="depoiment">
                      {item.depoimentoBr}
                    </div>

                    <div className="depoiment">
                      {item.cargo}
                    </div>

                  </div>
                )              
              })}
            
          </div>
        
      </>
    )
  }
export default Depoiments;