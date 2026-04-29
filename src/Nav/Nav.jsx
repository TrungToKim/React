import React from 'react'
import './Nav.scss'
import ListTodo from '../TodoAPP/ListTodo'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div className='topnav'>
                <Link to="/">home</Link>
                <Link to="/todo">todo</Link>
                <Link to="/contact">contact</Link>
                <Link to="/about">about</Link>
            </div >
        )
    }
}

export default Nav