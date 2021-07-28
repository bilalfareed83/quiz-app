export type QuizType ={
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type Quiz = {
    question: string
    option: string[]
    answer: string
}