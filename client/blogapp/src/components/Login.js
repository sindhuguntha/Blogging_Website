import React, { Component } from 'react';
import axios from 'axios';
import {GoogleLogin} from 'react-google-login';
//const baseURL = "https://localhost:5000";
const API = axios.create({baseURL:"http://localhost:5000",withCredentials:false,headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
}})
class Login extends Component {
    
    componentDidMount() {
        if (sessionStorage.getItem("isLoggedIn") === "true") {
            window.history.back();
        }
    }
    successGoogleLogin (response) {
        console.log(response);
        const user = {
            username: response.profileObj.name,
            socialId: response.googleId,
        };
        console.log(user);
        
        
        
    
        
        
        API.post('auth/login', user)
        .then((res) => {
            // Reload the page once count is 1 to reload the navbar component and display "Logout" as an option instead of "Login"
            let count = 0;

            // If the response has a valid social Id
            if (res.data.socialId === response.googleId) {
                // Set the username and isLoggedIn in the session storage
                sessionStorage.setItem("isLoggedIn", "true");
                sessionStorage.setItem("username", res.data.username);
                count++;

                // Remove the user session cookie after 24 hours, to log the user out.
                // This is for cases when the user doesn't end the session or doesn't logout
                window.setTimeout(() => {
                    sessionStorage.removeItem("isLoggedIn");
                    sessionStorage.removeItem("username");
                }, 24 * 60 * 60 * 60);

                // If user data is stored in the session Storage, then reload page to update Navbar component appropriately
                if (count === 1) {
                    window.location.reload();
                }
            }
            // If user data returned is invalid, then redirect to the login page once again
            else {
                window.location = "/login";
            }
        })
        .catch((err) => console.error(err));
    }
    failureGoogleLogin(response) {
        console.error(response);
        window.location = "/login";
    }
    render() {
        return (



            <div className="container">
                <div className="login">
                    <h5>
                        Login with your social account
                        <span className="full-stop">.</span>
                    </h5>
                    <hr className="gold-hr" />
                    <div className="google">
                        <GoogleLogin
                            clientId="699495016245-j1rj0quiq66jb0q3oajqantu56e3luen.apps.googleusercontent.com"
                            buttonText="Log in With Google"
                            onSuccess={this.successGoogleLogin}
                            onFailure={this.failureGoogleLogin}
                            cookiePolicy={"single_host_origin"}
                            scope="profile"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;