import { deleteComment, deletePost, getComments } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constans';

export const removePost = async (hash, id) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Недостаточно прав',
			res: null,
		};
	}

	await deletePost(id);

	const comments = await getComments(id);

	Promise.all(comments.map(({ id: commentId }) => deleteComment(commentId)));

	return {
		error: null,
		res: true,
	};
};
