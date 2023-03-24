import classes from './ProfileForm.module.css';
import AuthContext from "../../store/auth-context";
import {useContext, useRef} from "react";
import {useHistory} from "react-router-dom";

const ProfileForm = () => {

    const authCtx = useContext(AuthContext);
    const history = useHistory();

    const passRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault()

        console.log('.....')

        const changePass = async () => {
            try {

                const enteredPass = passRef.current.value

                console.log("TOKEN : ", authCtx.token)
                console.log("pass : ", enteredPass)
                const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBUjEX47wKKCsBs4cYSXHBw8WqmZaLfXzU', {
                    method: 'POST',
                    body: JSON.stringify({
                        idToken: authCtx.token,
                        password: enteredPass,
                        returnSecureToken: false
                    }),
                    headers: {
                        'Content-Type': 'application.json'
                    }
                })

                console.log(response)
                if (!response.ok) {
                    console.log('ERROR....', response)
                    throw new Error('Password update failed!')
                }

                alert("Password Changed Successfully!!")

                return await response.json()

            } catch (err) {
                console.log("ERROR CHANGE PASS : ", err)
                alert(err)
            }

        }
        changePass().then(() => {
            history.replace('/')

        })

    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='new-password'>New Password</label>
                <input type='password' id='new-password' minLength="7" ref={passRef}/>
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    );
}

export default ProfileForm;
