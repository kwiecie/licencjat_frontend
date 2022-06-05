import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Period from '../components/period'
import TimelineMenu from "../components/timelineMenu"
import * as timelineStyles from "../components/timeline.module.scss"
import * as timelineMenuStyles from '../components/timelinemenu.module.scss'

const Timeline = ({ data }) => {
  //const { attributes: { title, dates } } = data;
    return (
      <Layout>
      <div className={timelineStyles.timeline}>
      <TimelineMenu className={timelineMenuStyles.timelineMenu}/>
        {
          data.strapi.periods.data.map(period => (
            <Period data={period} key={period.id} />
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