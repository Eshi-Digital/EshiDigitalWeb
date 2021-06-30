import firebase from "firebase/app";
import "firebase/auth";
import React, { useEffect, useState } from "react";

import AdminDashboard from "../admin/dashboard";

const LoginPage = () => {
  const [auth, setAuth] = useState(
    false && window.localStorage.getItem("eshipassed") === "true"
  );
  const [token, setToken] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userCred) => {
      if (userCred) {
        setAuth(true);
        //window.localStorage.setItem("eshipassed", "true");
        userCred.getIdToken().then((token) => {
          console.log(token);
          setToken(token);
        });
      }
    });
  }, []);

  const loginWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCred) => {
        if (userCred) {
          setAuth(true);
          window.localStorage.setItem("eshipassed", "true");
        }
      });
  };

  return (
    <>
      <div className="app">
        {auth ? (
          <div>
            <AdminDashboard token={token} />
            <button>logout</button>
          </div>
        ) : (
          <button onClick={() => loginWithGoogle()}>Login with google</button>
        )}
      </div>
    </>
  );
};

export default LoginPage;
