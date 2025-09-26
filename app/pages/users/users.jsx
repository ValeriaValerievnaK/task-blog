import { useEffect, useState } from 'react';
import { Content, H2 } from '../../components';
import { TableRow, UserRow } from './components';
import { useServerRequest } from '../../../src/hooks';
import styled from 'styled-components';

const UsersContainer = ({ className }) => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const requestServer = useServerRequest();

	useEffect(() => {
		Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}

				setUsers(usersRes);
				setRoles(rolesRes);
			},
		);
	}, [requestServer]);

	return (
		<div className={className}>
			<Content error={errorMessage}>
				<H2>Пользователи</H2>
				<div>
					<TableRow>
						<div className="login-column">Логин</div>
						<div className="registeredAd-column">Дата регистрации</div>
						<div className="roleId-column">Роль</div>
					</TableRow>
					{users.map(({ login, registeredAd, roleId }) => (
						<UserRow
							login={login}
							registeredAd={registeredAd}
							roleId={roleId}
							roles={roles}
						/>
					))}
				</div>
			</Content>
		</div>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	width: 570px;
`;
