import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"


const IndexPage = () => {
  return (
    <Layout>
      <title>Strona główna</title>
      <h1>
        Historia mody kobiecej XX w.
      </h1>
      <p>
        Vivamus odio nisi, volutpat quis scelerisque sit amet, venenatis id nisi. Ut ac orci tempor, sollicitudin ex placerat, imperdiet nulla. Nulla non ex tortor. In at neque et urna faucibus tempor sed non risus. Vivamus dictum massa dolor, eget feugiat ex pulvinar eu. Sed volutpat massa velit. Donec vestibulum dui ac finibus porta. Cras nulla enim, ultricies ac mi et, lobortis tincidunt sem. Nullam sem dolor, ornare dictum purus in, rutrum condimentum ligula.
      </p>
      <p>
        Nulla consequat sapien vel nibh pellentesque porta. Proin quis scelerisque leo, sed varius purus. Nulla tempor arcu id libero consequat, in ornare sapien cursus. Curabitur ut dui eget sapien rutrum feugiat non vitae massa. Curabitur id libero et mauris convallis elementum. Cras cursus purus ut risus lobortis, eget malesuada libero cursus. Aliquam mi lorem, ullamcorper sed eros sed, ullamcorper lacinia odio. Donec et tellus justo. Ut hendrerit turpis vitae dolor facilisis mollis. Morbi hendrerit enim lectus, ut faucibus magna gravida sit amet. Aenean dictum ante augue, id facilisis metus porta quis.
      </p>
      <h3>
        <Link to="/timeline">Linia czasu</Link>
      </h3>
    </Layout>
  )
}

export default IndexPage
