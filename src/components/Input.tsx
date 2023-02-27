import Img from "../image/img.png"
import Attach from  "../image/attach.png"
import {useContext, useState} from "react";
import {AuthContext} from "../context/AuthContext";
import {ChatContext} from "../context/ChatContext";

export const Input = () => {
    const [text, setText] = useState("")
    const [img, setImg] = useState(null)

    const {currentUser} = useContext(AuthContext)
    const {data} = useContext(ChatContext)

    const handleSend = () => {

    }

    return (
        <div className="input">
            <input type="text" placeholder="Напишите что-нибудь..."/>
            <div className="send">
                <img src={Img} alt=""/>
                <input type="file" style={{display:"none"}} id="file"/>
                <label htmlFor="file">
                    <img src={Attach} alt=""/>
                </label>
                <button onClick={handleSend}>Отправить</button>
            </div>
        </div>
    );
};