import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { getQuizData } from './services/quizData';
import {QuizQuestionType} from './type/defineTypes'
import { QuizCard } from './quizCard';

function App() {

  const [quiz, setQuiz] = useState<QuizQuestionType[]>([])
  const [currentStatus, setCurrentStatus] = useState<number>(0)


  useEffect(() => {
    async function fetchData () {
      const question: QuizQuestionType[] = await getQuizData(5,"easy")
      
      setQuiz(question)
      // console.log(quiz)
      
    }
    fetchData()
  }, [])
  if(!quiz.length)return <div> loading</div>

  // const handleSubmit = (e:any)=>{
  //   e.preventdefault()
  //   if(currentStatus !== quiz.length-1)
   


  // }

const handleSubmit = (e: React.FormEvent<EventTarget>)=>{
  e.preventDefault()
  if(currentStatus !== quiz.length-1)
  setCurrentStatus(1+currentStatus)
}


  console.log(quiz)
  return (
    <div className="App">
      <h2>Quiz App</h2>
      <QuizCard
      question= {quiz[currentStatus].question}
      option={quiz[currentStatus].option}
      handleSubmit={handleSubmit}
      
      />
    </div>
  );
}

export default App;
