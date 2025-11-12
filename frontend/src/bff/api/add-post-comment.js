export const addComment = (userId, postId, content) =>
	fetch('http://localhost:3005/comments', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			author_id: userId,
			post_id: postId,
			content: content,
			published_at: new Date().toISOString().replace('T', '-').substring(0, 10),
		}),
	});
