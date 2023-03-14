import React, {useEffect, useState} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {
    },
    onLogin: () => {
    }
})


export const AuthContextProvider = (props) => {
    const [isLoggedin, setIsLoggedin] = useState(false)

    useEffect(() => {
        const hasLoginInfo = localStorage.getItem('isLoggedIn')

        if (hasLoginInfo === '1') {
            setIsLoggedin(true)
        }
    }, [])

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedin(false)
    }
    const loginHandler = () => {
        localStorage.setItem('isLoggedIn','1')
        setIsLoggedin(true)
    }

    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedin,
        onLogout: logoutHandler,
        onLogin: loginHandler
    }}> {props.children} </AuthContext.Provider>
}


export default AuthContext
