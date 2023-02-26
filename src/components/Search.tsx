import {useState} from "react";

export const Search = () => {
    const [username, setUsername] = useState("")
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(false)

    return (
        <div className="search">
            <div className="search-form">
                <input onChange={e => setUsername(e.target.value)} type="text" placeholder="Найти пользователя"/>
            </div>
        </div>
    );
};