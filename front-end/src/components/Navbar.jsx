import React, { useState } from "react";
import { useStore } from "react-redux";

import { Link } from 'react-router-dom';

import '../styles/Navbar.css';

export default function Navbar(props) {


    const store = useStore();
    const [state, setState] = useState(store.getState());

    const conditionalLinks = () => {
        if (/* props.state.currentUser */ true) {
            return (
                <React.Fragment>
                    <li><Link to="/todo-list" className="navbar-link">TodoList</Link></li>
                    <li><Link to="/projects" className="navbar-link">Projects</Link></li>
                    <li><Link to="/profile" className="navbar-link">Profile</Link></li>
                    <li><Link to="/" className="navbar-link">Home</Link></li>
                </React.Fragment>
            )
        } else {
            return (
                // <Link to="/login" className="navbar-link"><li>Login</li></Link>
                null
            )
        }
    }

    return (
        <header>
            <h5 id="logo">DeskSpace</h5>
            <ul>
                {/* <Link to="/landing" className="navbar-link"><li className="active">Landing</li></Link> */}
                {conditionalLinks()}
            </ul>
        </header>
    )
}