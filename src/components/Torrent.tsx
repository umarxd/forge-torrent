import { TorrentProps } from "../types/TorrentProps";

const Torrent: React.FC<{ torrentData: TorrentProps }> = ({ torrentData }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-fit mx-auto py-4 px-8 bg-gray-600 text-gray-300 text-sm font-medium rounded-md shadow-md">
      <div>
        <div className="text-center">{torrentData.name}</div>
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
