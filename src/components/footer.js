import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
  `)
  
    return (
        <footer>
            <p>Mapa strony</p>
            <p>{data.site.siteMetadata.title}</p>
        </footer>
    )
}

export default Footer