import React from 'react';
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

  console.log(data)
  return (
    <div className={timelineMenuStyles.timelineMenu}>
      <ul className={timelineMenuStyles.timelineUl}>
      {
        data.strapi.periods.data.map(period => (
          <li key={period.id} className={timelineMenuStyles.list}>
              <Link to={`#${period.attributes.title}`} className={timelineMenuStyles.listPeriod}>
                {period.attributes.title}
              </Link><br />
              <Link to={`#${period.attributes.title}`} className={timelineMenuStyles.listDate}>
                {period.attributes.dates}
              </Link><br />
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default TimelineMenu