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
            case 'svg':
                element = new fabric.Path(options.path, options);
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
        canvas.setWidth(window.innerWidth - 300);
        canvas.setHeight(window.innerHeight - 300);
        canvas.renderAll();
    });
    });

    // Устанавливаем размер Canvas
    canvas.setWidth(window.innerWidth - 300);
    canvas.setHeight(window.innerHeight - 300);



    return () => {
    // Очищаем Canvas при размонтировании компонента
    canvas.dispose();
    };
}, [elements]);

return <canvas className='canvas' ref={canvasRef} />;
};

export default Canvas;
