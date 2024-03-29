import React from "react"
import { graphql } from 'gatsby'
import Head from "../components/Head"
import Layout from "../components/layout"
import Character from '../components/character'


import * as characterStyles from '../components/characters.module.scss'

const Characters = ({ data }) => {
    return (
      <>
        <Head title="Postacie"/>
        <Layout>
          <h1 className={characterStyles.title}>Postacie</h1>
          <div className={characterStyles.characters}>
            {
              data.strapi.people.data.map(person => (
                <Character data={person} key={person.id} />
              ))
            }
          </div>
        </Layout>
      </>
    )
  }

export const query = graphql`
  query {
    strapi {
      people {
        data {
          id
          attributes {
            name
            description
            picture {
              data {
                attributes {
                  url
                }
              }
            }
          } 
        }
      }
    }
  }
`

export default Characters