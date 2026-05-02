import React from 'react'
import './Nav.scss'
import ListTodo from '../TodoAPP/ListTodo'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <>
                <div className='top-left-nav'>
                    <Link to="/">Home</Link>
                    <Link to="/Todo">ToDo</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/About">About</Link>
                </div >

                <div className='top-right-nav'>
                    <Link to='/Login'>Sign in</Link>
                    <Link to='/SignUp'>Sign up</Link>
                </div>
            </>
        )
    }
}

export default Nav