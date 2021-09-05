import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Image } from "components/atoms";
import { makeStyles } from "@material-ui/core/styles";
import { setVideoModalState } from "states/videoModalState";
import PlayCircleFilledRoundedIcon from "@material-ui/icons/PlayCircleFilledRounded";
/**
 * Component to display the Video Preview
 *
 * @param {Object} props
 */

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    "&:hover": {
      cursor: "pointer"
    }
  },
  thumbnail: {
    borderRadius: 20,
    boxShadow: "0px 5px 18px -5px rgb(0 0 0 / 35%)"
  },
  iconPlay: {
    color: theme.palette.primary.main,
    fontSize: "3.5rem",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: "auto"
  }
}));

const VideoPlayer = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const handleOpenVideo = () => {
    setVideoModalState({ show: true });
  };

  return (
    <div className={classes.root} onClick={handleOpenVideo}>
      <Image
        className={clsx(className, classes.thumbnail)}
        src="https://i.ytimg.com/vi/t_i_Dq2GjAI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5UndqUTy_s0KLkkq4ugbAsZzubQ"
        alt="video-thumbnail"
        lazy={true}
        {...rest}
      />
      <PlayCircleFilledRoundedIcon className={classes.iconPlay} />
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
