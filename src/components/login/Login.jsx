import { motion } from 'framer-motion';
import { UserAuth } from '../../context/AuthContext';
import { useState } from 'react';

export default function Login({ setMenuState, setLoggedIn }) {
  const { user, logout, signIn } = UserAuth();

  //states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const hover = {
    backgroundColor: '#DFBBB1',
    color: '#373F51',
    scale: 1.1,
    // border: `#373F51 5px solid`,
    opacity: 1,
  };

  // console.log(user);

  // useEffect(() => {
  //   return () => {
  //     logout();
  //   };
  // }, []);

  const clickHandler = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      setMenuState(-1);
      setLoggedIn(true);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      alert('email/password incorrect');
    }
  };

  return (
    <motion.section animate={{ opacity: 1 }}>
      <motion.header animate={{ opacity: 1 }}>Login</motion.header>

      <motion.form animate={{ opacity: 1 }}>
        <label>
          Email:
          <input onChange={(e) => setEmail(e.target.value)} type="email" />
        </label>
        <label>
          Password:
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </label>
        <motion.button whileHover={hover} onClick={clickHandler}>
          Submit
        </motion.button>
      </motion.form>
    </motion.section>
  );
}
