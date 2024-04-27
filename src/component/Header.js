import React, { useState } from 'react';
import BlogForm from './BlogForm';
import './Header.css';

export default function Header() {
    const [showForm, setShowForm] = useState(false);

    const handleAddBlogClick = () => {
        setShowForm(!showForm); 
    };
     

    return (
        <div className='header'>
            <h1>....Blog Websites.....</h1>
            <button onClick={handleAddBlogClick}>Add Blog</button>
            {showForm && <BlogForm />}
        </div>
    );
}
