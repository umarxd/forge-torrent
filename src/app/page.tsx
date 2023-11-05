"use client";

import Torrent from "@/components/Torrent";
import Torrents from "../../Torrents.json";
import { ChangeEvent, useState } from "react";
import { TorrentProps } from "../../types/TorrentProps";

const page = () => {
  const [input, setInput] = useState<string>("");
  const [queryList, setQueryList] = useState<TorrentProps[]>([]);

  const search = (e: React.FormEvent<HTMLFormElement>, input: string) => {
    setQueryList([]);
    e.preventDefault();
    Torrents.forEach((element) => {
      if (!input) return;
      if (
        input.toLowerCase().trim() ===
        element.name.slice(0, input.trim().length).toLowerCase()
      ) {
        setQueryList((queryList) => [...queryList, element]);
      }
    });
  };

  return (
    <div className="text-black">
      <form
        onSubmit={(e) => search(e, input)}
        className="flex flex-col gap-2 justify-center items-center mt-20"
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
        <button>Search</button>
      </form>

      <div className="flex flex-col gap-6 items-center mt-6">
        {queryList[0] &&
          queryList.map((t) => (
            <Torrent
              key={t.name}
              name={t.name}
              magnetLink={t.magnetLink}
              size={t.size}
              type={t.type}
              additionalNote={t.additionalNote}
            />
          ))}
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
