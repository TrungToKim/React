import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import SignUp from "./SignUp";
import ResetPassword from './ResetPassword'
import './WebSass/Login.sass'

function withNavigation(Component) {
    return (props) => <Component {...props} navigate={useNavigate()} />;
}

class Login extends React.Component {

    state = {
        name: '',
        password: '',
    }

    handleAccount = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = (event) => {
        event.preventDefault()
        {
            !this.state.name || !this.state.password
                ?
                alert('Error! , Please enter name and password')
                :
                setTimeout(() => {
                    this.props.navigate('/Home')
                }, 3000)
        }
    }

    render() {
        let { name, password, navigate } = this.state
        return (
            <>
                <form action="">
                    <h1>Simple Login</h1>
                    <div className="login-form">
                        <span className="form-login">
                            <label htmlFor=""> UseName </label><br />
                            <input
                                className="Account"
                                type="text"
                                value={name}
                                onChange={(event) => this.handleAccount(event)}
                            /> <br />

                            <label htmlFor=""> Password </label> <br />
                            <input
                                className="Password"
                                type="password"
                                value={password}
                                onChange={(event) => this.handlePassword(event)}
                            /> <br />
                        </span>

                        <span className="btn-login-form">
                            <button
                                className="login-btn"
                                onClick={(event) => this.handleLogin(event)}
                            > Login </button> <br />
                        </span>

                        <span className="form-create-reset">
                            <span className="form-create">
                                <Link to="/SignUp">CreateAccount</Link>
                            </span>

                            <span className="form-reset">
                                <Link to="/ResetPassword">Forgot Password?</Link>
                            </span>
                        </span>
                    </div>
                </form>
            </>
        )
    }
}
export default withNavigation(Login)