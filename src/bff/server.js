import {
	authorize,
	logout,
	register,
	fetchRoles,
	fetchUsers,
	updateUserRole,
	removeUser,
} from './operations';

export const server = {
	authorize,
	register,
	logout,
	fetchUsers,
	fetchRoles,
	updateUserRole,
	removeUser,
};
