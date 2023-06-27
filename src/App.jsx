import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Canvas from './components/Canvas/Canvas';
import Header from './components/Header/Header'
import './app.scss'
import { Button } from '@mui/material';

const App = () => {
  const [elements, setElements] = useState([]);
  const [svgCode, setSvgCode] = useState('');

  const addText = (text) => setElements([...elements, { type: 'text', left: 10, top: 10, fontSize: 20, text: text }]);
  const addTriangle = () => setElements([...elements, { type: 'triangle'}]);
  const addCircle = () => setElements([...elements, { type: 'circle' }]);
  const addRectangle = () => setElements([...elements, { type: 'rectangle'}]);
  const addLine = () => setElements([...elements, { type: 'line'}]);
  const addImage = (src) => setElements([...elements, { type: 'image', left: 100, top: 100, src: src }]);

  const saveSvg = () => setSvgCode(elements.map(({ type, ...options }) => `<${type} ${Object.entries(options).map(([key, value]) => `${key}="${value}"`).join(' ')} />`).join('\n'));

  return (
    <>
    <Header/>
    <main className='main'>
      <Sidebar 
        addText={addText} 
        addTriangle={addTriangle} 
        addCircle={addCircle} 
        addRectangle={addRectangle} 
        addLine={addLine} 
        addImage={addImage} 
      />
      <Canvas 
        elements={elements} 
        saveSvg={saveSvg} 
        svgCode={svgCode}
      />
    </main>
    <div className="saveButton">
      <Button 
        onClick={saveSvg} 
        variant="outlined">
          Сохранить SVG код
      </Button>
    </div>
    <pre>{svgCode}</pre>
    </>
  );
};

export default App;
