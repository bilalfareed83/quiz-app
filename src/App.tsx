import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { getQuizData } from './services/quizData';

function App() {

  useEffect(() => {
    async function fetchData () {
      const question = await getQuizData(5,"easy")
      console.log(question)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <h2>Quiz App</h2>
    </div>
  );
}

export default App;
