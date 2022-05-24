import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Period from '../components/period'
import TimelineMenu from "../components/timelineMenu"
import * as timelineStyles from "../components/timeline.module.scss"

const Timeline = ({ data }) => {
    return (
      <Layout>
        <div className={timelineStyles.timeline}>
        {
          data.strapi.periods.data.map(period => (
            <>
              <TimelineMenu data={period} key={period.id} />
              <Period data={period} key={period.id} />
            </>
          ))
        }
        </div>
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