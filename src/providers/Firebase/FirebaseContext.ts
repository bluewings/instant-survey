import { createContext } from 'react';
import firebase from 'firebase/app';

export default createContext<{
  database?: firebase.database.Database;
  userId: string;
}>({
  database: undefined,
  userId: '',
});
