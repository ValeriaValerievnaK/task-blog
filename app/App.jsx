import styled from 'styled-components';
import '../index.css';

const Div = styled.div`
	text-align: center;
`;

export const App = () => {
	return (
		<Div>
			<i className="fa fa-camera-retro"></i> fa camera
			<i className="fa fa-camera-retro fa-lg"></i> fa-lg
			<i className="fa fa-camera-retro fa-2x"></i> fa-2x
			<i className="fa fa-camera-retro fa-3x"></i> fa-3x
			<i className="fa fa-camera-retro fa-4x"></i> fa-4x
			<i className="fa fa-camera-retro fa-5x"></i> fa-5x
			<div>1233</div>
		</Div>
	);
};
