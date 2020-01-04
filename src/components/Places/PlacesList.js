import React, { Component } from "react"
import Title from "../Title"
import styles from "../../css/items.module.css"
import Place from "./Place"

class PlacesList extends Component {
  state = {
    places: [],
    sortedPlaces: [],
  }

  componentDidMount() {
    this.setState({
      places: this.props.places.edges,
      sortedPlaces: this.props.places.edges,
    })
  }

  render() {
    return (
      <section className={styles.tours}>
        <Title title="Our Places" subTitle="Know before you go!" />
        <div className={styles.center}>
          {this.state.sortedPlaces.map(({ node }) => (
            <Place key={node.contentful_id} place={node} />
          ))}
        </div>
      </section>
    )
  }
}

export default PlacesList
