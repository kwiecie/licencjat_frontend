import { Link } from "gatsby"
import React, { useState } from "react"
import Layout from "../components/layout"
import * as quizesStyles from "../components/quizes.module.scss"

const Quizes = () => {
  const questions = [
    {
      questionText: 'Jaki artysta przyczynił się, do spopularyzowania strojów ludowych na początku XX w.?',
      answers: [
        {answerText: 'Wojciech Gerson', isCorrect: false},
        {answerText: 'Stanisław Przybyszewski', isCorrect: false},
        {answerText: 'Stanisław Wyspiański', isCorrect: true},
        {answerText: 'Edward Okuń', isCorrect: false},
      ]
    },
    {
      questionText: 'Rajer oznacza:',
      answers: [
        {answerText: 'typ parasola', isCorrect: false},
        {answerText: 'pióro ozdabiające kapelusz', isCorrect: true},
        {answerText: 'część bielizny noszonej na początku XX w.', isCorrect: false},
        {answerText: 'nakrycie głowy', isCorrect: false},
      ]
    },
    {
      questionText: 'Jak nazywał się projektant, który promował styl orientalistyczny w latach 20.?',
      answers: [
        {answerText: 'Paul Poiret', isCorrect: true},
        {answerText: 'Jeanne Margaine-Lacroix', isCorrect: false},
        {answerText: 'Chritian Dior', isCorrect: false},
        {answerText: 'Paul Iribe', isCorrect: false},
      ]
    },
    {
      questionText: 'Jak nazywał się polski fryzjer, który wypromował fryzurę na chłopczycę?',
      answers: [
        {answerText: 'Adam Cierpkowski', isCorrect: false},
        {answerText: 'Antoni Cieszyński', isCorrect: false},
        {answerText: 'Maciej Maniewski', isCorrect: false},
        {answerText: 'Antoni Cierplikowski', isCorrect: true},
      ]
    },
    {
      questionText: 'Polska aktorka okresu dwudziestolecia międzywojennego, która zagrała m.in. w filmie “Prokurator Alicjia Horn” to:',
      answers: [
        {answerText: 'Jadwiga Smosarska', isCorrect: true},
        {answerText: 'Ina Benita', isCorrect: false},
        {answerText: 'Tola Mankiewiczówna', isCorrect: false},
        {answerText: 'Mieczysława Ćwiklińska', isCorrect: false},
      ]
    },
    {
      questionText: 'Jak nazywały się torby popularne w okresie drugiej wojny światowej?',
      answers: [
        {answerText: 'listonoszki', isCorrect: false},
        {answerText: 'trumniaki', isCorrect: false},
        {answerText: 'konduktorki', isCorrect: true},
        {answerText: 'sakiewki', isCorrect: false},
      ]
    },
    {
      questionText: 'W którym roku powstało przedsiębiorstwo Moda Polska?',
      answers: [
        {answerText: '1959', isCorrect: false},
        {answerText: '1962', isCorrect: false},
        {answerText: '1960', isCorrect: false},
        {answerText: '1958', isCorrect: true},
      ]
    },
    {
      questionText: 'W jakim dzienniku pojawiła się reklama butiku Biba?',
      answers: [
        {answerText: 'Daily Star', isCorrect: false},
        {answerText: 'The Guardian', isCorrect: false},
        {answerText: 'Daily Mirror', isCorrect: true},
        {answerText: 'Daily Mail', isCorrect: false},
      ]
    },
    {
      questionText: 'Kiedy w Polsce został wprowadzony stan wojenny?',
      answers: [
        {answerText: '13 grudnia 1981', isCorrect: true},
        {answerText: '11 stycznia 1981', isCorrect: false},
        {answerText: '11 grudnia 1982', isCorrect: false},
        {answerText: '13 stycznia 1982', isCorrect: false},
      ]
    },
    {
      questionText: 'Które z polskich przedsiębiorstw odzieżowych  zajmuje się obecnie szyciem mundurów i tóg prawniczych?',
      answers: [
        {answerText: 'Moda Polska', isCorrect: false},
        {answerText: 'Telimena', isCorrect: true},
        {answerText: 'Torpo', isCorrect: false},
        {answerText: 'Hexeline', isCorrect: false},
      ]
    }
  ]
  const [currentQuestion, setCurrentQuestion] = useState(0) 

  const [showScore, setShowScore] = useState(false)

  const [score, setScore] = useState(0)

  const [showQuiz, setShowQuiz] = useState(false)

  const handleShowQuizButtonClick = () => {
    setShowQuiz(true)
  }

  const resetQuiz = () => {
    setScore(0)
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
          { showQuiz ? (
            showScore ? (
              <>
                <h2>
                  Twój wynik to: {score}/{questions.length}
                </h2>
                <button 
                  className={quizesStyles.button}
                  onClick={() => resetQuiz()}
                  >
                    Spróbuj ponownie!
                </button>
              </>
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
            )
          ) : (
            <>
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
            </>
          )
          }
        </div>
      </Layout>
    )
  }

export default Quizes
