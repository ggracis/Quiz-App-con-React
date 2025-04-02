import { categories, imgs } from "../data";
import { CategoryCard } from "./CategoryCard";

const [
  imgCultura,
  imgEsportes,
  imgGastronomia,
  imgGeografia,
  imgHistoria,
  imgNatureza,
] = imgs;

export const CategoryList = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-10">
      <CategoryCard
        category={categories.cultura}
        src={imgCultura}
        alt={`Categoria ${categories.cultura}`}
        gradientColor="from-purple-500 to-pink-500"
      />
      <CategoryCard
        category={categories.esportes}
        src={imgEsportes}
        alt={`Categoria ${categories.esportes}`}
        gradientColor="from-lime-400 to-teal-700"
      />
      <CategoryCard
        category={categories.gastronomia}
        src={imgGastronomia}
        alt={`Categoria ${categories.gastronomia}`}
        gradientColor="from-red-400 to-zinc-400"
      />
      <CategoryCard
        category={categories.geografia}
        src={imgGeografia}
        alt={`Categoria ${categories.geografia}`}
        gradientColor="from-cyan-200 to-lime-200"
      />
      <CategoryCard
        category={categories.historia}
        src={imgHistoria}
        alt={`Categoria ${categories.historia}`}
        gradientColor="from-sky-300 to-indigo-900"
      />
      <CategoryCard
        category={categories.natureza}
        src={imgNatureza}
        alt={`Categoria ${categories.natureza}`}
        gradientColor="from-amber-400 to-emerald-600"
      />
    </div>
  );
};
