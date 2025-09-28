export const transformUser = (dbUser) => ({
	id: dbUser.id,
	login: dbUser.login,
	password: dbUser.password,
	registeredAd: dbUser.registed_at,
	roleId: dbUser.role_id,
});
