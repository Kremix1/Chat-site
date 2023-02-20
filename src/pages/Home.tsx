import {Sidebar} from "../components/Sidebar";
import {Chat} from "../components/Chat";
import './home.scss'

export const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <Sidebar />
                <Chat/>
            </div>
        </div>
    )
}