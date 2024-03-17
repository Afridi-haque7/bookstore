import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";



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


export const FirebaseProvider = (props) => {
    return (
        <FirebaseContext.Provider>
            { props.children }
        </FirebaseContext.Provider>
    )
};