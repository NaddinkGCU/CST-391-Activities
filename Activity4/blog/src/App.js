import React, { useState } from 'react';
import Post from './Post';
import AddPost from './AddPost';

function App(){

    const [postList, setPostList] = useState([
        {
            postNumber: 0,
            text: 'A short psychic broke out of jail. She was a small medium at large.',
        },
        {
            postNumber: 1,
            text: 'Before I was evil I was a little less than evil. I was a bratwurst street vendor.'
        },
        {
            postNumber: 2,
            text: 'It all began on the day of my actual birth. Both of my parents failed to show up.'
        },
        {
            postNumber: 3,
            text: 'I used to have goals. They were evil goals, but they were goals.'
        }

    ]);

    const [postId, setPostId] = useState(4);

    const handleDeletePost = (id) => {
        let updatedPostList = postList.filter(post => post.postNumber !== id);

        setPostList(updatedPostList);
    }

    const handleAddPost = (newText) => {
        let newPost = {
            postNumber: postId,
            text: newText
        };

        setPostList(postList => [...postList, newPost]);
        setPostId(postId + 1);

    }


    const posts = postList.map((post) => (
        <Post key={post.postNumber} text={post.text} id={post.postNumber} onDelete={handleDeletePost} />
    ));


    return (
        <div>
            {posts}
            <AddPost onAdd={handleAddPost} />
        </div>
    );

}

export default App;