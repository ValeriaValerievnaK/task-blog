import PropTypes from 'prop-types';
import styled from 'styled-components';

// eslint-disable-next-line no-unused-vars
const ButtonContainer = ({ children, className, width, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	height: 32px;
	width: ${({ width = '100%' }) => width};
	border: 1px solid #000;
	background-color: #eee;

	&:hover {
		cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
	}
`;

Button.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string,
};
