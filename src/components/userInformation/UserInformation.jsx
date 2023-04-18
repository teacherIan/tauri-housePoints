import style from './userInformation.module.css';
import { motion } from 'framer-motion';
import { UserAuth } from '../../context/AuthContext';
import { useState } from 'react';

export default function UserInformation() {
  const { user, logout } = UserAuth();

  console.log(user);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={false}
      className={style.container}
    >
      <motion.div
        animate={{ opacity: 1 }}
        initial={false}
        className={style.text}
      >
        Logged In As: <br /> {user === null ? null : user.email}
      </motion.div>
    </motion.div>
  );
}
