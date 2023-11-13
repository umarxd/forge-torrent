import { TorrentProps } from "@/types/TorrentProps";
import db from "../../../../prisma/db";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    type: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { type } = params;

  const getType = async () => {
    const typeTorrents = await db.torrent.findMany({
      where: {
        type: type.replace(/-/g, " "),
      },
      orderBy: {
        name: "asc",
      },
    });
    if (!typeTorrents[0]) notFound();

    return typeTorrents;
  };
  const torrents = await getType();

  return (
    <div className="flex flex-col gap-4 w-full max-w-screen-md mt-12 mx-auto py-4 px-4 md:px-8 bg-gray-600 text-gray-300 text-sm font-medium rounded-md shadow-md">
      {torrents.map((t: TorrentProps) => (
        <div
          key={t.id}
          className="flex flex-col gap-2 sm:flex-row sm:items-center items-center text-sm"
        >
          <div className="font-bold">{t.name}</div>
          <div className="hidden sm:inline">|</div>
          <div className="hidden sm:inline">{t.additionalNote}</div>
          <div className="hidden sm:inline">|</div>
          <div className="font-bold">{t.size}</div>
          <div className="mt-2 sm:mt-0">
            <a className="block text-blue-500 font-bold" href={t.magnetLink}>
              Torrent
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
