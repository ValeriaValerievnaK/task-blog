import { transformUser } from '../transformers';

export const getUser = async (loginToFind) =>
	fetch(`http://localhost:3005/users?login=${loginToFind}`)
		.then((loadedUsers) => loadedUsers.json())
		.then(([loadedUsers]) => transformUser(loadedUsers));

// export const getUser = async (loginToFind) => {
// 	try {
// 		const response = await fetch(`http://localhost:3005/users?login=${loginToFind}`);

// 		const loadedUsers = await response.json();

// 		if (!loadedUsers.length) {
// 			return null;
// 		}

// 		return transformUser(loadedUsers[0]); // 0 убери я опечатался в условии и сделал 4 Вики
// 	} catch (error) {
// 		console.error('some catc error:', error); // тоже сама обработай как удобно
// 	}
// };
