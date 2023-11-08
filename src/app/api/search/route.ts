import db from "../../../../prisma/db";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = url.searchParams.get("q");

  if (!q) return new Response("Invalid query", { status: 400 });

  const results = await db.torrent.findMany({
    where: {
      name: {
        startsWith: q,
        mode: "insensitive",
      },
    },

    take: 5,
  });
  if (!results[0]) return new Response("No result", { status: 400 });

  return new Response(JSON.stringify(results));
}
