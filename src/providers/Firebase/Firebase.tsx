import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import FirebaseContext from './FirebaseContext';
import config from '../../config.json';

interface IFirebaseProps {
  children?: React.ReactNode;
}

function Firebase({ children }: IFirebaseProps) {
  const [database, setDatabase] = useState<firebase.database.Database>();

  const [userId] = useState(() => {
    let userId = localStorage.getItem('user-id');
    if (!userId) {
      userId = Math.random().toString(36).substr(-8);
      localStorage.setItem('user-id', userId);
    }
    return userId;
  })

  useEffect(() => {
    const app = firebase.initializeApp(config.firebase);
    setDatabase(app.database());
  }, []);

  return database ? (
    <FirebaseContext.Provider value={{ database, userId }}>
      {children}
    </FirebaseContext.Provider>
  ) : null;
}

export default Firebase;
