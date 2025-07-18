import classNames from 'classnames'
import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import styles from './Home.module.less'
import viteLogo from '/vite.svg'

export const Home = () => {
	const [count, setCount] = useState(0)

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className={styles.logo} alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className={classNames(styles.logo, styles.react)}
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className={styles.card}>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className={styles.docs}>
				Click on the Vite and React logos to learn more
			</p>
		</>
	)
}
