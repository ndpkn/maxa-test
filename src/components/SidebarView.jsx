import TextIcon from "@mui/icons-material/TextFields";
import RectangleIcon from "@mui/icons-material/Rectangle";
import CircleIcon from "@mui/icons-material/Circle";
import TriangleIcon from "@mui/icons-material/ChangeHistory";
import LineIcon from "@mui/icons-material/HorizontalRule";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import SaveIcon from "@mui/icons-material/SaveAlt";
import ImageIcon from "@mui/icons-material/Image";
import { Button } from "@mui/material";


const SidebarView = ({addText, addRectangle, addTriangle, addCircle, addLine, addImage, undo, redo, zoomIn, zoomOut, saveSvg }) => {
  return (
    <aside className="canvas__buttons">
      <div className="canvas__buttons-shapes">
        <Button variant="text" onClick={() => addText()}>
          <TextIcon sx={{ fontSize: 40, color: "black" }} />
        </Button>
        <Button variant="text" onClick={() => addRectangle()}>
          <RectangleIcon sx={{ fontSize: 40, color: "red" }} />
        </Button>
        <Button variant="text" onClick={() => addTriangle()}>
          <TriangleIcon sx={{ fontSize: 40, color: "green" }} />
        </Button>
        <Button variant="text" onClick={() => addCircle()}>
          <CircleIcon sx={{ fontSize: 40, color: "orange" }} />
        </Button>
        <Button variant="text" onClick={() => addLine()}>
          <LineIcon sx={{ fontSize: 40, color: "blue" }} />
        </Button>
        <Button variant="text" onClick={() => addImage()}>
          <ImageIcon sx={{ fontSize: 40, color: "#45c302" }} />
        </Button>
      </div>
      <div className="canvas__buttons-controls">
        <Button variant="outlined" onClick={() => undo()}>
          <UndoIcon />
        </Button>
        <Button variant="outlined" onClick={() => redo()}>
          <RedoIcon />
        </Button>
        <Button variant="outlined" onClick={() => zoomIn()}>
          <ZoomInIcon />
        </Button>
        <Button variant="outlined" onClick={() => zoomOut()}>
          <ZoomOutIcon />
        </Button>
        <Button variant="outlined" onClick={() => saveSvg()}>
          <SaveIcon />
        </Button>
      </div>
    </aside>
  );
};

export default SidebarView;
