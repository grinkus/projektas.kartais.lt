import React from "react"
import { Link } from "gatsby"

import Helmet from "../components/Helmet"

import "./Layout.css"
import "./header.css"

const Layout = ({ children }) => (
  <div>
    <Helmet />
    <header className="header">
      <div className="header__constraint">
        <h1>
          <Link to="/">Projektas</Link>
        </h1>
      </div>
    </header>
    {children}
  </div>
)

export default Layout
