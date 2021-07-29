import {QuizType, QuizQuestionType} from '../type/defineTypes'

export const getQuizData = async(totalQuestions: number, level: string ): Promise<QuizQuestionType[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`)
    const {results} = await res.json()
   
    

    const quizQuestion: QuizQuestionType[] = results.map((obj: QuizType)=>{
            
        let shuffleArray = function () {
         return   [...obj.incorrect_answers, obj.correct_answer].sort(() => Math.random() - 0.5);
          }
    
            return {
                question: obj.question,
                option: shuffleArray(),
                answer: obj.correct_answer
            }
    })
        return quizQuestion
    
}