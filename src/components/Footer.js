import React from 'react'
import {Link} from 'gatsby'

import styles from '../css/footer.module.css'
import links from '../constants/links'
import social from '../constants/social'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
            {links.map((item, index) => {
                return(
                    <Link key={index} to={item.path}>{item.text}</Link> 
                )
            })}
            </div>

            <div className={styles.icons}>
            {social.map((item,index) => {
                return(
                <a href={item.url} key={index} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                </a>
                )
            })}
            </div>

            <p className={styles.copyright}>
                Copyright &copy; backroads travel company. {new Date().getFullYear()} all rights reserved.
            </p>

        </footer>
    )
}

export default Footer
