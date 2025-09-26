import { getRoles } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constans';

export const fetchUsers = async (userSession) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Недостаточно прав',
			res: null,
		};
	}

	const roles = await getRoles();

	return {
		error: null,
		res: roles,
	};
};
