import React, { useEffect, useState } from "react";
import { Results } from "./Results";

export const Question = ({
  filteredQuestion,
  questionsFiltered,
  indexQuestion,
  setIndexQuestion,
  setActiveQuiz,
}) => {
  const [score, setScore] = useState(0);
  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [answersRandom, setAnswersRandom] = useState([]);
  const [activeResults, setActiveResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15); // Tiempo en segundos

  useEffect(() => {
    if (filteredQuestion) {
      const answers = [
        ...filteredQuestion.incorrect_answers,
        filteredQuestion.correct_answer,
      ];
      setAnswersRandom(answers.sort(() => Math.random() - 0.5));
    }
  }, [filteredQuestion]);

  useEffect(() => {
    if (timeLeft > 0 && !answered) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !answered) {
      setAnswered(true);
      setSelectAnswerIndex(null); // No se selecciona ninguna respuesta
      setTimeout(onNextQuestion, 2000); // Pasar automáticamente a la siguiente pregunta
    }
  }, [timeLeft, answered]);

  useEffect(() => {
    if (answered) {
      const timer = setTimeout(onNextQuestion, 2000); // Pasar automáticamente después de 2 segundos
      return () => clearTimeout(timer);
    }
  }, [answered]);

  const checkAnswer = (answerText, index) => {
    if (answerText === filteredQuestion.correct_answer) {
      setScore(score + 1);
    }
    setSelectAnswerIndex(index);
    setAnswered(true);
  };

  const onNextQuestion = () => {
    if (indexQuestion + 1 === questionsFiltered.length) {
      setActiveResults(true); // Activar resultados al finalizar las preguntas
    } else {
      setIndexQuestion(indexQuestion + 1);
      setSelectAnswerIndex(null);
      setAnswered(false);
      setTimeLeft(15); // Reiniciar el tiempo
    }
  };

  const onReset = () => {
    setScore(0);
    setActiveQuiz(false);
    setIndexQuestion(0);
  };

  return (
    <>
      {activeResults ? (
        <Results
          questionsFiltered={questionsFiltered}
          score={score}
          onReset={onReset}
        />
      ) : filteredQuestion ? ( // Verificar si filteredQuestion no es undefined
        <div className="flex flex-col justify-between shadow-2xl shadow-blue-900 w-[80vw] h-[70vh] p-10 rounded-2xl mt-10">
          <div className="flex justify-between">
            <span className="text-xl font-bold">
              {indexQuestion + 1} / {questionsFiltered.length}
            </span>
          </div>

          <div>
            <h1 className="font-bold text-6xl text-center mx-auto max-w-4xl leading-[4rem] [text-wrap:balance]">
              {filteredQuestion.question}
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {answersRandom.map((answer, index) => (
              <button
                className={`border-4 p-8 rounded-lg flex justify-center items-center hover:scale-105 ${
                  selectAnswerIndex !== null && index === selectAnswerIndex
                    ? answer === filteredQuestion.correct_answer
                      ? "bg-green-500"
                      : "bg-red-500"
                    : ""
                }`}
                key={answer}
                onClick={() => checkAnswer(answer, index)}
                disabled={answered}
              >
                <p className="font-medium text-center text-4xl">{answer}</p>
              </button>
            ))}
          </div>

          {indexQuestion + 1 === questionsFiltered.length ? (
            <button
              className="border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-5 hover:bg-yellow-600 hover:text-black font-medium text-4xl"
              onClick={() => {
                setAnswered(false);
                setActiveResults(true);
              }}
            >
              Fim
            </button>
          ) : (
            <button
              className="border-2 border-yellow-600 text-yellow-600 rounded-md px-4 py-6 hover:bg-yellow-600 hover:text-black font-medium text-3xl"
              onClick={onNextQuestion}
              disabled={!answered}
            >
              Próxima pergunta
            </button>
          )}

          {/* Barra de progreso */}
          <div className="w-full bg-gray-300 h-4 rounded-lg mt-5">
            <div
              className={`h-4 rounded-lg ${
                timeLeft === 0 ? "bg-red-600" : "bg-blue-600"
              }`}
              style={{ width: `${(timeLeft / 15) * 100}%` }}
            ></div>
          </div>
        </div>
      ) : (
        <div className="text-center text-4xl font-bold text-red-500">
          Ocorreu um erro ao carregar as perguntas.
        </div>
      )}
    </>
  );
};
