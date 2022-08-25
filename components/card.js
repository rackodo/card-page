import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import cardStyle from '../styles/card.module.css'
import linkStyle from '../styles/cardlink.module.css'

export default function Card( {title, image, alt, description, children} ) {

	return(
		<div className={cardStyle.container}>
			<Image
			src={image}
			width="200"
			height="200"
			alt={alt} />
			<h1>{title}</h1>
			<p>{description}</p>
			
			{ [...children] }

		</div>
	)
}

export function CardLink( text, icon, link ) {
	return(
		<div className={linkStyle.container}>
			<div className={linkStyle.icon}>{icon}</div>
			<div className={linkStyle.link}>
				<Link href={link}>{text}</Link>
			</div>
		</div>
	)
}