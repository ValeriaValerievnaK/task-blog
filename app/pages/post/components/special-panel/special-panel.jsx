import { useDispatch } from 'react-redux';
import { Icon } from '../../../../components';
import styled from 'styled-components';
import { useServerRequest } from '../../../../../src/hooks';
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../../../src/actions';
import { useNavigate } from 'react-router-dom';

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();

	const onPostRemove = (requestServer, id) => {
		dispatch(
			openModal({
				text: 'Действительно хотите удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() =>
						navigate('/'),
					);
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};
	return (
		<div className={className}>
			<div className="published-at">
				<Icon inactiv={true} id="fa-calendar-o" size="18px" margin="0 7px 0 0" />
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<Icon
					id="fa-trash-o"
					size="21px"
					onClick={() => onPostRemove(requestServer, id)}
				/>
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};

	& .published-at {
		display: flex;
		font-size: 18px;
	}

	& i {
		position: relative;
		top: -1px;
	}

	& .buttons {
		display: flex;
	}
`;
