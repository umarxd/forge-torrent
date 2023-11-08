import { TorrentProps } from "../types/TorrentProps";

const Torrent: React.FC<{ torrentData: TorrentProps }> = ({ torrentData }) => {
  return (
    <div className="p-2 flex flex-col  gap-2 justify-center  items-center">
      <div>
        <div className="text-md text-center font-bold">{torrentData.name}</div>
        <div className="text-xs text-right">{torrentData.additionalNote}</div>
      </div>
      <div className="text-sm">{torrentData.size}</div>
      <div>
        <a
          className="text-blue-500 font-bold hover:border-b hover:border-blue-500 "
          href={torrentData.magnetLink}
        >
          Torrent
        </a>
      </div>
    </div>
  );
};

export default Torrent;
