import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { HeaderWrapper } from "../../styles/layout/HeaderStyles"

const Header = () => {
  let [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        setIsScrolled((isScrolled = true))
      } else {
        setIsScrolled((isScrolled = false))
      }
    })
  }, [])

  return (
    <HeaderWrapper isScrolled={isScrolled}>
      <div className="navContainer">
        <div id="logo">
          <Link to="/" aria-label="to home page">
            <h2>ORIOL SUBIRANA</h2>
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link activeClassName="activePage" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link activeClassName="activePage" to="/tutorials">
                Tutorials
              </Link>
            </li>
            <li>
              <Link activeClassName="activePage" to="/technologies">
                Technologies
              </Link>
            </li>
            <li>
              <Link activeClassName="activePage" to="/about">
                About Me
              </Link>
            </li>
            <li>
              <Link activeClassName="activePage" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderWrapper>
  )
}

export default Header
