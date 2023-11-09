import { TorrentProps } from "@/types/TorrentProps";

type TorrentArray = TorrentProps[];

const RecentTorrents: React.FC<{ recentTorrents: TorrentArray }> = ({
  recentTorrents,
}) => {
  console.log(recentTorrents);
  return (
    <div className="container mx-auto  my-8">
      <h2 className="text-center font-bold text-lg">Recently Added Torrents</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
        {recentTorrents.map((t) => (
          <div
            key={t.id}
            className="py-2 text-center text-sm text-white bg-gray-600"
          >
            <div>
              <div className="font-bold">{t.name}</div>
              <div>{t.additionalNote}</div>
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
