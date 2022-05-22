import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const Timeline = ({ data }) => {
    return (
      <Layout>
        <h1>Linia czasu</h1>
        {
          data.strapi.periods.data.map(period => (
            <>
              <h2 key={period.id}>
                {period.attributes.title}
              </h2>
              <p key={period.id}>
                {period.attributes.dates}
              </p>
            </>
          ))
        }
      </Layout>
    )
  }

  export const query = graphql`
  {
    strapi {
      periods {
        data {
          attributes {
            title
            dates
          }
        }
      }
    }
  }`

  export default Timeline