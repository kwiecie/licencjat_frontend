import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Period from '../components/period'
import TimelineMenu from "../components/timelineMenu"
import * as timelineStyles from "../components/timeline.module.scss"
import * as timelineMenuStyles from '../components/timelinemenu.module.scss'

const Timeline = ({ data }) => {
  const { strapi: { periods: { data: periodsData }, elementSylwetkis: { data: elements } } } = data;
  console.log(elements)
    return (
      <Layout>
        <div className={timelineStyles.timeline}>
          <TimelineMenu className={timelineMenuStyles.timelineMenu}/>
          {
            periodsData.map(period => (
              <Period data={period} key={period.id} elements={elements} />
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
          id
        }
      }
      elementSylwetkis {
        data {
          attributes {
            period {
              data {
                id
              }
            }
            title
            description
          }
        }
      }
    }
  }`

  export default Timeline