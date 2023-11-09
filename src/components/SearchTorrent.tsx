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
          className="border-2 border-gray-600 p-2 bg-slate-300 font-bold outline-none "
        />
        <button className="hover:border-b border-gray-600">Search</button>
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
