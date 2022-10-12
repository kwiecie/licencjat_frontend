import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/Head"


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
      <>
        <Head title="O serwisie"/>
        <Layout>
          <h1>O serwisie</h1>
          <p>{data.strapi.aboutProject.data.attributes.description}</p>
        </Layout>
      </>
      
    )
  }

  export default About