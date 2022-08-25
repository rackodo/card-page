import React from 'react'
import Image from 'next/image'
import styles from '../styles/card.module.css'

export default function Card( {title, image, alt, description} ) {
	console.log(image)
	return(
		<div className={styles.container}>
			<Image
			src={image}
			width="200"
			height="200"
			alt={alt} />
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	)
}

