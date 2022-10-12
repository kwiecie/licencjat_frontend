import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby"
import * as timelineMenuStyles from './timelinemenu.module.scss'

const TimelineMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      strapi {
        periods {
          data {
            id
            attributes {
              title
              dates
            }
          }
        }
      }
    }
  `)

  return (
    <div className={timelineMenuStyles.timelineMenu}>
      <ul className={timelineMenuStyles.timelineUl}>
      <div className={timelineMenuStyles.list}>
        {
          data.strapi.periods.data.map(period => (
            <li key={period.id} className={timelineMenuStyles.li}>
                <Link to={`#${period.attributes.title}`} className={timelineMenuStyles.listPeriod}>
                  {period.attributes.title}
                </Link><br />
                <Link to={`#${period.attributes.title}`} className={timelineMenuStyles.listDate}>
                  {period.attributes.dates}
                </Link><br />
            </li>
          ))
        }
      </div>
      </ul>
    </div>
  )
}

export default TimelineMenu