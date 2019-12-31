import React from "react"

import styles from "../css/footer.module.css"
import links from "../constants/links"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import socialIcons from "../constants/social-icons"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* nav links */}
      <div className={styles.links}>
        {links.map((item, index) => (
          <AniLink key={index} to={item.path}>
            {item.text}
          </AniLink>
        ))}
      </div>
      {/* social media icons */}
      <div className={styles.icons}>
        {socialIcons.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* copy right */}
      <p>&copy; Built with love {new Date().getFullYear()} Allright reserved </p>
    </footer>
  )
}

export default Footer
