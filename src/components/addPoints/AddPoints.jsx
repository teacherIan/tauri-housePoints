import styles from './addPoints.module.css';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { db } from '../../db/db.js';
import { collection, addDoc } from 'firebase/firestore';
import { UserAuth } from '../../context/AuthContext';
import ReturnButton from '../buttons/ReturnButton';
import { serverTimestamp } from 'firebase/firestore';
import students from '../../../studentList';
import Students from './Students';

const hover = {
  backgroundColor: '#DFBBB1',
  color: '#373F51',
  scale: 1.1,
  // border: `#373F51 5px solid`,
  opacity: 1,
};

export default function AddPoints({ setMenuState }) {
  const [disabled, setDisabled] = useState(false);
  const submitButtonRef = useRef();
  const maleRef = useRef();
  const femaleRef = useRef();
  const nameRef = useRef();
  const gradeRef = useRef();
  const genderRef = useRef();
  const houseRef = useRef();
  const rubyRef = useRef();
  const amberRef = useRef();
  const pearlRef = useRef();
  const sapphireRef = useRef();
  const [name, setName] = useState('');
  const [competition, setCompetition] = useState('');
  const [points, setPoints] = useState(0);
  const [otherInfo, setOtherInfo] = useState('');
  const [house, setHouse] = useState('');
  const [grade, setGrade] = useState('');
  const [gender, setGender] = useState('');
  const [selectStudents, setSelectStudents] = useState(false);

  const { user, logout, loggedIn, setLoggedIn, loading } = UserAuth();

  const handleGetData = (e) => {
    e.preventDefault();
    setSelectStudents(true);
  };

  async function formSubmit(e) {
    e.preventDefault();
    setDisabled(true);

    try {
      await addDoc(collection(db, 'points'), {
        name: name,
        competition: competition,
        points: points,
        otherInfo: otherInfo,
        house: house,
        givenBy: user.email,
        grade: grade,
        created: serverTimestamp(),
        gender: gender,
      });
      alert('Points Added successfully!');
      setName('');
      setCompetition('');
      setPoints('');
      setOtherInfo('');
      setHouse('');
      setGrade('');
      setMenuState(-1);
      setDisabled(false);
    } catch (e) {
      console.log('Error adding document: ', e);
    }
  }

  return (
    <>
      {selectStudents ? (
        <div className={styles.listContainer}>
          <Students
            nameRef={nameRef}
            setName={setName}
            setSelectStudents={setSelectStudents}
            setGrade={setGrade}
            gradeRef={gradeRef}
            setHouse={setHouse}
            rubyRef={rubyRef}
            amberRef={amberRef}
            pearlRef={pearlRef}
            sapphireRef={sapphireRef}
            maleRef={maleRef}
            femaleRef={femaleRef}
            setGender={setGender}
          />
        </div>
      ) : null}
      <ReturnButton setMenuState={setMenuState} />
      <motion.section className={styles.container} animate={{ opacity: 1 }}>
        <motion.header animate={{ opacity: 1 }}>Add Points</motion.header>

        <motion.form animate={{ opacity: 1 }}>
          <motion.button onClick={handleGetData} whileHover={hover}>
            Query Name, Age, Gender, House from Database
          </motion.button>
          <label className={styles.label}>
            Athletes Name:
            <input
              ref={nameRef}
              bind:value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.textInput}
              type="text"
            />
          </label>
          <label className={styles.label}>
            Event:
            <input
              onChange={(e) => setCompetition(e.target.value)}
              className={styles.textInput}
              type="text"
            />
          </label>
          <label className={styles.label}>
            Points Awarded:
            <input
              onChange={(e) => setPoints(e.target.value)}
              className={styles.textInput}
              type="number"
            />
          </label>
          <label className={styles.label}>
            Grade:
            <input
              onChange={(e) => setGrade(e.target.value)}
              className={styles.textInput}
              type="text"
              ref={gradeRef}
            />
          </label>
          <label className={styles.label}>
            Other Information:
            <input
              onChange={(e) => setOtherInfo(e.target.value)}
              className={styles.textInput}
              type="text"
            />
          </label>
          <div className={styles.houseLabel}>House:</div>
          <label className={styles.label}>
            Ruby:
            <input
              ref={rubyRef}
              onClick={(e) => setHouse(e.target.value)}
              className={styles.radioInput}
              type="radio"
              value="Ruby"
              name="house"
            />
            Amber:
            <input
              ref={amberRef}
              onClick={(e) => setHouse(e.target.value)}
              className={styles.radioInput}
              type="radio"
              value="Amber"
              name="house"
            />
            Pearl:
            <input
              ref={pearlRef}
              onClick={(e) => setHouse(e.target.value)}
              className={styles.radioInput}
              type="radio"
              value="Pearl"
              name="house"
            />
            Sapphire:
            <input
              ref={sapphireRef}
              onClick={(e) => setHouse(e.target.value)}
              className={styles.radioInput}
              type="radio"
              value="Sapphire"
              name="house"
            />
          </label>
          <div className={styles.houseLabel}>Gender:</div>
          <label>
            Male:
            <input
              ref={maleRef}
              onClick={(e) => setGender(e.target.value)}
              className={styles.radioInput}
              type="radio"
              value="Male"
              name="gender"
            />
            Female:
            <input
              ref={femaleRef}
              onClick={(e) => setGender(e.target.value)}
              className={styles.radioInput}
              type="radio"
              value="Female"
              name="gender"
            />
          </label>
          <motion.button
            disabled={disabled}
            ref={submitButtonRef}
            onClick={formSubmit}
            whileHover={hover}
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.section>
    </>
  );
}
