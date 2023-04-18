import style from './App.module.css';
import AddAdmin from '../src/components/addAdmin/AddAdmin.jsx';
import Points from './components/viewPoints/Points.jsx';
import { useState } from 'react';
import AddPoints from './components/addPoints/AddPoints';
import { motion } from 'framer-motion';
import ViewAdmin from './components/viewAdmin/ViewAdmin.jsx';
import Login from './components/login/Login.jsx';
import { UserAuth } from './context/AuthContext';

function App() {
  //controls which 'page' is currently being shown
  const [menuState, setMenuState] = useState(-1);
  //user state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const [loggedIn, setLoggedIn] = useState(false);

  const { user, logout, loggedIn, setLoggedIn, loading } = UserAuth();

  const handleLoggedInState = async () => {
    if (loggedIn) {
      try {
        await logout();

        console.log('Working');
        setLoggedIn(false);
      } catch (e) {
        console.log(e.message);
      }
      console.log('currently Logged In');
      setLoggedIn(false);
    }

    if (!loggedIn) {
      console.log('This is running');
      setMenuState(0);
    }
  };

  const hover = {
    backgroundColor: '#DFBBB1',
    color: '#373F51',
    scale: 1.1,
    // border: `#373F51 5px solid`,
    opacity: 1,
  };

  return (() => {
    switch (menuState) {
      case 0:
        return <Login setMenuState={setMenuState} setLoggedIn={setLoggedIn} />;

      case 1:
        return <AddAdmin setMenuState={setMenuState} />;

      case 2:
        return <ViewAdmin setMenuState={setMenuState} />;

      case 3:
        return <AddPoints setMenuState={setMenuState} />;

      case 4:
        return <Points setMenuState={setMenuState} />;

      default:
        return (
          <motion.section animate={{ opacity: 1 }}>
            <motion.header animate={{ opacity: 1 }}>House Points</motion.header>
            {/** Login/Logout */}
            {!loggedIn ? (
              <motion.button
                disabled={loading}
                whileHover={hover}
                className={style.button}
                onClick={handleLoggedInState}
              >
                Log In
              </motion.button>
            ) : (
              <motion.button
                whileHover={hover}
                className={style.button}
                onClick={handleLoggedInState}
              >
                Log Out
              </motion.button>
            )}

            {/** Add Admin */}
            <motion.button
              whileHover={hover}
              className={style.button}
              onClick={() => setMenuState(1)}
              disabled={!loggedIn}
            >
              Add Admin
            </motion.button>

            {/** View/Delete Admin */}
            <motion.button
              onClick={() => setMenuState(2)}
              whileHover={hover}
              className={style.button}
              disabled={!loggedIn}
            >
              View/Delete Admin
            </motion.button>

            {/** Add Points */}
            <motion.button
              whileHover={hover}
              className={style.button}
              onClick={() => setMenuState(3)}
              disabled={!loggedIn}
            >
              Add Points
            </motion.button>
            {/** View/Delete Points */}
            <motion.button
              whileHover={hover}
              className={style.button}
              onClick={() => setMenuState(4)}
              disabled={!loggedIn}
            >
              View/Delete Points
            </motion.button>
          </motion.section>
        );
    }
  })();
}

export default App;
