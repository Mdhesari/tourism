import React from "react"
import tips from "../../constants/tips"
import Title from "../Title"
import styles from "../../css/tips.module.css"

export default () => (
  <section className={styles.tips}>
    <Title title="Hot" subTitle="tips" />
    <div className={styles.center}>
      {tips.map((item, index) => (
        <article key={index} className={styles.tip}>
          <span>{item.icon}</span>    
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  </section>
)
