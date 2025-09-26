import styled from 'styled-components';
import { H2 } from '../../components';
import { TableRow, UserRow } from './components';
import { useDispatch } from 'react-redux';

const UsersContainer = ({ className }) => {
	const dispatch = useDispatch();
	const users = [];

	return (
		<div className={className}>
			<H2>Пользователи</H2>
			<div>
				<TableRow>
					<div className="login-column">Логин</div>
					<div className="registeredAd-column">Дата регистрации</div>
					<div className="roleId-column">Роль</div>
				</TableRow>
				{users.map(({ login, registeredAd, roleId }) => (
					<UserRow login={login} registeredAd={registeredAd} roleId={roleId} />
				))}
			</div>
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
