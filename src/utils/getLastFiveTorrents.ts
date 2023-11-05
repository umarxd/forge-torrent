import Torrents from "../../Torrents.json";
import { TorrentProps } from "../types/TorrentProps";

const lastFiveTorrents: TorrentProps[] = Torrents.slice(-5);

export default lastFiveTorrents;
