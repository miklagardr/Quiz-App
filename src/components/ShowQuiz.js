import React, { useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Radio,
  FormControlLabel,
  Stack,
  Button,
  Alert,
} from '@mui/material';

function ShowQuiz({ question, changeQues, lengthQues }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [prevQues, setPrevQues] = useState(1);
  const [score, setScore] = useState(0);
  const [answerA, setAnswerA] = useState('');
  const [answerB, setAnswerB] = useState('');
  const [answerC, setAnswerC] = useState('');
  const [note, setNote] = useState('');
  const [butn , setButn] = useState(false); 
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const showAnswer = (event) => {
    if (selectedOption == null) {
      event.preventDefault();
      setNote(<Alert  className="gradient-background" severity="error">Please choose one option !</Alert>);
    } else {
      if (selectedOption === question.correctOption) {
        setNote(<Alert  className="gradient-background" severity="success">Correct Answer !</Alert>);
      } else {
        setNote(<Alert  className="gradient-background-wrong" severity="error">Wrong Answer !</Alert>);
      }
      event.preventDefault();
      if (question.correctOption === 'A') {
        setAnswerA('active');
        setAnswerB('wrong');
        setAnswerC('wrong');
      } else if (question.correctOption === 'B') {
        setAnswerB('active');
        setAnswerA('wrong');
        setAnswerC('wrong');
      } else if (question.correctOption === 'C') {
        setAnswerC('active');
        setAnswerB('wrong');
        setAnswerA('wrong');
      }
    }
  };

  const nextQuestion = (event) => {
    event.preventDefault();
  
    if (selectedOption == null) {
      setNote(<Alert className="gradient-background" severity="warning">No choice selected. Please choose an option!</Alert>);
    } else {
      if (selectedOption === question.correctOption) {
        setScore(score + 1);
      }
    }
  
    setAnswerA('');
    setAnswerB('');
    setAnswerC('');
    setNote('');
  
    if (lengthQues >= prevQues + 1) {
      setPrevQues(prevQues + 1);
      changeQues(prevQues);
      setSelectedOption(null);
    } else {
      setNote(<Alert className="gradient-background" severity="info"> Total number of correct answers : {score + (selectedOption === question.correctOption ? 1 : 0)}</Alert>);
      setButn(true);
    }
  };
  

  return (
    <div >
      <form style={{ maxWidth: '60vw', margin: 'auto' , minWidth : '60vw' ,}}>
        <Table  >
          <TableHead>
            <TableRow >
              <TableCell >Question {question.id} : </TableCell>
              <TableCell>{question.text}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={answerA}>
              <TableCell>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedOption === 'A'}
                      onChange={handleOptionChange}
                      value='A'
                      name='groupQ'
                    />
                  }
                  label='A'
                />
              </TableCell>
              <TableCell>{question.optionA}</TableCell>
            </TableRow>
            <TableRow className={answerB}>
              <TableCell>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedOption === 'B'}
                      onChange={handleOptionChange}
                      value='B'
                      name='groupQ'
                    />
                  }
                  label='B'
                />
              </TableCell>
              <TableCell>{question.optionB}</TableCell>
            </TableRow>
            <TableRow className={answerC}>
              <TableCell>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedOption === 'C'}
                      onChange={handleOptionChange}
                      value='C'
                      name='groupQ'
                    />
                  }
                  label='C'
                />
              </TableCell>
              <TableCell>{question.optionC}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </form>
      <div> 
          <Stack   direction='row'
                   justifyContent='space-between'
                   alignItems='center'
                   marginTop={3}
                  >
          <Button disabled={butn} variant='contained' color='warning' onClick={showAnswer}>
            See result
          </Button>
          <Button disabled={butn}  variant='contained' color='success' onClick={nextQuestion}>
            Next Question
          </Button>
        </Stack></div>
        <div style={{marginTop : '20px'}} >{note}</div>
    </div>
  );
}

export default ShowQuiz;
