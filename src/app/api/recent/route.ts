import db from "../../../../prisma/db";

export async function GET(req: Request) {
  const results = await db.torrent.findMany();

  return new Response(JSON.stringify(results));
}
