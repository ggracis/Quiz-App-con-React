import { Link } from "react-router-dom";

export const CategoryCard = ({ category, alt, src, gradientColor }) => {
  return (
    <Link
      to={`/category/${category}`}
      className={`flex flex-col justify-between h-[40vh] w-[25vw] bg-slate-500 rounded-lg overflow-hidden bg-gradient-to-r ${gradientColor} transition-all hover:scale-105 shadow-xl shadow-gray-500`}
    >
      <div className="flex justify-center items-center h-full">
        <img src={src} alt={alt} className="h-48" />
      </div>
      <h1 className="text-4xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-2 text-center">
        {category}
      </h1>
    </Link>
  );
};
