"use client";

import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import ErrorBox from "@/components/ErrorBox";
import LoadingSpinner from "@/components/LoadingSpinner";

interface FormData {
  name: string;
  magnetLink: string;
  size: string;
  type?: string;
  additionalNote?: string;
}

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    magnetLink: "",
    size: "",
    type: "",
    additionalNote: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const add = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const { data } = await axios.post("/api/add", formData);
      setIsLoading(false);
      setError(data);
    } catch (error: any) {
      setIsLoading(false);
      setError(error.response.data);
    }
  };

  return (
    <div className="mt-16">
      <form
        onSubmit={(e) => add(e)}
        className="flex flex-col gap-3 justify-center items-center text-gray-600 text-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleInputChange}
          className="text-sm border-2 border-gray-600 outline-none bg-gray-700 text-gray-300 p-2  rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          name="magnetLink"
          placeholder="magnet link"
          value={formData.magnetLink}
          onChange={handleInputChange}
          className="text-sm border-2 border-gray-600 outline-none bg-gray-700 text-gray-300 p-2  rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          name="size"
          placeholder="size"
          value={formData.size}
          onChange={handleInputChange}
          className="text-sm border-2 border-gray-600 outline-none bg-gray-700 text-gray-300 p-2  rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          name="type"
          placeholder="type"
          value={formData.type}
          onChange={handleInputChange}
          className="text-sm border-2 border-gray-600 outline-none bg-gray-700 text-gray-300 p-2  rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          name="additionalNote"
          placeholder="additional note"
          value={formData.additionalNote}
          onChange={handleInputChange}
          className="text-sm border-2 border-gray-600 outline-none bg-gray-700 text-gray-300 p-2  rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button className="mb-4 text-sm border-2 border-transparent hover:border-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out py-1 px-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 focus:outline-none">
          Add
        </button>
      </form>
      {error && <ErrorBox error={error} />}
      {isLoading && <LoadingSpinner />}
      <ErrorBox error="Currently adding functionality is only available for developers." />
    </div>
  );
};

export default Page;
