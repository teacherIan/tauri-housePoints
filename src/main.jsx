import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import './index.css';
import UserInformation from './components/userInformation/UserInformation';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserInformation />
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
