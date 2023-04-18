import { useState } from 'react';
import { db } from '../../db/db.js';
import { collection, addDoc } from 'firebase/firestore';
import { GiReturnArrow } from 'react-icons/gi';
// import './addAdmin.css';
import { motion } from 'framer-motion';
import styles from './addAdmin.module.css';
import { UserAuth } from '../../context/AuthContext.jsx';
import ReturnButton from '../buttons/ReturnButton.jsx';

export default function AddAdmin({ setMenuState }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { createUser } = UserAuth();

  function updateName(e) {
    setName(e.target.value);
  }

  function updateEmail(e) {
    setEmail(e.target.value);
  }

  function updatePassword(e) {
    setPassword(e.target.value);
  }

  function formSubmit(e) {
    e.preventDefault();
  }

  async function updateDatabase() {
    if (name.length < 3) {
      alert('Please enter a valid name');
      return;
    } else if (email.length < 5) {
      alert('Please enter a valid email');
      return;
    } else if (password.length < 6) {
      alert('Password length much be >= 6 characters long');
      return;
    } else {
      try {
        createUser(email, password, name);
        alert('successfully Added New Admin');
        setEmail('');
        setName('');
        setPassword('');
        setMenuState(-1);
      } catch (e) {
        console.log(e);
        alert('Failed to add new Admin');
      }
    }
  }

  return (
    <>
      <ReturnButton setMenuState={setMenuState} />
      <motion.section animate={{ opacity: 1 }}>
        <motion.header animate={{ opacity: 1 }}>Add New Admin</motion.header>

        <motion.form animate={{ opacity: 1 }} onSubmit={formSubmit}>
          <label>
            Name:
            <input onChange={updateName} value={name} type="text" />
          </label>
          <label>
            Email:
            <input onChange={updateEmail} value={email} type="email" />
          </label>
          <label>
            Password:
            <input onChange={updatePassword} value={password} type="password" />
          </label>
          <motion.button
            whileHover={{
              backgroundColor: '#DFBBB1',
              color: '#373F51',
              scale: 1.01,
              // outlineColor: '#373F51',
            }}
            onClick={updateDatabase}
          >
            Add
          </motion.button>
        </motion.form>
      </motion.section>
    </>
  );
}
