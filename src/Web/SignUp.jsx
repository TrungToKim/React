import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from "./Login";

function withNavigation(Component) {
    return (props) => <Component {...props} navigate={useNavigate()} />;
}

class SignUp extends React.Component {
    state = {
        name: '',
        password: '',
        email: '',
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

    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        {
            !this.state.name || !this.state.password || !this.state.email
                ?
                alert('Error! , Please enter name and password')
                :
                setTimeout(() => {
                    this.props.navigate('/Login')
                }, 3000)
        }
    }

    render() {
        let { name, password, email } = this.state
        return (
            <>
                <form action="">
                    <h1>Simple Sign Up</h1>
                    <div>
                        <span className="form-sign-up">
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

                            <label htmlFor=""> Email </label> <br />
                            <input
                                className="Email"
                                type="email"
                                value={email}
                                onChange={(event) => this.handleEmail(event)}
                            /> <br />
                        </span>

                        <span className="btn-Submit-form">
                            <button
                                className="btn-Submit"
                                onClick={(event) => this.handleSubmit(event)}
                            >
                                Submit
                            </button> <br />
                        </span>
                    </div>
                </form>
            </>
        )
    }
}


export default withNavigation(SignUp)