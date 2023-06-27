import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Canvas from './components/Canvas/Canvas';

const App = () => {
  const [elements, setElements] = useState([]);
  const [svgCode, setSvgCode] = useState('');

  // Добавление элементов на Canvas
  const addText = () =>
    setElements([...elements, { type: 'text', left: 10, top: 10, fontSize: 20, text: 'Введите текст' }]);
  const addSVG = () => setElements([...elements, { type: 'svg', left: 50, top: 50, path: 'M 0 0 L 100 100 L 0 100 z' }]);
  const addImage = () => setElements([...elements, { type: 'image', left: 100, top: 100, src: 'https://via.placeholder.com/150' }]);

  // Сохранение SVG кода
  const saveSvg = () => setSvgCode(elements.map(({ type, ...options }) => `<${type} ${Object.entries(options).map(([key, value]) => `${key}="${value}"`).join(' ')} />`).join('\n'));

  return (
    <div>
      <Sidebar addText={addText} addSVG={addSVG} addImage={addImage} />
      <Canvas elements={elements} />
      <button onClick={saveSvg}>Сохранить SVG код</button>
      <pre>{svgCode}</pre>
    </div>
  );
};

export default App;
