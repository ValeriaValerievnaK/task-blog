import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Comments, PostContent } from './components';
import { useServerRequest } from '../../../src/hooks';
import styled from 'styled-components';
import { loadPostAsync } from '../../../src/actions';
import { selectPost } from '../../../src/selectore';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const param = useParams();
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, param.id));
	}, [dispatch, requestServer, param.id]);

	return (
		<div className={className}>
			<PostContent post={post} />
			<Comments comments={post.comments} postId={post.id} />
		</div>
	);
};

export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0 80px;
`;
