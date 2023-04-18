import styles from './points.module.css';
import { GiReturnArrow } from 'react-icons/gi';
import DataPoint from './event/DataPoint';
import ReturnButton from '../buttons/ReturnButton.jsx';
import { motion } from 'framer-motion';
import { onSnapshot, doc, collection } from 'firebase/firestore';
import { db } from '../../db/db.js';
import { useState, useEffect } from 'react';

const hover = {
  backgroundColor: '#DFBBB1',
  color: '#373F51',
  scale: 1.1,
  // border: `#373F51 5px solid`,
  opacity: 1,
};

export default function Points({ setViewPoints, setMenuState }) {
  const [data, setData] = useState([]);
  const [rubyPoints, setRubyPoints] = useState(0);
  const [amberPoints, setAmberPoints] = useState(0);
  const [pearlPoints, setPearlPoints] = useState(0);
  const [sapphirePoints, setSapphirePoints] = useState(0);
  const [gender, setGender] = useState('Both');
  const [house, setHouse] = useState('All');

  useEffect(() => {
    const data = [];
    setData([]);

    let localSapphirePoints = 0;
    let localAmberPoints = 0;
    let localPearlPoints = 0;
    let localRubyPoints = 0;
    const unsubscribe = onSnapshot(
      collection(db, 'points'),
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
          if (doc.data().house === 'Ruby') {
            let points = parseInt(doc.data().points);
            localRubyPoints += points;
          } else if (doc.data().house === 'Amber') {
            let points = parseInt(doc.data().points);
            localAmberPoints += points;
          } else if (doc.data().house === 'Pearl') {
            let points = parseInt(doc.data().points);
            localPearlPoints += points;
          } else if (doc.data().house === 'Sapphire') {
            let points = parseInt(doc.data().points);
            localSapphirePoints += points;
          }
        }),
          data.sort((a, b) => b.created - a.created);
        setData(data);
        setSapphirePoints(localSapphirePoints);
        setAmberPoints(localAmberPoints);
        setPearlPoints(localPearlPoints);
        setRubyPoints(localRubyPoints);

        return () => unsubscribe();
      }
    );
  }, []);

  return (
    <>
      <ReturnButton setMenuState={setMenuState} />

      <motion.section className={styles.container} animate={{ opacity: 1 }}>
        <div className={styles.pointsData}>
          <div>Ruby: {rubyPoints}</div>
          <div>Amber: {amberPoints}</div>
          <div>Pearl: {pearlPoints}</div>
          <div>Sapphire: {sapphirePoints}</div>
        </div>
        <div className={styles.houseLabel}>Query Data</div>
        <div className={styles.houseLabel}>House:</div>
        <label className={styles.label}>
          All:
          <input
            onClick={(e) => setHouse(e.target.value)}
            defaultChecked
            className={styles.radioInput}
            type="radio"
            value="All"
            name="house"
          />
          Ruby:
          <input
            onClick={(e) => setHouse(e.target.value)}
            className={styles.radioInput}
            type="radio"
            value="Ruby"
            name="house"
          />
          Amber:
          <input
            onClick={(e) => setHouse(e.target.value)}
            className={styles.radioInput}
            type="radio"
            value="Amber"
            name="house"
          />
          Pearl:
          <input
            onClick={(e) => setHouse(e.target.value)}
            className={styles.radioInput}
            type="radio"
            value="Pearl"
            name="house"
          />
          Sapphire:
          <input
            onClick={(e) => setHouse(e.target.value)}
            className={styles.radioInput}
            type="radio"
            value="Sapphire"
            name="house"
          />
        </label>
        <div className={styles.houseLabel}>Gender:</div>
        <label>
          Both:
          <input
            defaultChecked
            onClick={(e) => setGender(e.target.value)}
            className={styles.radioInput}
            type="radio"
            value="Both"
            name="gender"
          />
          Male:
          <input
            onClick={(e) => setGender(e.target.value)}
            className={styles.radioInput}
            type="radio"
            value="Male"
            name="gender"
          />
          Female:
          <input
            onClick={(e) => setGender(e.target.value)}
            className={styles.radioInput}
            type="radio"
            value="Female"
            name="gender"
          />
        </label>
        {data.map((data, index) => {
          {
            return (house === 'All' && gender === 'Both') ||
              (house === 'All' && gender === data.gender) ||
              (house === data.house && gender === data.gender) ||
              (house === data.house && gender === 'Both') ? (
              <DataPoint
                key={index}
                competition={data.competition}
                givenBy={data.givenBy}
                house={data.house}
                name={data.name}
                otherInfo={data.otherInfo}
                points={data.points}
                grade={data.grade}
                created={data.created}
                gender={data.gender}
                rubyPoints={rubyPoints}
                amberPoints={amberPoints}
                pearlPoints={pearlPoints}
                sapphirePoints={sapphirePoints}
              />
            ) : null;
          }
        })}
      </motion.section>
    </>
  );
}
