import styles from '@/styles/background-animation.module.css';

const BackgroundAnimation = () => {
	return (
		<div className={styles.background_animation}>
			<div className={styles.noise_bg}></div>
			<div className={styles.gradients_container}>
				<div className={styles.g1}></div>
				<div className={styles.g2}></div>
			</div>
		</div>
	);
};

export default BackgroundAnimation;
