import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import './translate/i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './translate/i18n'

function App() {

  return (
    <I18nextProvider i18n={i18n}>
      <AuthProvider>
        <BrowserRouter>
          <ToastContainer autoClose={3000} />
          <Routes/>
        </BrowserRouter>
      </AuthProvider>
    </I18nextProvider>
  );
}

export default App;
