import React, { useRef, useEffect } from 'react';
import { fabric } from 'fabric';
import './canvas.scss'

const Canvas = ({ elements }) => {
    const canvasRef = useRef(null);

useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);

    // Добавляем элементы на Canvas
    elements.forEach(({ type, ...options }) => {
        let element;

        switch (type) {
            case 'text':
                element = new fabric.Text(options.text, options);
            break;
            case 'circle':
                element = new fabric.Circle({radius: 100, fill: 'green', left: 100, top: 100});
            break;
            case 'triangle':
                element = new fabric.Triangle({width: 150, height: 130, fill: 'red', left: 50, top: 50});
            break;
            case 'line':
                element = new fabric.Line([50, 10, 200, 150], {stroke: 'blue'});
            break;
            case 'rectangle':
                element = new fabric.Rect({width: 150, height: 150, fill: 'yellow', left: 30, top: 100});
            break;
            case 'image':
                fabric.Image.fromURL(options.src, img => {
                    element = img;
                    canvas.add(element);
            });
            break;
            default:
            break;
        }

        if (element !== undefined) canvas.add(element);
    
        // Обновляем Canvas при изменении размеров окна
    window.addEventListener('resize', () => {
        canvas.setWidth(700);
        canvas.setHeight(500);
        canvas.renderAll();
    });
    });

    // Устанавливаем размер Canvas
    canvas.setWidth(1000);
    canvas.setHeight(800);

    return () => {
    // Очищаем Canvas при размонтировании компонента
    canvas.dispose();
    };
}, [elements]);

return <canvas className='canvas' ref={canvasRef} />;
};

export default Canvas;
