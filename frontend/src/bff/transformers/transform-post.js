export const transformPost = (dbPost) => {
	if (!dbPost) {
		return null;
	}

	return {
		id: dbPost.id,
		title: dbPost.title,
		imageUrl: dbPost.image_url,
		content: dbPost.content,
		publishedAt: dbPost.published_at,
	};
};
