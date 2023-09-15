import { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitle('');
    setBody('');
  }

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Body" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreatePost;