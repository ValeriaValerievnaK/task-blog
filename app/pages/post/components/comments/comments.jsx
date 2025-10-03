import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../../../components';
import { Comment } from './components';
import styled from 'styled-components';
import { selectUserId } from '../../../../../src/selectore';
import { useServerRequest } from '../../../../../src/hooks';
import { addCommentAsync } from '../../../../../src/actions';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const userId = useSelector(selectUserId);
	const dispatch = useDispatch();
	const reguestServer = useServerRequest();

	const onNewCommentAdd = (reguestServer, userId, postId, content) => {
		dispatch(addCommentAsync(reguestServer, userId, postId, content));
		setNewComment('');
	};
	return (
		<div className={className}>
			<div className="new-comment">
				<textarea
					name="comment"
					value={newComment}
					placeholder="Комментарий..."
					onChange={({ target }) => setNewComment(target.value)}
				></textarea>
				<Icon
					id="fa-share"
					size="18px"
					margin="0 0 0 10px"
					onClick={() => {
						onNewCommentAdd(reguestServer, userId, postId, newComment);
					}}
				/>
			</div>
			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	width: 580px;
	margin: 0 auto;

	& .new-comment {
		display: flex;
		width: 100%;
		margin: 20px 0 0;
	}
	& .new-comment textarea {
		width: 550px;
		resize: none;
		height: 120px;
		font-size: 18px;
	}
`;
