import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Question } from "../components/Question";
import { questions, categories } from "../data";

// Función para barajar las preguntas de cada categoría y también reducirla al número de 5
const shuffleArray = (array) => {
  const newArray = array.sort(() => Math.random() - 0.5);
  return newArray.slice(0, 5);
};

export const CategoryPage = () => {
  // Leer el parámetro de la URL y convertirlo a minúsculas
  const { category } = useParams();
  const normalizedCategory = category.toLowerCase();

  // Construir la ruta de la imagen desde la carpeta public
  const imgCategory = `/juego/${normalizedCategory}.png`;

  const [questionsFiltered, setQuestionsFiltered] = useState(
    questions.filter(
      (question) => question.category === categories[normalizedCategory]
    )
  );
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [activeQuiz, setActiveQuiz] = useState(false);

  useEffect(() => {
    const newQuestions = shuffleArray(questionsFiltered);
    setQuestionsFiltered(newQuestions);
  }, []);

  return (
    <div className="container flex flex-col items-center justify-center gap-10 px-5 py-20 ">
      {activeQuiz ? (
        <Question
          filteredQuestion={questionsFiltered[indexQuestion]}
          setIndexQuestion={setIndexQuestion}
          indexQuestion={indexQuestion}
          questionsFiltered={questionsFiltered}
          setActiveQuiz={setActiveQuiz}
        />
      ) : (
        <>
          <div className="flex flex-col gap-10 items-center justify-center">
            <h1 className="text-7xl text-teal-900 text-center font-bold">
              {categories[normalizedCategory]}
            </h1>

            <div className="flex justify-center items-center">
              <img src={imgCategory} alt={category} className="h-[45vh]" />
            </div>
          </div>

          <button
            className="text-white text-7xl bg-blue-800 py-5 px-10  rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900 shadow-blue-900 shadow-2xl"
            onClick={() => setActiveQuiz(true)}
          >
            Bora pro Quiz!
          </button>
        </>
      )}
    </div>
  );
};
