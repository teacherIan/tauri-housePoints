import students from '../../../studentList.js';
import { useState, useEffect } from 'react';
import Student from './Student';
import { motion } from 'framer-motion';

let localData = students.sort((a, b) =>
  a.First_Name.localeCompare(b.First_Name)
);

export default function Students({
  setName,
  setSelectStudents,
  nameRef,
  gradeRef,
  setGrade,
  rubyRef,
  amberRef,
  pearlRef,
  sapphireRef,
  maleRef,
  femaleRef,
  setHouse,
  setGender,
}) {
  const hover = {
    backgroundColor: '#DFBBB1',
    color: '#373F51',
    scale: 1.1,
    // border: `#373F51 5px solid`,
    opacity: 1,
  };

  console.log(rubyRef.current.checked);
  //student => House, Student_ID, Last_Name, First_Name Gender Grade Homeroom

  return (
    <motion.ul>
      <motion.button
        onClick={() => setSelectStudents(false)}
        whileHover={hover}
      >
        X
      </motion.button>
      {localData.map((student, index) => {
        return (
          <Student
            setName={setName}
            setSelectStudents={setSelectStudents}
            key={index}
            house={student.House}
            student_ID={student.Student_ID}
            last_name={student.Last_Name}
            first_name={student.First_Name}
            nameRef={nameRef}
            setGrade={setGrade}
            gradeRef={gradeRef}
            grade={student.Grade}
            rubyRef={rubyRef}
            amberRef={amberRef}
            pearlRef={pearlRef}
            sapphireRef={sapphireRef}
            setHouse={setHouse}
            maleRef={maleRef}
            femaleRef={femaleRef}
            gender={student.Gender}
            setGender={setGender}
          />
        );
      })}
    </motion.ul>
  );
}
