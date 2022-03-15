import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import './translate/i18n';
import { Suspense } from 'react';

function App() {

  return (
    <Suspense fallback={<div>Loading ... </div>}>
      <AuthProvider>
        <BrowserRouter>
          <ToastContainer autoClose={3000} />
          <Routes/>
        </BrowserRouter>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
