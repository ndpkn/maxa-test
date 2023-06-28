import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Modal from "react-modal";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    width: '750px',
    maxHeight: '500px',
    margin: '0 auto'
  }
}
const CanvasView = ({canvasRef, modalOpen, closeModal, canvas}) => {
  return (
    <>
      <div className="canvas__field">
        <canvas ref={canvasRef} />
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="closeButton">
          <Button onClick={closeModal}>
            <CloseIcon />
          </Button>
        </div>
        <h2>SVG Code</h2>
        <pre id="svg">{canvas ? canvas.toSVG() : ""}</pre>
      </Modal>
    </>
  );
};

export default CanvasView;
