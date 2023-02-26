import React, {useState} from "react";
import Add from "../image/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, db, storage} from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, collection, addDoc, setDoc} from "firebase/firestore";
import {Link, useNavigate} from "react-router-dom";


export const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const handleSubmit = async (e: any) => {

        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            //Create user
            const res = await createUserWithEmailAndPassword(auth, email, password);

            //Create a unique image name
            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);

            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });

                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });

                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        navigate("/")
                    } catch (err) {
                        console.log(err);
                    }
                });
            });
        } catch (err) {
            setError(true)
        }
    }

    return(
        <div className="form-container">
            <div className="form-wrapper">
                <span className="logo">Cat Chat</span>
                <span className="title">Регистрация</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input style={{display: "none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Добавить аватар</span>
                    </label>
                    <button>Зарегистрироваться</button>
                    {error && <span className="error">Что-то пошло не так</span>}
                </form>
                <p>У вас уже есть аккаунт? <Link to="/login">Войдите</Link></p>
            </div>
        </div>
    )
}