import Header from "../../components/Header";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

function User() {
  const { signOut } = useContext(AuthContext);

  return (
    <>
      <Header/>
      <div>
        <h1>PAGINA User</h1>
        <button onClick={ () => signOut() }>Fazer logout</button>
      </div>
    </>
  );
}

export default User;