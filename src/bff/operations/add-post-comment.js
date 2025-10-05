import { addComment, getPost, getComments, getUsers } from '../api';
import { ROLE } from '../constans';
import { sessions } from '../sessions';

export const addPostComment = async (hash, userId, postId, content) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Авторизуйтесь, что бы написать комментарий',
			res: null,
		};
	}

	await addComment(userId, postId, content);

	const post = await getPost(postId);

	const comments = await getComments(postId);
	const users = await getUsers();

	const commentsWithAuthor = comments.map((comment) => {
		const user = users.find(({ id }) => id === comment.authorId);
		return {
			...comment,
			author: user?.login,
		};
	});

	//возможно вынести

	return {
		error: null,
		res: { ...post, comments: commentsWithAuthor },
	};
};
