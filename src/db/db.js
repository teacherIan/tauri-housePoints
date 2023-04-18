import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// import { addAdmin } from './addAdmin.js';

const firebaseConfig = {
  apiKey: 'AIzaSyC2X0pHx-BINAI9ecp1jEcr15imVCGEd7c',
  authDomain: 'house-points-882ac.firebaseapp.com',
  projectId: 'house-points-882ac',
  storageBucket: 'house-points-882ac.appspot.com',
  messagingSenderId: '970622774265',
  appId: '1:970622774265:web:bab2c4483f7ad6cd336b28',
  measurementId: 'G-J315L959B4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
