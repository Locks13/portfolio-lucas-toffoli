import { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';

function SignUp() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext);
  let history = useHistory();

  async function handleSubmit(e){
    e.preventDefault();
    
    if(nome !== '' && sobrenome !== '' && email !== '' && password !== ''){
      await signUp(email, password, nome, sobrenome);
      history.push("./user");
    }

  }
  
  return (
    <>
      <Header />
      <div className="container-center">
        <div className="login">

          <form onSubmit={handleSubmit}>
            <h1>Cadastrar uma conta</h1>
            <input type="text" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input type="text" placeholder="Seu Sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
            <input type="text" placeholder="email@email.com" value={email} onChange={ (e) => setEmail(e.target.value) }/>
            <input type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value) } />
            <button type="submit">{loadingAuth ? 'Carregando...' : 'Cadastrar'}</button>
          </form>  

          <Link to="./signin">Já tem uma conta? Entre</Link>
        </div>
      </div>
    </>
  );
}

export default SignUp;