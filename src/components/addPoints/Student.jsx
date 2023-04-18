import styles from './student.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Student({
  house,
  student_ID,
  last_name,
  first_name,
  setSelectStudents,
  setName,
  nameRef,
  gradeRef,
  setGrade,
  grade,
  rubyRef,
  amberRef,
  pearlRef,
  sapphireRef,
  setHouse,
  maleRef,
  femaleRef,
  gender,
  setGender,
}) {
  const [selected, setSelected] = useState(false);
  const [hovered, setHovered] = useState(false);

  const hover = {
    backgroundColor: '#DFBBB1',
    color: '#373F51',
    scale: 1.1,
    // border: `#DFBBB1 5px solid`,
    // opacity: 1,
  };

  const handleHover = () => {
    setHovered(true);
  };

  const handleClick = () => {
    setName(`${first_name} ${last_name}`);
    setSelectStudents(false);
    nameRef.current.value = `${first_name} ${last_name}`;
    gradeRef.current.value = grade;
    setGrade(grade);
    if (house === 'Ruby') {
      rubyRef.current.checked = true;
      setHouse('Ruby');
    }
    if (house === 'Amber') {
      amberRef.current.checked = true;
      setHouse('Amber');
    }
    if (house === 'Pearl') {
      pearlRef.current.checked = true;
      setHouse('Pearl');
    }
    if (house === 'Sapphire') {
      sapphireRef.current.checked = true;
      setHouse('Sapphire');
    }

    if (gender === 'Male') {
      maleRef.current.checked = true;
      setGender('Male');
    }
    if (gender === 'Female') {
      femaleRef.current.checked = true;
      setGender('Female');
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      onMouseLeave={() => setHovered(false)}
      whileHover={handleHover}
      className={styles.studentContainer}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div className={hovered ? styles.hovered : null}>
        {first_name}
      </motion.div>
      <motion.div className={hovered ? styles.hovered : null}>
        {last_name}
      </motion.div>
      <motion.div className={hovered ? styles.hovered : null}>
        {house}
      </motion.div>
      <motion.div className={hovered ? styles.hovered : null}>
        {student_ID}
      </motion.div>
    </motion.div>
  );
}
