import { useEffect, useMemo, useState } from 'react';
import { useServerRequest } from '../../../src/hooks';
import { Pagination, PostCard, Search } from './components';
import styled from 'styled-components';
import { PAGINATION_LIMIT } from '../../../src/constans';
import { debounce, getLastPageFormLins } from './components/utils';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [shoudlSearch, setShoudlSearch] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState('');
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts', searchPhrase, page, PAGINATION_LIMIT).then(
			({ res: { posts, links } }) => {
				setPosts(posts);
				setLastPage(getLastPageFormLins(links));
			},
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [requestServer, page, shoudlSearch]);

	const startDelayedSearch = useMemo(() => debounce(setShoudlSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shoudlSearch);
	};

	return (
		<div className={className}>
			<Search onChange={onSearch} searchPhrase={searchPhrase} />
			{posts.length > 0 ? (
				<div className="post-list">
					{posts.map(({ id, title, imageUrl, publishedAt, commentsCount }) => (
						<PostCard
							key={id}
							id={id}
							title={title}
							imageUrl={imageUrl}
							publishedAt={publishedAt}
							commentsCount={commentsCount}
						></PostCard>
					))}
				</div>
			) : (
				<div className="no-post-found">Статьи не найденны</div>
			)}
			{lastPage > 1 && posts.length > 0 && (
				<Pagination page={page} lastPage={lastPage} setPage={setPage} />
			)}
		</div>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& .post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px 20px 80px;
	}

	& .no-post-found {
		text-align: center;
		font-size: 20px;
		margin-top: 40px;
	}
`;
