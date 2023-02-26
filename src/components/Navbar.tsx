import { signOut } from "firebase/auth"
import {auth} from "../firebase";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

export const Navbar = () => {
    const {currentUser} = useContext(AuthContext)

    return (
        <div className="navbar">
            <span className="logo">Cat Chat</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                <span>{currentUser.displayName}</span>
                <button onClick={() =>signOut(auth)}>Выйти</button>
            </div>
        </div>
    );
};