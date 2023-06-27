import { Accordion, AccordionDetails, AccordionSummary, Button, TextField, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Rect from '@mui/icons-material/Crop54';
import Triangle from '@mui/icons-material/ChangeHistory';
import Circle from '@mui/icons-material/RadioButtonUnchecked';
import Line from '@mui/icons-material/HorizontalRule';
import './sidebar.scss'
import { useState } from 'react';

const Sidebar = ({ addText, addImage,  addTriangle, addCircle, addRectangle, addLine }) => {
    const [text, setText] = useState('')
    const [link, setLink] = useState('')
    const addingText = (text) => {
        addText(text)
        setText('')
    }
    const addingImage = (link) => {
        addImage(link)
        setLink('')
    }
    return (
        <div className='sidebar'>
            <Accordion>
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                        <Typography>Добавить текст</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TextField id="outlined-basic" label="Введите текст" variant="outlined" defaultValue="Введите текст" value={text} onChange={(e) => setText(e.target.value)}/>
                    <Button onClick={() => addingText(text)} variant="text">Добавить</Button>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                        <Typography>Добавить фигуру</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Rect onClick={() => addRectangle()}  sx={{ fontSize: 80, color: 'yellow'}}/>
                    <Triangle onClick={() => addTriangle()} sx={{ fontSize: 80, color: 'red'}}/>
                    <Circle onClick={() => addCircle()} sx={{ fontSize: 80, color: 'green'}}/>
                    <Line onClick={() => addLine()} sx={{ fontSize: 80, color: 'blue'}}/>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                        <Typography>Добавить картинку</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TextField id="outlined-basic" label="Вставьте ссылку" variant="outlined" defaultValue="" value={link} onChange={(e) => setLink(e.target.value)}/>
                    <Button onClick={() => addingImage(link)}>Добавить</Button>
                </AccordionDetails>
            </Accordion>
            
        </div>
    )
};

export default Sidebar;
