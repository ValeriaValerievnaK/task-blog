export const transformComment = (dbComment) => {
	if (!dbComment) {
		return null;
	}

	return {
		id: dbComment.id,
		postId: dbComment.postId,
		authorId: dbComment.author_id,
		publishedAt: dbComment.published_at,
		content: dbComment.content,
	};
};
