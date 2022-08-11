import { Box, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { formatTime } from '../utils';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const End = ({ results, data, onReset, time }) => {


  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    let correct = results.filter((result, index) => result.userAnswer === true);
    setCorrectAnswers(correct.length);
    // eslint-disable-next-line
  }, []);

  //console.log(data.q)

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Your results</h3>
          <p>{correctAnswers} of {data.length}</p>
          <p><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
          <p><strong>Your time:</strong> {formatTime(time)}</p>
          <button className="button is-info mr-2" onClick={handleOpen}>Check your answers</button>
          <button className="button is-success" onClick={onReset}>Try again</button>
        </div>
      </div>


      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Your answers
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {data.map((result, i) => (
                <li key={i} className="mb-6">
                
                <strong>{result.question}</strong>
                
                  {/*<span className={result.answer === data[i].answer ? 
                    'has-background-success has-text-white p-2' : 'has-background-danger has-text-white p-2'}>
                    Your answer: {'xyz'}
                  </span><br></br>*/}
              
                
                    <span className="has-background-link has-text-white p-2">
                    Correct answer: {result.answer}
                   
                    </span>
                  
                  
                  
                </li>
              ))}

            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default End;