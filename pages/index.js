import Head from 'next/head'
import styles from '../styles/home.module.css'

import Card, {CardLink} from '../components/card'

export default function Home() {
	return (
		<div className={styles.container}>
			<Card
			title="Rackodo"
			image="/logo.jpg"
			alt="Rackodo"
			description="Description here."
			>
				<CardLink
				text="Link 1"
				image="https://via.placeholder.com/150/0000FF/000000"
				/>
			</Card>
		</div>
	)
}