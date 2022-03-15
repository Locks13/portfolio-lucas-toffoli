import { useContext, useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import { AuthContext } from '../../contexts/auth';
import Header from "../../components/Header";
import avatar from '../../assets/avatar.png'
import firebase from '../../services/firebaseConnection';

import './user.css'
import { toast } from 'react-toastify';

function User() {
  const { user, setUser, storageUser } = useContext(AuthContext);

  const [nome, setNome] = useState(user && user.nome);
  const [sobrenome, setSobrenome] = useState(user && user.sobrenome);
  const [cargo, setCargo] = useState(user && user.cargo);
  const [depoimentoBr, setDepoimentoBr] = useState(user && user.depoimentoBr);
  const [depoimentoEn, setDepoimentoEn] = useState(user && user.depoimentoEn);
  const [email] = useState(user && user.email);
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
  const [imageAvatar, setImageAvatar] = useState(null);

  async function handleEditUser(e){
    e.preventDefault()
    if(imageAvatar === null && nome !== '' && sobrenome !== ''){
      await firebase.firestore().collection('users')
      .doc(user.uid)
      .update({
        nome: nome,
        sobrenome: sobrenome,
      })
      .then(() => {
        let data = {
          ...user,
          nome: nome,
          sobrenome: sobrenome,
        };
        setUser(data);
        storageUser(data);
        toast.success('Salvo com sucesso');
      })
    }
    if(cargo !== ''){
      await firebase.firestore().collection('users')
      .doc(user.uid)
      .update({
        cargo: cargo,
      })
      .then(() => {
        let data = {
          ...user,
          cargo: cargo,
        };
        setUser(data);
        storageUser(data);
      })
    }
    if(depoimentoBr !== ''){
      await firebase.firestore().collection('users')
      .doc(user.uid)
      .update({
        depoimentoBr: depoimentoBr,
      })
      .then(() => {
        let data = {
          ...user,
          depoimentoBr: depoimentoBr,
        };
        setUser(data);
        storageUser(data);
      })
    }
    /* if(depoimentoEn !== ''){
      await firebase.firestore().collection('users')
      .doc(user.uid)
      .update({
        depoimentoEn: depoimentoEn,
      })
      .then(() => {
        let data = {
          ...user,
          depoimentoEn: depoimentoEn,
        };
        setUser(data);
        storageUser(data);
      })
    } */
    if(nome !=='' && sobrenome !== '' && imageAvatar !== null){
      handleUplaod();
    }
  }
  async function handleUplaod(){
      const currentUid = user.uid;
      const uploadTask = await firebase.storage()
      .ref(`images/${currentUid}/${imageAvatar.name}`)
      .put(imageAvatar)
      .then( async ()=>{
        toast.success('Imagem enviada com sucesso');

        await firebase.storage().ref(`images/${currentUid}`)
        .child(imageAvatar.name).getDownloadURL()
        .then( async (url) => {
          let urlFoto = url;

          await firebase.firestore().collection('users')
          .doc(user.uid)
          .update({
            avatarUrl:urlFoto,
          })
          .then(()=>{
            let data = {
              ...user,
              avatarUrl:urlFoto,
            };
            setUser(data);
            storageUser(data);
          })
        })
      })
  }

  function handeFile(e){
    if(e.target.files[0]){
      const imageUser = e.target.files[0];
      if(imageUser.type === 'image/jpeg' || imageUser.type === 'image/png' ){
        setImageAvatar(imageUser);
        setAvatarUrl(URL.createObjectURL(e.target.files[0]));
      }else{
        toast.error('Tipo da imagem inválido');
        setImageAvatar(null);
        return null;
      }
    }
  }

  return (
    <>
      <Header/>

      <div className='wrapper'>

        <div className='logout'>
          <h1>Bem vindo {user.nome}</h1>
        </div>

        <div className='holder-user-infos'>

          <form className="user-profile" onSubmit={handleEditUser}>
            <label className="label-avatar">
              <span className="user-avatar">
                <FiUpload />
                {avatarUrl == null ? 
                <img src={avatar} alt={user.nome} />
                : <img src={avatarUrl} alt={user.nome} />
                }
                <input type="file" accept="image/*" onChange={handeFile} />
              </span>

              <div className='holder-inputs'>
                <div className='input-form'>
                  <label className="user-nome">
                    Nome
                  </label>
                  <input type='text' value={nome} onChange={ (e) => setNome(e.target.value) } />
                </div>

                <div className='input-form'>
                  <label className="user-sobrenome">
                    Sobrenome
                  </label>
                  <input type='text' value={sobrenome} onChange={ (e) => setSobrenome(e.target.value) } />
                </div>

                <div className='input-form'>
                  <label className="user-nome">
                    Cargo
                  </label>
                  <input type='text' value={cargo} onChange={ (e) => setCargo(e.target.value) } />
                </div>

                <div className='input-form'>
                  <label className="user-nome">
                    Email
                  </label>
                  <input type='email' value={email} disabled />
                </div>
                
              </div>
              
              <h2 className="user-depoimento">
                Depoimentos
              </h2>

              <label>
                Depoimento em Português
              </label>
              <textarea type='text' value={depoimentoBr} onChange={ (e) => setDepoimentoBr(e.target.value) } />
                            
              {/* <label>
                Testimonial in English
              </label>
              <textarea type='text' value={depoimentoEn} onChange={ (e) => setDepoimentoEn(e.target.value) } /> */}


              <button type="submit">Salvar</button>

            </label>
          </form>

        </div>
      </div>
        
    </>
  );
}

export default User;