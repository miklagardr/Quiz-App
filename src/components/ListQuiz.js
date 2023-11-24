import React from 'react'
import { useState } from 'react'
import ShowQuiz from './ShowQuiz';
import { Container, Box } from '@mui/material';
function ListQuiz() {
  const [Questions, setQuestion] = useState([
    {
      id: 1,
      text: 'The longer side of a rectangle is 12 cm, and the shorter side is 8 cm. What is the area of this rectangle?',
      optionA: '64 cm²',
      optionB: '80 cm²',
      optionC: '96 cm²',
      correctOption: 'A'
    },
    {
      id: 2,
      text: 'It takes 6 hours for a bus to travel from one city to another. What is its average speed in km per hour?',
      optionA: '60 km/h',
      optionB: '70 km/h',
      optionC: '80 km/h',
      correctOption: 'B'
    },
    {
      id: 3,
      text: 'You spent a total of 150 TL in a shopping spree. You have a 20% discount coupon. What is the discounted price?',
      optionA: '120 TL',
      optionB: '125 TL',
      optionC: '130 TL',
      correctOption: 'A'
    },
    {
      id: 4,
      text: 'If the diameter of a circle is 14 cm, what is the circumference of this circle?',
      optionA: '22 cm',
      optionB: '44 cm',
      optionC: '88 cm',
      correctOption: 'B'
    },
    {
      id: 5,
      text: 'In a library, there are a total of 500 books. 3/5 of these books are novels, and the rest are science fiction books. How many science fiction books are there?',
      optionA: '100',
      optionB: '150',
      optionC: '200',
      correctOption: 'C'
    },
    {
      id: 6,
      text: 'One angle of a triangle is 45°, and another is 60°. What is the measure of the remaining angle?',
      optionA: '45°',
      optionB: '60°',
      optionC: '75°',
      correctOption: 'C'
    },
    {
      id: 7,
      text: 'In a box, there are 5 red, 3 green, and 2 blue balls. What is the probability of randomly selecting a red ball?',
      optionA: '1/2',
      optionB: '1/3',
      optionC: '2/5',
      correctOption: 'A'
    },
  ]);
  
    const [quesNumb , setQuesNumb] = useState(0); 
    const changeQues = (number) =>{
      setQuesNumb(number); 
    }
    
    const renderedQuiz = <ShowQuiz  question={Questions[quesNumb]} changeQues = {changeQues} lengthQues={Questions.length}/>
     
      
    
     
   
    
   return (
    <Container>
    <Box
     
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        borderRadius:'5px',
        border:'1px solid #FFF',

        
      }}
    >
      {renderedQuiz}
    </Box>
  </Container>
   )
}

export default ListQuiz; 