import React from 'react';
import { graphql } from 'gatsby';
import * as periodStyles from './period.module.scss'

const Period = ({ data }) => {
  const { attributes: { title, dates } } = data;
  return (
    <div className={periodStyles.periodSection}>
      <section className={periodStyles.period} id={title}>
        <h1 className={periodStyles.title}>
          {title}
        </h1>
        <p>
          {dates}
        </p>
        <div>
        {/* {
        data.strapi.elementySylwetkis.data.attibutes.map(period => (
          <li key={period.id}>
                {period.attributes.title}
          </li>
          ))
        } */}
        </div>
        </section>
    </div>
    
  )
}

export const query = graphql`
  {
    strapi {
      elementSylwetkis {
        data {
          attributes {
            period {
              data {
                attributes {
                  title
                }
              }
            }
            description
            title
          }
        }
      }
    }
  }
`

export default Period