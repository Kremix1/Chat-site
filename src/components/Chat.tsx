import Cam from "../image/cam.png"
import Add from "../image/add.png"
import More from "../image/more.png"
import {Messages} from "./Messages";
import {Input} from "./Input";
import {useContext} from "react";
import {ChatContext} from "../context/ChatContext";

export const Chat = () => {
    const { data } = useContext(ChatContext)

    return (
        <div className="chat">
            <div className="chat-info">
                <span>{data.user.displayName}</span>
                <div className="chat-icons">
                    <img src={Cam} alt=""/>
                    <img src={Add} alt=""/>
                    <img src={More} alt=""/>
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
};