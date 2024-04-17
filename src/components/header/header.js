import { useEffect, useState } from "react";
import "./style.css";
import axios from 'axios';

export default function Header(){

    const [user, setUser] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8080/user/1')
        .then(response => {
            setUser(response.data);
        })
        .catch(error => {
            console.log(error)
        });
    }, []);

    return(
        <div class="container">
            <div class="backlog">
                Backlog
            </div>
            <div class="board">
                Board
            </div>
            <div class="feed">
                Feed
            </div>
            <div>{user.email}</div>
        </div>
    )
}