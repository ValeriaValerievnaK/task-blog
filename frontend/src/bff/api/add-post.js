export const addPost = ({ imageUrl, title, content }) =>
	fetch('http://localhost:3005/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			title,
			image_url: imageUrl,
			content,
			published_at: new Date().toISOString().replace('T', '-').substring(0, 10),
		}),
	}).then((createdPost) => createdPost.json());
