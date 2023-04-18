import { GiReturnArrow } from 'react-icons/gi';
import { motion } from 'framer-motion';
import styles from './returnButton.module.css';

export default function ReturnButton({ setMenuState }) {
  return (
    <motion.div
      className={styles.button}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.i
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setMenuState(-1)}
      >
        <GiReturnArrow />
        <br />
        Go Back
      </motion.i>
    </motion.div>
  );
}
