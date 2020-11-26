import React, {useState} from "react";
import { useStore } from "react-redux";
import axios from "axios";

import BASE_URL from "../BaseURL";


export default function Login(props) {

    const store = useStore();

    const [fieldData, setFieldData] = useState({
        email: "",
        password: ""
    });

    const handleLogin = (event) => {
        event.preventDefault();
        if (props.state.currentUser) {
            console.log("user already logged in");
            return;
        }
        axios.post(BASE_URL + "/login", {email: fieldData.email, password: fieldData.password})
            .then(({data}) => {
                if (data) {
                    store.dispatch({type: "LOGIN", payload: data});
                    props.setState(store.getState());
                    console.log("user logged in", data);
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="email" name="email" value={fieldData.email} onChange={(event) => {setFieldData({...fieldData, email: event.target.value})}}/>
                <input type="password" name="password" value={fieldData.password} onChange={(event) => {setFieldData({...fieldData, password: event.target.value})}}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}