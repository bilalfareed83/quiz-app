import React from 'react'
import {propsType} from './type/defineTypes'


export const QuizCard: React.FC<propsType> = ({question, option,handleSubmit}) => {
    return (
        <div>
            
            <div><span>Q.</span>{question}</div>
            <div>
                <form onSubmit={handleSubmit}>
                {option.map((opt: string, index: number)=>{
                    return (
                    <div key={index}>
                        
                    <input 
                    type="radio"
                    value={option}
                    name="option"
                    />
                    <label>{option}</label>
                    </div>
                    )
                    
                })}
                <input
                type="submit"
                />
                </form>
                
            </div>
        </div>
    )
}
