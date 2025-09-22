import styled from 'styled-components';
import { Logo } from './components/logo';

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Logo />
	</header>
);

export const Header = styled(HeaderContainer)`
	position: fixed;
	top: 0;
	height: 120px;
	width: 1000px;
	padding: 20px 40px;
	box-shadow: 0px 0px 15px #000;
	background-color: #fff;
`;
