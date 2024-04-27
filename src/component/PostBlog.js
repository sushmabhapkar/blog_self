import React from 'react';

export default function PostBlog({ imageUrl, name, description }) {
    return (
        <div>
            <img src={imageUrl} alt="Blog Image" />
            <h2>{name}</h2>
            <p>{description}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
}
