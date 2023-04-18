import styles from './viewAdmin.module.css';
import { motion } from 'framer-motion';
import { GiReturnArrow } from 'react-icons/gi';
import ReturnButton from '../buttons/ReturnButton';

export default function ViewAdmin({ setMenuState }) {
  return (
    <>
      <ReturnButton setMenuState={setMenuState} />
      <div className={styles.center}>You do not have access to view admin</div>
    </>
  );
}
