import "./App.css";
import app from "./firebase/firebase.init";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [user, setUser] = useState({});

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;

        setUser(user);

        console.log(user);
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .error(() => {
        setUser({});
      });
  };

  const handleGithubSignIn = () =>{
  signInWithPopup(auth, githubProvider)
  .then(result =>{
    const user = result.user;
    setUser(user);

    console.log(user)
  })
  .catch( error =>{
    console.log('error', error);
  })
  }
  return (
    <div className="app">
      {/* condition ? true : false */}
      {user.uid ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <div>
          <button onClick={handleGoogleSignIn}>Goole Sign In</button>
          <button onClick={handleGithubSignIn}>Github Sign In</button>
        </div>
      )}
      {user.uid && (
        <>
          <h3>User name: {user.displayName}</h3>
          <p>Email address: {user.email}</p>
          <p>{user.photoURL}</p>
        </>
      )}
    </div>
  );
}

export default App;
