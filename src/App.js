import "./App.css";
import app from "./firebase/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();
  



  

  const [user, setUser]= useState({})





  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;



        setUser(user);



        console.log(user);
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };

  return (
    <div className="app">
      <button onClick={handleGoogleSignIn}>Goole Sign In</button>
      <div>



        <h3>User name: {user.displayName}</h3>
        <p>Email address: {user.email}</p>




      </div>
    </div>
  );
}

export default App;
