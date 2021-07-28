import {QuizType, Quiz} from '../type/defineTypes'

export const getQuizData = async(totalQuestions: number, level: string ): Promise<QuizType[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`)
    let data: QuizType[] = await res.json()
    
    
        return data
    
}