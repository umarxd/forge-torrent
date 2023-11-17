import ErrorBox from "@/components/ErrorBox";

const Page = () => {
  return (
    <div className="mt-16">
      <form className="flex flex-col gap-3 justify-center items-center text-gray-600 text-lg">
        <input
          type="text"
          placeholder="name"
          className="text-sm border-2 border-gray-600 outline-none bg-gray-700 text-gray-300 p-2  rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          placeholder="magnet link"
          className="text-sm border-2 border-gray-600 outline-none bg-gray-700 text-gray-300 p-2  rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          placeholder="size"
          className="text-sm border-2 border-gray-600 outline-none bg-gray-700 text-gray-300 p-2  rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          placeholder="type"
          className="text-sm border-2 border-gray-600 outline-none bg-gray-700 text-gray-300 p-2  rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          placeholder="additional note"
          className="text-sm border-2 border-gray-600 outline-none bg-gray-700 text-gray-300 p-2  rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button className="mb-4 text-sm border-2 border-transparent hover:border-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out py-1 px-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 focus:outline-none">
          Add
        </button>
      </form>

      <ErrorBox error="Currently adding functionality is only available for developers." />
    </div>
  );
};

export default Page;
