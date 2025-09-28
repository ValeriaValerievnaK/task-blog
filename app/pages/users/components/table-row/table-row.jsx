import styled from 'styled-components';

const TableRowContainer = ({ children, className }) => {
	return <div className={className}>{children}</div>;
};

export const TableRow = styled(TableRowContainer)`
	display: flex;
	align-items: center;
	border: ${({ border }) => (border ? '1px solid #000' : 'none')};

	& > div {
		display: flex;
		padding: 0 10px;
	}
	& .login-column {
		width: 172px;
	}
	& .registeredAd-column {
		width: 213px;
	}
	& .roleId-column {
		width: auto;
	}
`;
