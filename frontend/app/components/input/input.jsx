import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// eslint-disable-next-line no-unused-vars
const InputContainer = forwardRef(({ className, width, ...props }, ref) => (
	<input className={className} {...props} ref={ref} />
));

export const Input = styled(InputContainer)`
	height: 40px;
	border: 1px solid #000;
	margin: 0 0 10px;
	padding: 10px;
	font-size: 18px;
	width: ${({ width = '100%' }) => width};
`;

Input.propTypes = {
	width: PropTypes.string,
};
