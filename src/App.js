// import {getDatabase, ref, set} from "firebase/database";
// import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
// import {app} from "./firebase";
import './App.css';
import SignupPage from './pages/Signup';

// const db = getDatabase(app);

function App() {
  // const putData = () => {
  //   const db = getDatabase(app);
  //   set(ref(db, 'users/afridi'), {
  //     id: 1,
  //     name: "Afridi",
  //     age: 21,
  //   });
  // };

  // const auth = getAuth(app);
  // const signupUser = () => {
  //   createUserWithEmailAndPassword(auth, "afridi@gmail.com", "afridi@123").then((value) => {
  //     console.log(value);
  //   });
  // };


  return (
    <div className="App">
      <h1>Bookstore</h1>
      <SignupPage />
    </div>
  );
}

export default App;
