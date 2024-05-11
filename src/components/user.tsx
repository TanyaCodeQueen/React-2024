import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import styles from './user.module.css'

interface IProps{
    user:IUserModel;
}
type IPropsType = IProps & { children?: React.ReactNode } & { lift?: (id: number) => void };


const UserComponent :FC<IPropsType> = ({user,lift})=>{

    const onClickHandler = () => {
        if (lift) {
            lift(user.id);
        }

    };
return (
    <>


        <div className={styles.outerDiv}>

            <p className={styles.userDetails}>User:{user.id} {user.name} {user.username}</p>
            <div
                className={styles.addressDetails}>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </div>

            <div className={styles.companyDetails}>
                Company: {user.company.name} {user.company.catchPhrase} {user.company.bs}
            </div>


        </div>
        <button className={styles.btn} onClick={onClickHandler} >
            Click to get info about user {user.id}
        </button>

    </>


);


}


export default UserComponent;