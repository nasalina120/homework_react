import PropTypes from "prop-types";
import styles from "./ImageWrapper.module.sass";

// проброс пропсов
function ImageWrapper({ width, height, children, ...restProps }) {
  const wrapperDims = {
    width, // width: width
    height, // height: height
  };

  return (
    <div {...restProps} style={wrapperDims} className={styles.imageContainer}>
      {children}
    </div>
  );
}

ImageWrapper.defaultProps = {
  width: "300px",
  height: "200px",
};

ImageWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ImageWrapper;
