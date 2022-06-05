import React, { useState } from "react"
import Layout from "../components/layout"
import * as quizesStyles from "../components/quizes.module.scss"

const Quizes = () => {
  const questions = [
    {
      questionText: 'Lubisz placki?',
      answers: [
        {answerText: 'Tak', isCorrect: true},
        {answerText: 'No', isCorrect: false},
        {answerText: 'Nie', isCorrect: false},
        {answerText: 'Nah', isCorrect: false},
      ]
    },
    {
      questionText: 'Jak masz na imie?',
      answers: [
        {answerText: 'Johnny Bravo', isCorrect: true},
        {answerText: 'yass', isCorrect: false},
        {answerText: 'Tak', isCorrect: false},
        {answerText: 'blah', isCorrect: false},
      ]
    },
    {
      questionText: 'Jak nazywał się projektant, który zrewolucjonizował modę w 1921 r.?',
      answers: [
        {answerText: 'Poiret', isCorrect: true},
        {answerText: 'Gucci', isCorrect: false},
        {answerText: 'Dior', isCorrect: true},
        {answerText: 'Anna Wintour', isCorrect: false},
      ]
    },
    {
      questionText: 'Ile masz lat?',
      answers: [
        {answerText: '1', isCorrect: false},
        {answerText: '2', isCorrect: false},
        {answerText: '3', isCorrect: true},
        {answerText: '4', isCorrect: false},
      ]
    },
    {
      questionText: 'Kto założył przedsiębiorstwo odzieżowe Telimena?',
      answers: [
        {answerText: 'Ja', isCorrect: false},
        {answerText: 'Hades', isCorrect: false},
        {answerText: 'Kleopatra', isCorrect: false},
        {answerText: 'siiwy dym', isCorrect: true},
      ]
    },
  ]
  const [currentQuestion, setCurrentQuestion] = useState(0) 

  const [showScore, setShowScore] = useState(false)

  const [score, setScore] = useState(0)

  const [showQuiz, setShowQuiz] = useState(false)

  const handleShowQuizButtonClick = () => {
    setShowQuiz(true)
  }

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestion + 1
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion)
    } else
      setShowScore(true)
  }

  console.log(questions[0].answers[0].isCorrect)

    return (
      <Layout>
        <h1 className={quizesStyles.h1}>Quiz</h1>
        <div className={quizesStyles.quiz}>
          <p>
            Sprawdź swoją wiedzę!
          </p>
          <p>
            Quiz składa się z 10 pytań.
          </p>
          <button 
            className={quizesStyles.button}
            onClick={() => handleShowQuizButtonClick()}
            >
            Rozpocznij quiz
          </button>
        
          {showScore ? (
            <h2>
              Twój wynik to: {score}/{questions.length}
            </h2>
          ) : (
            <>
              <h2>
                Pytanie {currentQuestion + 1}/{questions.length}
              </h2>
              <p>
                {questions[currentQuestion].questionText}
              </p>
              <div className={quizesStyles.buttonsContainer}>
                {questions[currentQuestion].answers.map((answers)=> (
                  <button 
                    className={quizesStyles.button}
                    key={answers.answerText} 
                    onClick={() => handleAnswerButtonClick(answers.isCorrect)}
                  >
                    {answers.answerText}
                  </button>
                ))}
              </div>
            </>            
          )}
          
        </div>
      </Layout>
    )
  }

export default Quizes
