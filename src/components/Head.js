import React from 'react'
import { Helmet } from 'react-helmet'

const Head = ({ title}) => {
  return (
    <>
        <Helmet
            defaultTitle="Default title | My website"
            title={title}
            titleTemplate="%s | Historia Polskiej Mody Kobiecej XXw"
         />
    </>
  )
}

export default Head