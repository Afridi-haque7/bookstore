import React, { useState } from "react";
import { createContext, useContext, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup,
    onAuthStateChanged 
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";





const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyBnf0eH4l5ueCsyakn90juGGcmHRbQrCWg",
  authDomain: "react-bookstore-a8ceb.firebaseapp.com",
  projectId: "react-bookstore-a8ceb",
  storageBucket: "react-bookstore-a8ceb.appspot.com",
  messagingSenderId: "2584905227",
  appId: "1:2584905227:web:bd4492504b963761fca90e",
  databaseURL: "https://react-bookstore-a8ceb-default-rtdb.firebaseio.com",
};

export const useFirebase = () => useContext(FirebaseContext);

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);


export const FirebaseProvider = (props) => {

    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if(user) setUser(user);
            else    setUser(null);
        });
    }, []);

  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password).then((value) =>
      console.log(value)
    );

    const loginWithEmailAndPassword = (email, password) =>
      signInWithEmailAndPassword(firebaseAuth, email, password).then((value) => 
      console.log(value)
    );

    const signinWithGoogle = () => {
        signInWithPopup(firebaseAuth, googleProvider);
    }

    const handleCreateNewListing = async (name, isbn, price, cover) => {
      const imageRef = ref(storage, `uploads/images/${Date.now()}-${cover.name}`);
      const uploadResult = await uploadBytes(imageRef, cover);
      return await addDoc(collection(firestore, 'books'), {
        name,
        isbn,
        price,
        imageURL: uploadResult.ref.fullPath,
        userID: user.uid,
        userEmail: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
    };

    const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        loginWithEmailAndPassword,
        signinWithGoogle,
        isLoggedIn,
        handleCreateNewListing,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
