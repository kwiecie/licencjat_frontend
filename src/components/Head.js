import React from 'react';
import { Helmet } from 'react-helmet';
import logo from "../images/logo_licencjat.png"

const Head = ({ title}) => {
  return (
    <>
      <link rel="icon" type="image/x-icon" src={logo}></link>
        <Helmet
            defaultTitle="Default title | My website"
            title={title}
            titleTemplate="%s | Historia Polskiej Mody Kobiecej XXw"
         />
    </>
  )
}

export default Head;