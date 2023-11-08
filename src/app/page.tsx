import Torrent from "@/components/Torrent";
import { ChangeEvent, useState } from "react";
import { TorrentProps } from "../types/TorrentProps";
import ErrorBox from "@/components/ErrorBox";
import SearchTorrent from "@/components/SearchTorrent";

const Home = () => {
  return (
    <div className="text-black flex flex-col">
      <SearchTorrent />
    </div>
  );
};

export default Home;
