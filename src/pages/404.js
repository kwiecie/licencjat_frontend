import * as React from "react"
import { Link } from "gatsby"
import Head from "../components/Head"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <Head title="404"/>
      <h1 style={headingStyles}>404</h1>
      <h2 style={headingStyles}>Strona nie istnieje</h2>
      <p style={paragraphStyles}>
                <br />
        <Link to="/">Powrót do strony głównej</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
