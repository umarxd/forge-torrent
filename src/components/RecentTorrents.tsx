import { TorrentProps } from "@/types/TorrentProps";

type TorrentArray = TorrentProps[];

const RecentTorrents: React.FC<{ recentTorrents: TorrentArray }> = ({
  recentTorrents,
}) => {
  console.log(recentTorrents);
  return (
    <div className="flex flex-col justify-center items-center   m-8 py-4">
      <h2 className=" text-gray-600 border-gray-600 border-b w-max mb-2 font-bold text-md">
        Recently Added Torrents
      </h2>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        {recentTorrents.map((t) => (
          <div key={t.id} className="py-2 text-center text-sm ">
            <div>
              <div className="font-bold">{t.name}</div>
              <div className="text-xs">{t.additionalNote}</div>
            </div>
            <div>{t.size}</div>
            <div>
              <a
                className="text-blue-500 hover:border-b hover:border-blue-500 "
                href={t.magnetLink}
              >
                Torrent
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTorrents;
