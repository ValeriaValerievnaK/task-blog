import { ROLE } from '../constans';
import { updatePost } from '../api';
import { sessions } from '../sessions';

export const savePost = async (hash, newPostData) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Недостаточно прав',
			res: null,
		};
	}

	const updatedPost = await updatePost(newPostData);
	console.log('updatedPost', updatedPost);

	return {
		error: null,
		res: updatedPost,
	};
};
