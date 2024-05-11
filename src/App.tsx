import React, { useState } from 'react';
import UsersComponent from "./components/users";
import './App.css';
import { getAllPosts } from "./services/jph.api.service";
import PostsComponent from "./components/posts";
import { IPostModel } from "./models/IPostModel";


const App = () => {
    const [post, setPost] = useState<IPostModel[]>([]);
const lift = (postId: number) => {
    getAllPosts(postId).then(({data}) => {
        setPost(data);

    })
}
return (
    <div className="App">
        <div><UsersComponent lift={lift}/></div>
        <div >
            <PostsComponent posts={post} />
        </div>
    </div>
);
};



export default App;
