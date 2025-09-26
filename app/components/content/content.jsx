import styled from 'styled-components';
import { H2 } from '../h2/h2';
import { ErrorMessage } from '../error-message/error-message';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Content = ({ children, error }) => {
	return error ? (
		<Div>
			<H2>Ошибка</H2>
			<ErrorMessage>{error}</ErrorMessage>
		</Div>
	) : (
		children
	);
};
