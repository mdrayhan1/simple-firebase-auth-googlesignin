import "./App.css";
import app from "./firebase/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState({});

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

  const handleSignOut = () =>{
    signOut(auth)
    .then(() =>{
      setUser({});
    })
    .error(() =>{
      setUser({});

    })
  }
  return (
    <div className="app">
      {/* condition ? true : false */}
      {user.email ?
        <button onClick={handleSignOut}>Sign out</button>
        :
        <button onClick={handleGoogleSignIn}>Goole Sign In</button>
      }
      {user.email && <div>
        <h3>User name: {user.displayName}</h3>
        <p>Email address: {user.email}</p>
      </div>}
    </div>
  );
}

export default App;
