import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

/**
 * Component to display the Video Player
 *
 * @param {Object} props
 */
const VideoPlayer = props => {
  const { className, ...rest } = props;

  return (
    <div className={clsx(className)} {...rest}>
      <iframe
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/t_i_Dq2GjAI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

VideoPlayer.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default VideoPlayer;
