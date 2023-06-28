import React, { useRef, useEffect, useState } from "react";
import { fabric } from "fabric";
import "./app.scss"
import SidebarView from "./components/SidebarView";
import CanvasView from "./components/CanvasView";
import Header from "./components/Header";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1); // Добавляем новое состояние для отслеживания индекса истории

  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 600,
    });
    setCanvas(newCanvas);

    return () => {
      newCanvas.dispose();
    };
  }, []);

  useEffect(() => {
    if (canvas) {
      const handleObjectAdded = () => {
        const currentState = canvas.toJSON();
        setHistory((prevHistory) => [
          ...prevHistory.slice(0, historyIndex + 1),
          currentState,
        ]);
        setHistoryIndex((prevIndex) => prevIndex + 1);
      };

      canvas.on("object:added", handleObjectAdded);

      return () => {
        canvas.off("object:added", handleObjectAdded);
      };
    }
  }, [canvas, historyIndex]);

  const addText = () => {
    const text = new fabric.Textbox("New Text", {
      left: 100,
      top: 100,
    });
    canvas.add(text);
  };

  const addRectangle = () => {
    const rect = new fabric.Rect({
      width: 200,
      height: 150,
      fill: "red",
      left: 200,
      top: 200,
    });
    canvas.add(rect);
  };
  const addTriangle = () => {
    const rect = new fabric.Triangle({
      width: 150,
      height: 150,
      fill: "green",
      left: 250,
      top: 150,
    });
    canvas.add(rect);
  };
  const addCircle = () => {
    const rect = new fabric.Circle({
      radius: 100,
      fill: "orange",
      left: 100,
      top: 100,
    });
    canvas.add(rect);
  };
  const addLine = () => {
    const rect = new fabric.Line([50, 10, 200, 150], { stroke: "blue" });
    canvas.add(rect);
  };

  const addImage = () => {
    fabric.Image.fromURL("http://placekitten.com/g/200/300", (img) => {
      img.scaleToWidth(200);
      img.scaleToHeight(150);
      img.set({
        left: 300,
        top: 300,
      });
      canvas.add(img);
    });
  };

  const saveSvg = () => {
    const svgCode = canvas.toSVG();
    console.log(svgCode);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const undo = () => {
    if (canvas && historyIndex > 0) {
      // Проверяем, есть ли что отменять
      const previousState = history[historyIndex - 1];
      canvas.loadFromJSON(previousState, () => {
        canvas.renderAll();
        setHistoryIndex((prevIndex) => prevIndex - 1); // Уменьшаем индекс истории
      });
    }
  };

  const redo = () => {
    if (canvas && historyIndex < history.length - 1) {
      // Проверяем, есть ли что восстанавливать
      const nextState = history[historyIndex + 1];
      canvas.loadFromJSON(nextState, () => {
        canvas.renderAll();
        setHistoryIndex((prevIndex) => prevIndex + 1); // Увеличиваем индекс истории
      });
    }
  };

  const zoomIn = () => {
    if (canvas) {
      canvas.setZoom(canvas.getZoom() * 1.1);
      canvas.renderAll();
    }
  };

  const zoomOut = () => {
    if (canvas) {
      canvas.setZoom(canvas.getZoom() / 1.1);
      canvas.renderAll();
    }
  };

  return (
    <>
    <Header/>
    <div className="main">
      <div className="canvas">
        <SidebarView
          addText={addText}
          addRectangle={addRectangle}
          addTriangle={addTriangle}
          addCircle={addCircle}
          addLine={addLine}
          addImage={addImage}
          undo={undo}
          redo={redo}
          zoomIn={zoomIn}
          zoomOut={zoomOut}
          saveSvg={saveSvg}
          />
        <CanvasView
          canvasRef={canvasRef}
          modalOpen={modalOpen}
          closeModal={closeModal}
          canvas={canvas}
        />
      </div>
    </div>
    </>
  );
};

export default Canvas;
