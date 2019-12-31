import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"
import swal from "sweetalert"

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: null,
    }
  }

  render() {
    const { status } = this.state
    return (
      <section className={styles.contact}>
        <Title title="contact Form" subTitle="Tell What you need" />
        <div className={styles.center}>
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/xoqjpgjd"
            method="POST"
            className={styles.form}
          >
            <div>
              <label htmlFor="name">name</label>
              <input
                type="text"
                name="name"
                id="name"
                className={styles.formControl}
                placeholder="john smith"
              />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="_replyto"
                id="email"
                className={styles.formControl}
                placeholder="[email@email.com](mailto:email@email.com)"
              />
            </div>
            <div>
              <label htmlFor="message">message</label>
              <textarea
                name="message"
                id="message"
                rows="10"
                className={styles.formControl}
                placeholder="hello there"
              />
            </div>
            <div>
              <input type="submit" value="Send" className={styles.submit} />
            </div>
            {status !== null ? (
              <div
                className={
                  status === 1 ? styles.alertSuccess : styles.alertDanger
                }
              >
                {status === 1
                  ? "Thanks, We will get in touch soon!"
                  : "Sorry, Something went wrong"}
              </div>
            ) : (
              ""
            )}
          </form>
        </div>
      </section>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return

      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: 1 })
        swal(
          "Your data is submitted and we are going to contact you soon!",
          "+989105667705",
          "success"
        )
      } else {
        this.setState({ status: 0 })
        swal(
          "Something went wrong, please try again later.",
          "Be careful to enter valid values!",
          "error"
        )
      }
    }

    xhr.send(data)
  }

  // end class
}

export default Contact
