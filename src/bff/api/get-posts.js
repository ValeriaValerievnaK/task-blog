import { transformPost } from '../transformers';

export const getPosts = (searchPhrase, page, limit) =>
	fetch(
		`http://localhost:3005/posts?title=${searchPhrase}&_page=${page}&_per_page=${limit}`,
	)
		.then((response) => response.json())
		.then((data) => ({
			posts: data.data && data.data.map(transformPost),
			lastPage: data.last,
		}));

// В видео материале автор использует параметр пагинации _limit. При запросе с разными _page
// все равно возвращалась только первая страница.
// Для решения этой проблемы я использовала расширенный параметр из официальной документации _per_page
// Он возвращает сразу число последней стриницы и другие данные.
// Я записала и использовала его в компоненте. Это позволило избежать утилиты с регулярным выражением.

// аналогично проблеме выше не работает параметр _like. Используя строгий поиск невозможно
// найти статью при вводе не строго полного title
