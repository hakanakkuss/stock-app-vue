import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebaseConfig';

const auth = getAuth(app);

export const register = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

// export const logout = async () => {
//     return signOut(auth);
// };
