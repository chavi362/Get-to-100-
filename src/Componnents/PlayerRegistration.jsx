import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PlayerRegistration(props) {
    const [isSignIn, setIsSignIn] = useState(true);

    const handleToggle = () => {
        setIsSignIn(!isSignIn);
    };

    function signUp(e) {
        e.preventDefault();

        const userName = document.getElementById("signUpuserName").value;
        const email = document.getElementById("signUpEmail").value;
        const password = document.getElementById("signUpPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const storedPlayer = localStorage.getItem(email);

        if (storedPlayer) {
            alert('User with this email already exists. Please sign in or use a different email.');
            return;
        }

        const newPlayer = { password: password, email: email, userName: userName, AllScores: [] };
        localStorage.setItem(email, JSON.stringify(newPlayer));
        props.addPlayerToTheGame(newPlayer);
    }

    function signIn(e) {
        e.preventDefault();

        const email = document.getElementById("signInEmail").value;
        const password = document.getElementById("signInPassword").value;

        const storedPlayer = localStorage.getItem(email);

        if (storedPlayer) {
            const parsedPlayer = JSON.parse(storedPlayer);

            if (parsedPlayer.password === password) {
                props.addPlayerToTheGame(parsedPlayer);
            } else {
                alert('One of the details is wrong');
            }
        } else {
            alert('User not found. Please sign up.');
        }

    }

    return (
            <div className="container">
              <button className="btn btn-primary" onClick={handleToggle}>
                {isSignIn ? 'SIGN UP' : 'SIGN IN'}
              </button>
              {isSignIn ? (
                <div className="mt-4">
                  <h2>Sign In</h2>
                  <form>
                    <div className="form-group">
                      <label htmlFor="signInEmail">Email:</label>
                      <input type="email" className="form-control" name="email" id="signInEmail" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="signInPassword">Password:</label>
                      <input type="password" className="form-control" name="password" id="signInPassword" />
                    </div>
                    <button type="submit" className="btn btn-success" onClick={signIn}>
                      Sign In
                    </button>
                  </form>
                </div>
              ) : (
                <div className="mt-4">
                  <h2>Sign Up</h2>
                  <form>
                    <div className="form-group">
                      <label htmlFor="signUpUsername">Username:</label>
                      <input type="text" className="form-control" name="username" id="signUpUsername" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="signUpEmail">Email:</label>
                      <input type="email" className="form-control" name="email" id="signUpEmail" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="signUpPassword">Password:</label>
                      <input type="password" className="form-control" name="password" id="signUpPassword" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirmPassword">Confirm Password:</label>
                      <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={signUp}>
                      Sign Up
                    </button>
                  </form>
                </div>
              )}
            </div>
          );
}

export default PlayerRegistration;
