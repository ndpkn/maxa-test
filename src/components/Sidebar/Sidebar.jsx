import React from 'react';

const Sidebar = ({ addText, addSVG, addImage }) => (
    <div>
        <button onClick={() => addText()}>Добавить текст</button>
        <button onClick={() => addSVG()}>Добавить SVG фигуру</button>
        <button onClick={() => addImage()}>Добавить картинку</button>
    </div>
);

export default Sidebar;
