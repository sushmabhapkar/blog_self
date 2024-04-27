import React, { useState } from 'react';
import './PostBlog.css'; 

export default function PostBlog({ imageUrl, name, description }) {
    const [showPost, setShowPost] = useState(true); // Assuming you want to show the post by default
    

    function deleteHandler() {
        setShowPost(false);
    }

    return (
        <div className='post'>
            {showPost && (
                <div>
                    <img src={imageUrl} alt="Blog Image" />
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <button>Edit</button>
                    <button onClick={deleteHandler}>Delete</button>
                </div>
            )}
        </div>
    );
    
}
