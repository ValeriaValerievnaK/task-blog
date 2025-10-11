import { deleteComment, getPost } from '../api';
import { ROLE } from '../constans';
import { sessions } from '../sessions';
import { getPostCommentsWithAuthor } from '../utils';

export const removePostComment = async (hash, id, postId) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Недостаточно прав',
			res: null,
		};
	}

	await deleteComment(id);

	const post = await getPost(postId);

	const commentsWithAuthor = await getPostCommentsWithAuthor(postId);

	return {
		error: null,
		res: { ...post, comments: commentsWithAuthor },
	};
};
