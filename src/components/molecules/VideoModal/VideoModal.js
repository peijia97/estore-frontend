import React, { useState, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import { useVideoModalStore } from "states/videoModalState";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiDialog-paper": {
      maxWidth: 1280,
      width: "90%",
      position: "relative",
      height: 0,
      paddingBottom: "50%",
      background: "transparent",
      boxShadow: "none"
    }
  },
  iframe: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    width: "100%",
    height: "100%",
    maxWidth: 1280,
    maxHeight: 720
  }
}));

/**
 * Component to display the Video Player
 *
 * @param {Object} props
 */
const VideoModal = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [modalStore] = useVideoModalStore();
  const [showPrintModal, setShowPrintModal] = useState(false);

  useEffect(() => {
    if (modalStore.show) {
      setShowPrintModal(true);
    }
  }, [modalStore]);

  const handleClose = () => {
    setShowPrintModal(false);
  };

  return (
    <Dialog
      className={clsx(classes.root, className)}
      onClose={handleClose}
      open={showPrintModal}
      {...rest}
    >
      <iframe
        className={classes.iframe}
        src="https://www.youtube.com/embed/t_i_Dq2GjAI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Dialog>
  );
};

VideoModal.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default VideoModal;
