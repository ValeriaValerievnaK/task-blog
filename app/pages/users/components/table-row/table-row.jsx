import styled from 'styled-components';

const TableRowContainer = ({ children, className }) => {
	return <div className={className}>{children}</div>;
};

export const TableRow = styled(TableRowContainer)`
	display: flex;
	align-items: center;

	& > div {
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
