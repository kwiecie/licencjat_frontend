import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"


const About = () => {
  const data = useStaticQuery(graphql`
    query {
      strapi {
        aboutProject {
          data {
            attributes {
              description
            }
          }
        }
      }
    }
  `)
    return (
      <Layout>
        <h1>O projekcie</h1>
        <p>{data.strapi.aboutProject.data.attributes.description}</p>
      </Layout>
    )
  }

  export default About