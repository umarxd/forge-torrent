import { TorrentProps } from "../../types/TorrentProps";

const Torrent: React.FC<TorrentProps> = ({
  name,
  magnetLink,
  size,
  additionalNote,
}) => {
  return (
    <div className="p-2 flex gap-2 justify-center items-center">
      <div>
        <div className="text-md font-bold">{name}</div>
        <div className="text-xs">{additionalNote}</div>
      </div>
      <div className="text-sm">{size}</div>
      <div>
        <a
          className="text-blue-500 font-bold hover:border-b hover:border-blue-500 "
          href={magnetLink}
        >
          Torrent
        </a>
      </div>
    </div>
  );
};

export default Torrent;
