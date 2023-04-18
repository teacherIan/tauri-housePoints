import { db } from './db.js';
import { collection, addDoc } from 'firebase/firestore';

export function addAdmin(name, email, password) {
  try {
    addDoc(collection(db, 'admin'), {
      name: name,
      email: email,
      password: password,
    });
  } catch {
    console.log('Error adding new admin');
  }
}
