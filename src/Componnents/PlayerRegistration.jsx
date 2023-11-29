import React, { useState } from 'react';

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
        <div>
            <button onClick={handleToggle}>{isSignIn ? 'SIGN UP' : 'SIGN IN'}</button>
            {isSignIn ? (
                <div>
                    <h2>Sign In</h2>
                    <form>
                        <label htmlFor="signInEmail">
                            Email:
                            <input type="email" name="email" id="signInEmail" />
                        </label>
                        <br />
                        <label htmlFor="signInPassword">
                            Password:
                            <input type="password" name="password" id="signInPassword" />
                        </label>
                        <br />
                        <button type="submit" onClick={signIn}>
                            Sign In
                        </button>
                    </form>
                </div>
            ) : (
                <div>
                    <h2>Sign Up</h2>
                    <form>
                        <label htmlFor="signUpuserName">
                            userName:
                            <input type="text" name="userName" id="signUpuserName" />
                        </label>
                        <br />
                        <label htmlFor="signUpEmail">
                            Email:
                            <input type="email" name="email" id="signUpEmail" />
                        </label>
                        <br />
                        <label htmlFor="signUpPassword">
                            Password:
                            <input type="password" name="password" id="signUpPassword" />
                        </label>
                        <br />
                        <label htmlFor="confirmPassword">
                            Confirm Password:
                            <input type="password" name="confirmPassword" id="confirmPassword" />
                        </label>
                        <br />
                        <button type="submit" onClick={signUp}>
                            Sign Up
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default PlayerRegistration;
