import React, { useState } from 'react';
import './BlogForm.css';
import PostBlog from './PostBlog'; // Import the BlogPost component

export default function BlogForm() {
    const [showForm, setShowForm] = useState(false);
    const [showPost, setShowPost] = useState(false);
    const [imageURL, setImageURL] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    function formSubmitHandler(e) {
        e.preventDefault();
        setShowPost(true);
    }

    function cancelHandler() {
         
        
      setShowForm(!showForm);
    }

    return (
        
        <div >
            
          
  {!showForm && !showPost && (
                <form className='form' onSubmit={formSubmitHandler}>
                    <label>Image URL</label>
                    <input
                        type='url'
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                        required
                    />

                    <label>Name</label>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label>Description</label>
                    <input
                        type='text'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <button type='submit'>PostBlog</button>
                    <button type='button' onClick={cancelHandler}>Cancel</button>
                </form>
            )}

            {showPost && (
                <PostBlog imageUrl={imageURL} name={name} description={description} />
            )}
        </div>
        
    );
}
