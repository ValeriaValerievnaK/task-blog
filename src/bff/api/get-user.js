export const getUser = async (loginToFind) =>
	fetch(`http://localhost:3005/users?login=${loginToFind}`)
		.then((loadedUsers) => loadedUsers.json())
		.then(
			([loadedUsers]) =>
				loadedUsers && {
					id: loadedUsers.id,
					login: loadedUsers.login,
					password: loadedUsers.password,
					registeredAd: loadedUsers.registeredAd,
					roleId: loadedUsers.role_id,
				},
		);
