import React from 'react'
import {Link} from 'gatsby'
import Layout from "../components/Layout"
import Banner from '../components/Banner'
import styles from '../css/error.module.css'


const error = ({children}) => {
    return (
        <Layout>
            <header className={styles.error}>
                <Banner title="Ooops, Error 404" info="The page you were looking for is missing or can't be found.">
                <Link to="/" className="btn-white">Go back to home</Link>
                </Banner>
            </header>
        </Layout>
    )
}

export default error
