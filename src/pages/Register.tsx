import Add from "../image/addAvatar.png"
export const Register = () => {
    return(
        <div className="form-container">
            <div className="form-wrapper">
                <span className="logo">Cat Chat</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input style={{display: "none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Добавить аватар</span>
                    </label>
                    <button>Зарегистрироваться</button>
                </form>
                <p>У вас уже есть аккаунт? Войдите</p>
            </div>
        </div>
    )
}