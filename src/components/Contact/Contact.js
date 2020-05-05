import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'

const Contact = () => {
	return (
		<section className={styles.contact}>
				<Title title="contact" subtitle="us"></Title>
				<div className={styles.center}>
					<form action="https://formspree.io/jkinley@mac.com" method="post" className={styles.form}>
						<div>
							<input type="text" name='name' id="name" className={styles.formControl} placeholder="Full Name" />
						</div>

						<div>
							<input type="email" name='email' id="email" className={styles.formControl} placeholder="Email Address" />
						</div>
						
						<div>
							<textarea type="text" name='message' id="message" rows="10" className={styles.formControl} placeholder="Message" />
						</div>
						
						<div>

							<input type="submit" value="Send Message" className={styles.submit} />
						</div>

					</form>
				</div>
		</section>
	)
}

export default Contact
