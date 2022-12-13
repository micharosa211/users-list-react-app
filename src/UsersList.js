import React from "react";
import Users from "./Users";
import './UsersList.css';

function UsersList(props) {

    

    // let usersList = props.usersList;
    // console.log(usersList);
    // let userLiElements = usersList.map(user => 
         
    //         <li>{user}<span>X</span></li>
        
    // );
let usersList = props.usersList;
let usersLiElement = usersList.map((user)=>{
    return (
    <li key={user.id}>{user.name}<span onClick={()=>{props.removeUserMethod(user.id)}}>X</span></li>
)
});


    return (
        <ul className="the-list">
            {usersLiElement}
        </ul>

    )

}












export default UsersList;