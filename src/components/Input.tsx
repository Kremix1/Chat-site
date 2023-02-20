import Img from "../image/img.png"
import Attach from  "../image/attach.png"

export const Input = () => {
    return (
        <div className="input">
            <input type="text" placeholder="Напишите что-нибудь..."/>
            <div className="send">
                <img src={Img} alt=""/>
                <input type="file" style={{display:"none"}} id="file"/>
                <label htmlFor="file">
                    <img src={Attach} alt=""/>
                </label>
                <button>Отправить</button>
            </div>
        </div>
    );
};