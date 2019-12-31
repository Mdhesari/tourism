import styles from "../css/navbar.module.css"
import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaAlignRight, FaWindowClose } from "react-icons/fa"
import socialIcons from "../constants/social-icons"
import links from "../constants/links"
import logo from "../images/logo.png"

const Navbar = () => {
  const [isOpen, setNav] = useState(0)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <AniLink fade to="/">
            <img src={logo} className={styles.brandLogo} alt="backroads logo" />
          </AniLink>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            {isOpen ? (
              <FaWindowClose className={styles.logoIcon} />
            ) : (
              <FaAlignRight className={styles.logoIcon} />
            )}
          </button>
        </div>
        {/* items */}
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => (
            <li key={index}>
              <AniLink fade duration={1} to={item.path}>{item.text}</AniLink>
            </li>
          ))}
        </ul>
        {/* social media icons */}
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => (
            <a key={index} href={item.url} rel="noopener noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
