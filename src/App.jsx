import styles from './app.module.css';
import { useEffect, useState } from 'react';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [isValueVaild, setIsValueValid] = useState(false);

	const onInputButtonClick = () => {
		const promptValue = prompt('Пожалуйста, введите новое значение');

		if (promptValue === null || promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
			setIsValueValid(false);
			setValue('');
		} else {
			setValue(promptValue);
			setError('');
			setIsValueValid(true);
		}
	};

	const onAddButtonClick = () => {
		if (isValueVaild) {
			const updatedList = [...list, { id: Date.now(), value: value }];
			setList(updatedList);
			setValue('');
			setError('');
			setIsValueValid(false);
		}
	};

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "
				<output className={styles['current-value']}>{value}</output>"
			</p>
			{error !== '' ? <div className={styles.error}>{error}</div> : <></>}
			<div className={styles['buttons-container']}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!isValueVaild}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{list.length > 0 ? (
					<ul className={styles.list}>
						{list.map(({ id, value }) => (
							<li className={styles['list-item']} key={id}>
								{value}
							</li>
						))}
					</ul>
				) : (
					<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				)}
			</div>
		</div>
	);
};
