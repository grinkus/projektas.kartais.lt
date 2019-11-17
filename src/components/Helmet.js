import React from "react"
import Helmet from "react-helmet"

import "../../node_modules/normalize.css"
import "../site.css"

const TemplateWrapper = ({ title }) => (
  <Helmet
    title={title ? `${title} - projektas` : `projektas`}
    meta={[
      { name: `description`, content: `Paprastas projektas` },
      { name: `keywords`, content: `kartais, projektas` },
    ]}
  >
    <html lang="lt" />
    <link rel="shortcut icon" href="/favicon.ico" />
  </Helmet>
)

export default TemplateWrapper
