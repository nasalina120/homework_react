import React, { Component } from "react";
import dogImage from "./dogImage.jpg";

import styles from "./AnimalSlider.module.sass";
export default class AnimalSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: dogImage,
      caption: "This is some dog",
    };

    this.dogImage = null;
  }

  loadImg = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => this.setState({ imgSrc: data.message }))
      .catch((err) => console.log("error", err));
  };

  componentDidMount() {
    this.loadImg();
  }
  componentDidUpdate() {
    // this.id = setTimeout(this.loadImg, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  render() {
    const { imgSrc, caption } = this.state;
    return (
      <>
        <figure className={styles.sliderContainer}>
          <img src={imgSrc} />
          <figcaption>{caption}</figcaption>
        </figure>
        <button onClick={this.loadImg}>Dogbutton</button>
      </>
    );
  }
}
