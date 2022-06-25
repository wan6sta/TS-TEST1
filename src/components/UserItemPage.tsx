import React, {useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams} from "react-router-dom";



const UserItemPage = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<string>()

    useEffect(()=>{
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return <>
       <button>Back</button>
        <h1>Страница пользователя {user?.name}</h1>
        <div>
            {user?.email}
        </div>
    </>
};

export default UserItemPage;