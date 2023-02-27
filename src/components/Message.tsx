import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {ChatContext} from "../context/ChatContext";

export const Message = ({message}) => {

    const {currentUser} = useContext(AuthContext)
    const {data} = useContext(ChatContext)

    return (
        <div className='message owner'>
            {/*<div className="message-info">*/}
            {/*    <img src={}*/}
            {/*         alt=""*/}
            {/*    />*/}
            {/*    <span>Только что</span>*/}
            {/*</div>*/}
            {/*<div className="message-content">*/}
            {/*    <p>Hello</p>*/}
            {/*    <img src="https://i.imgur.com/vwKAcbg.png" alt=""/>*/}
            {/*</div>*/}
        </div>
    );
};