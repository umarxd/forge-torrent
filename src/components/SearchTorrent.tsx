"use client";

import axios from "axios";
import { useState, FormEvent } from "react";
import ErrorBox from "./ErrorBox";
import Torrent from "./Torrent";
import LoadingSpinner from "./LoadingSpinner";
import { TorrentProps } from "@/types/TorrentProps";

const SearchTorrent = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [torrents, setTorrents] = useState([]);
  const [error, setError] = useState("");

  const search = async (e: FormEvent<HTMLFormElement>, input: string) => {
    e.preventDefault();
    setIsLoading(true);
    setTorrents([]);
    setError("");

    try {
      const { data } = await axios.get(`/api/search?q=${input}`);
      setIsLoading(false);
      setTorrents(data);
    } catch (error: any) {
      setIsLoading(false);
      setError(error.response.data);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => search(e, input)}
        className="my-4 flex flex-col gap-2 justify-center items-center text-gray-600 text-lg"
      >
        <input
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search Here"
          className="border-2 border-gray-600 p-2 font-bold outline-none bg-gray-700 text-gray-300 py-2 px-3 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button className="text-sm border-2 border-transparent hover:border-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out py-1 px-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 focus:outline-none">
          Search
        </button>
      </form>
      {error && <ErrorBox error={error} />}
      {isLoading && <LoadingSpinner />}
      {torrents &&
        torrents.map((t: TorrentProps) => (
          <Torrent key={t.id} torrentData={t} />
        ))}
    </div>
  );
};

export default SearchTorrent;
