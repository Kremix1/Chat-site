import Add from "../image/addAvatar.png"
export const Login = () => {
    return(
        <div className="form-container">
            <div className="form-wrapper">
                <span className="logo">Cat Chat</span>
                <span className="title">Register</span>
                <form>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button>Войти</button>
                </form>
                <p>У вас ещё нет аккаунта? Зарегистрируйтесь</p>
            </div>
        </div>
    )
}