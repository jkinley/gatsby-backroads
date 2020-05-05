import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
const getSiteData = graphql`
    query {
        site{
        info:siteMetadata{
            title
            description
            author
            data {
            name
            age
            birthday
            }
        }
        }
    }`

const Header = () => {

    const {site:{info}} = useStaticQuery(getSiteData);
    console.log(info)
    return (
        <div>
            <h1>Title: {info.title}</h1>
            <h1>Author: {info.author}</h1>
        </div>
    )
}

export default Header
