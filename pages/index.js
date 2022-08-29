import styles from '../styles/home.module.css'

import CardLink from '../components/cardlink'
import Card from '../components/card'
import { useState } from 'react';

export default function Home() {
	if (typeof window !== "undefined") {
		var slider = document.getElementById("slider");
		var card = document.getElementById("card");
	}

	const [hue, setHue] = useState(180);

	return (
		<>
			<label htmlFor="hue">Hue</label>
			<input name="hue" type="range" min="0" max="360" value={hue} className={styles.slider} id="slider" onInput={e => setHue(e.target.value)} />
			<div className={styles.container}>
				<Card
				hue={hue}
				image="/logo.jpg"
				title="Rackodo"
				id="card"
				description="Hey! My name's Bash. I'm an aspiring front-end website developer looking to network with others and make something great." >
					<CardLink
					image="/icons/instagram-brands.svg"
					text="Instagram"
					href="https://instagram.com/rackodo"
					alt="Rackodo's Instagram"
					/>
					<CardLink
					image="/icons/youtube-brands.svg"
					text="YouTube"
					href="https://www.youtube.com/channel/UChiRebGN9a1oSoG_QZj6LjQ"
					alt="Rackodo's YouTube"
					/>
					<CardLink
					image="/icons/twitter-brands.svg"
					text="Twitter"
					href="https://twitter.com/rackodohere"
					alt="Rackodo's Twitter"
					/>
				</Card>
			</div>
		</>
	)
}