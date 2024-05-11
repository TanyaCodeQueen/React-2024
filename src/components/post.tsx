import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
import styles from './post.module.css'


interface IProps {
    post: IPostModel;
}

type IPropsType = IProps & { children?: React.ReactNode };


const PostComponent:FC<IPropsType>=({post}) => {

return(
        <div className={styles.outerDiv} >
            {post.id} {post.title}
            <p>{post.body}</p>
        </div>
    );
};

export default PostComponent;