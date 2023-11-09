import SearchTorrent from "@/components/SearchTorrent";
import db from "../../prisma/db";
import RecentTorrents from "@/components/RecentTorrents";

const getRecent = async () => {
  const recent = await db.torrent.findMany({
    orderBy: {
      id: "desc",
    },
    take: 4,
  });

  if (!recent) {
    throw new Error("Failed to fetch data");
  }

  return recent;
};

const Home = async () => {
  const recent = await getRecent();
  console.log(recent);
  return (
    <div className="text-black flex flex-col">
      <SearchTorrent />
      <RecentTorrents recentTorrents={recent} />
    </div>
  );
};

export default Home;
