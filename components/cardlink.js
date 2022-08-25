import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/cardlink.module.css'

export default function CardLink( text, image, href ) {
    console.log(image)
	return(
		<div className={styles.container}>
			<Image
			src={image}
			width={64}
			height={64}
			alt="" />
		</div>
	)
}