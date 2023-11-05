"use client";

import Torrent from "@/components/Torrent";
import Torrents from "../../Torrents.json";
import { ChangeEvent, useState } from "react";
import { TorrentProps } from "../types/TorrentProps";
import ErrorBox from "@/components/ErrorBox";
import lastFiveTorrents from "../utils/getLastFiveTorrents";

const page = () => {
  const [input, setInput] = useState("");
  const [queryList, setQueryList] = useState<TorrentProps[]>([]);
  const [error, setError] = useState("");

  const search = (e: React.FormEvent<HTMLFormElement>, input: string) => {
    e.preventDefault();
    setError("");
    setQueryList([]);
    if (!input) {
      setError("Please enter a search term.");
      return;
    }

    const filteredTorrents = Torrents.filter((element) =>
      element.name
        .toLowerCase()
        .slice(0, input.trim().length)
        .includes(input.toLowerCase().trim())
    );

    if (filteredTorrents.length === 0) {
      setError("No results found.");
      setQueryList([]);
    } else {
      setQueryList(filteredTorrents);
    }
  };

  return (
    <div className="text-black">
      <form
        onSubmit={(e) => search(e, input)}
        className="flex flex-col gap-1 justify-center items-center mt-20"
      >
        <input
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          type="text"
          autoFocus
          placeholder="Search"
          className="text-black bg-slate-300 p-2 outline-none border-b border-black"
        />
        <button className="hover:border-b border-black">Search</button>
      </form>

      <div className="flex flex-col gap-6 items-center mt-6">
        {queryList[0] ? (
          queryList.map((t) => (
            <Torrent
              key={t.name}
              name={t.name}
              magnetLink={t.magnetLink}
              size={t.size}
              type={t.type}
              additionalNote={t.additionalNote}
            />
          ))
        ) : (
          <ErrorBox error={error} />
        )}

        {!queryList[0] && (
          <>
            <h2 className="font-bold text-gray-600 border-b border-gray-600">
              Recently added Torrents
            </h2>
            {lastFiveTorrents.map((t) => (
              <Torrent
                key={t.name}
                name={t.name}
                magnetLink={t.magnetLink}
                size={t.size}
                type={t.type}
                additionalNote={t.additionalNote}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default page;

/*  Object type 

    {
        "name": *name of the game,movie etc.*
        "magnetLink": *magnet link of the torrent file* 
        "size": *file size*
        "additionalNote": *version number or installation tip* -This part is optional-
    }

*/
