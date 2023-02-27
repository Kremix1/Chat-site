import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {ChatContext} from "../context/ChatContext";

export const Message = ({message}) => {

    const {currentUser} = useContext(AuthContext)
    const {data} = useContext(ChatContext)

    return (
        <div className={`message ${message.senderId === currentUser.uid && "owner"}`}>
            <div className="message-info">
                <img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL}
                     alt=""
                />
                <span>Только что</span>
            </div>
            <div className="message-content">
                <p>{message.text}</p>
                {message.img && <img src={message.img} alt=""/>}
            </div>
        </div>
    );
};