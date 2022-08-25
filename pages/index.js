import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'

import CardLink from '../components/cardlink'
import Card from '../components/card'

export default function Home() {
	return (
		<div className={styles.container}>
			<Card
			image="https://via.placeholder.com/150.png" />
			<CardLink
			image="/logo.jpg"
			text="Link 1"
			href=""
			alt="what"
			/>
		</div>
	)
}