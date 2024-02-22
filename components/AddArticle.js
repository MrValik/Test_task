import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../redux/actions';

const AddArticle = ({ dispatch }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addArticle({ title, author, description }));
    setTitle('');
    setAuthor('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add Article</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default connect()(AddArticle);
