import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const onForwardButtonClick = () => {
		setActiveIndex(activeIndex + 1);
	};

	const onBackButtonClick = () => {
		setActiveIndex(activeIndex - 1);
	};

	const onFromBeginningButtonClick = () => {
		setActiveIndex(0);
	};

	const handleStepClick = (index) => {
		setActiveIndex(index);
	};

	const isFirstStep = activeIndex === 0;
	const isLastStep = activeIndex === data.length - 1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{data.at(activeIndex).content}
					</div>
					<ul className={styles['steps-list']}>
						{data.map((item, index) => (
							<li
								key={item.id}
								className={`
									${styles['steps-item']}
									${index === activeIndex ? styles.active : ''}
									${index < activeIndex ? styles.done : ''}
								`}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => handleStepClick(index)}
								>
									{index + 1}
								</button>
								{item.title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							disabled={isFirstStep}
							onClick={onBackButtonClick}
						>
							Назад
						</button>

						{isLastStep ? (
							<button
								className={styles.button}
								onClick={onFromBeginningButtonClick}
							>
								Начать сначала
							</button>
						) : (
							<button
								className={styles.button}
								onClick={onForwardButtonClick}
							>
								Далее
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
