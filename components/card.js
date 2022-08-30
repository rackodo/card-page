import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/card.module.css'
import propTypes from 'prop-types'

import { createGlobalStyle } from 'styled-components'

export default function Card( {title, image, description, hue, children} ) {
	console.log(image)

	const CustomPalette = createGlobalStyle`
		html {
			--bg: hsl(${hue}, 53%, 79%);
			--secondary: hsl(${hue}, 54%, 65%);
			--tertiary: hsl(${hue}, 44%, 48%)
		}
	`;

	return(
		<div className={styles.container}>
			<CustomPalette />
			<div className={styles.imageWrapper}>
				<Image
				src={image}
				width={250}
				height={250}
				alt={title}
				className={styles.image} />
			</div>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.description}>{description}</p>
			{children}
		</div>
	)
}

Card.propTypes = {
	title: propTypes.string.isRequired,
	image: propTypes.string.isRequired,
	description: propTypes.string.isRequired,
	hue: propTypes.number.isRequired
};