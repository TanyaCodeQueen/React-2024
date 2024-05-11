import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";
import {getAllUsers} from "../services/jph.api.service";
import UserComponent from "./user";
import styles from './users.module.css'

type IPropsType = {lift?:(id:number)=> void}

const UsersComponent:FC<IPropsType> = ({lift}) => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        getAllUsers().then(({data}) => setUsers(data));
    }, []);

    return (
        <div className={styles.mainDiv}>
            {users.map((user) => (<UserComponent key={user.id} user={user} lift={lift}/>))}
        </div>
    );
};

export default UsersComponent;