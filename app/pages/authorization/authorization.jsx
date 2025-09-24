import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../../src/bff';
import { useState } from 'react';
import { Input, Button, H2 } from '../../components';
import { Link } from 'react-router-dom';
import { setUser } from '../../../src/actions';
import styled from 'styled-components';

const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(/^\w+$/, 'Неверно заполнен логин, допускаются только буквы и цифры')
		.min(3, 'Неверно заполнен логин. Минимум 3 символа')
		.max(15, 'Неверно заполнен логин. Максимум 15 символов'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/^[\w#%]+$/,
			'Неверно заполнен пароль. Допускаются только буквы, цифры и знаки # %',
		)
		.min(6, 'Неверно заполнен парол. Минимум 6 символа')
		.max(30, 'Неверно заполнен парол. Максимум 30 символов'),
});

const StyledLink = styled(Link)`
	text-align: center;
	text-decoration: underline;
	font-size: 18px;
`;

const ErrorMassage = styled.div`
	font-size: 18px;
	background-color: #eeb4b4ff;
	margin: 10px 0 0;
	padding: 10px;
`;

const AuthorizationContainer = ({ className }) => {
	const [serverError, setServerError] = useState(null);

	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	});

	const onSubmit = ({ login, password }) => {
		server.authorize(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}

			dispatch(setUser(res));
		});
	};

	const formError = errors?.login?.message || errors?.password?.message;

	const errorMassage = formError || serverError;

	return (
		<div className={className}>
			<H2>Авторизация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					placeholder="Логин..."
					{...register('login', {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="password"
					placeholder="Пароль..."
					{...register('password', {
						onChange: () => setServerError(null),
					})}
				/>
				<Button type="submit" disabled={!!formError}>
					Авторизоваться
				</Button>
				{errorMassage && <ErrorMassage>{errorMassage}</ErrorMassage>}
				<StyledLink to="/register">Регистрация</StyledLink>
			</form>
		</div>
	);
};

export const Authorization = styled(AuthorizationContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > form {
		display: flex;
		flex-direction: column;
		width: 300px;
	}
`;
