import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/cardlink.module.css'

export default function CardLink({ text, image, href }) {
    console.log(image)
	return(
		<div className={styles.wrapper}>
			<Link href={href}>
				<a className={styles.container} target="_blank">
					<div className={styles.imageWrapper}>
						<Image
						className={styles.image}
						src={image}
						width={48}
						height={48}
						alt={text} />
					</div>
					<div className={styles.label}>
						{text}
					</div>
				</a>
			</Link>
		</div>
	)
}