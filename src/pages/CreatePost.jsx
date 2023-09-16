import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CreatePost = () => {
	const [title, setTitle] = useState('');
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post('https://dummyjson.com/products/add', {
			title: 'Заголовок поста'
		})
			.then(function (response) {
				if (response.status === 200 || response.status === 204) {
					navigate('/')
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (
		<div>
			<h1>Create Post</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
				<button type="submit">Create</button>
			</form>
		</div>
	);
}

export default CreatePost;