import SearchTorrent from "@/components/SearchTorrent";
import db from "../../prisma/db";
import RecentTorrents from "@/components/RecentTorrents";
import Categories from "@/components/Categories";

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
  return (
    <div className="text-black flex flex-col mt-12">
      <SearchTorrent />
      <Categories />
      <RecentTorrents recentTorrents={recent} />
    </div>
  );
};

export default Home;
