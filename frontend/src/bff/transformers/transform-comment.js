export const transformComment = (dbComment) => {
	if (!dbComment) {
		return null;
	}

	return {
		id: dbComment.id,
		postId: dbComment.post_id,
		authorId: dbComment.author_id,
		publishedAt: dbComment.published_at,
		content: dbComment.content,
	};
};
