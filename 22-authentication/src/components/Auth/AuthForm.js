import {useRef, useState} from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefault()


        console.log('submitted.................')

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setIsLoading(true)

        let url;
        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBUjEX47wKKCsBs4cYSXHBw8WqmZaLfXzU';
        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBUjEX47wKKCsBs4cYSXHBw8WqmZaLfXzU'
        }


        const request = async () => {

            try {
                const response = await fetch(url, {
                    method: 'post', body: JSON.stringify({
                        email: enteredEmail, password: enteredPassword, returnSecureToken: true
                    }), headers: {
                        'Content-Type': 'application/json'
                    }
                })

                setIsLoading(false)
                if (!response.ok) {
                    // console.log('ERROR', response)
                    throw new Error('Authentication Failed!!')
                }
                const data = await response.json();
                return data;
            } catch (err) {
                console.log("ERROR in FUNCTION.........................", err)
                alert(err)
            }

        }
        // try {
        request()
        // .catch(err => {
        // console.log("GET ERROR...")
        // throw new Error(err)
        // });
        // } catch (err) {
        //
        //     console.log("ERROR..................", err)
        //     alert(err.message)
        // }


        /*

                    fetch(url,
                        {
                            method: 'post',
                            body: JSON.stringify({
                                email: enteredEmail,
                                password: enteredPassword,
                                returnSecureToken: true
                            }),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        .then(res => {
                            setIsLoading(false)
                            if (res.ok) {
                                return res.json()
                            } else {
                                return res.json().then(data => {
                                    alert('Authentication Failed!!')
                                    console.log(data)
                                })
                            }
                        })
        */

    }
    return (<section className={classes.auth}>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='email'>Your Email</label>
                <input type='email' id='email' required ref={emailInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='password'>Your Password</label>
                <input type='password' id='password' required ref={passwordInputRef}/>
            </div>
            <div className={classes.actions}>
                {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
                {isLoading && <p>Sending Request....</p>}
                <button
                    type='button'
                    className={classes.toggle}
                    onClick={switchAuthModeHandler}
                >
                    {isLogin ? 'Create new account' : 'Login with existing account'}
                </button>
            </div>
        </form>
    </section>);
};

export default AuthForm;
