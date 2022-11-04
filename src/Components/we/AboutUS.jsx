import React from 'react'
import './AboutUs.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div className='contentAcordeon'>
      <Accordion>
        <AccordionSummary className='accordion' expandIcon={<ExpandMoreIcon className='Icon'/>} aria-controls="panel1a-content" id="panel1a-header">
          <Typography className='title'>¿Qué es CODIGO/C13?</Typography>
        </AccordionSummary>
        <AccordionDetails className='textContent'>
          <Typography className='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary className='accordion' expandIcon={<ExpandMoreIcon className='Icon'/>} aria-controls="panel2a-content" id="panel2a-header">
          <Typography className='title'>¿Qué es sonbata?</Typography>
        </AccordionSummary>
        <AccordionDetails className='textContent'>
          <Typography className='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary className='accordion' expandIcon={<ExpandMoreIcon className='Icon'/>} aria-controls="panel3a-content" id="panel3a-header">
          <Typography className='title'>¿Cuales es la misión y la visión de CODIGO/C13?</Typography>
        </AccordionSummary>
        <AccordionDetails className='textContent'>
          <Typography className='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}