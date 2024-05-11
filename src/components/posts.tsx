import React, { FC } from "react";
import { IPostModel } from "../models/IPostModel";
import styles from './post.module.css'


interface IProps {
    posts: IPostModel[]; 
}
const PostsComponent: FC<IProps> = ({ posts }) => {
    return (
        <div className={styles.outerDiv}>
            {posts.map((post) => (
                (<li className={styles.lis} key={post.id}> {post.body}<br/></li>))
            )}
        </div>
    );
};

export default PostsComponent;
