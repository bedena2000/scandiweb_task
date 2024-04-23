/* eslint-disable react/prop-types */
import { Component } from "react";
import styles from "./Slider.module.css";
import SliderLeftIcon from "../../assets/icons/CaretLeft.png";
import SliderRightIcon from "../../assets/icons/CaretRight.png";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderLeftImages: [],
      sliderMainImage: [],
      currentSelectedImageNumber: 0,
    };
  }

  render() {
    const imageList = this.props.sliderLeftImages;
    const changeSliderElement = (leftOrRight) => {
      if (leftOrRight === "left") {
        if (this.state.currentSelectedImageNumber - 1 < 0) {
          return;
        } else {
          if (imageList[this.state.currentSelectedImageNumber - 1]) {
            this.setState({
              currentSelectedImageNumber:
                this.state.currentSelectedImageNumber - 1,
            });
          }
        }
      } else {
        if (this.state.currentSelectedImageNumber + 1 === 4) {
          return;
        } else {
          if (imageList[this.state.currentSelectedImageNumber + 1]) {
            this.setState({
              currentSelectedImageNumber:
                this.state.currentSelectedImageNumber + 1,
            });
          }
        }
      }
    };

    return (
      <div className={`${styles["slider"]}`}>
        <div className={`${styles["sliderLeft"]}`}>
          {imageList
            ? imageList.map((item, index) => {
                if (index < 4) {
                  return <img alt="justImage" src={item} key={item} />;
                }
              })
            : null}
        </div>

        <div className={`${styles["sliderMain"]}`}>
          <div
            className={`${styles["sliderArrowLeft"]}`}
            onClick={() => changeSliderElement("left")}
          >
            <img alt="sliderLeftIcon" src={SliderLeftIcon} />
          </div>
          <div
            className={`${styles["sliderArrowRight"]}`}
            onClick={() => changeSliderElement("right")}
          >
            <img alt="sliderRightIcon" src={SliderRightIcon} />
          </div>
          <div className={`${styles["sliderMainBackground"]}`}>
            {imageList ? (
              <img
                alt="SliderMainImage"
                src={imageList[this.state.currentSelectedImageNumber]}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
