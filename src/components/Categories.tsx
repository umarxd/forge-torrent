import Link from "next/link";

const Categories = () => {
  return (
    <div className="flex justify-center gap-10 mt-6">
      <Link href="/type/game" className="text-blue-500 font-bold">
        Games
      </Link>

      <Link href="type/movie" className="text-blue-500 font-bold">
        Movies
      </Link>

      <Link href="/type/tv-series" className="text-blue-500 font-bold">
        TV Series
      </Link>
    </div>
  );
};

export default Categories;
