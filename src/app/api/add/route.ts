import db from "../../../../prisma/db";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, magnetLink, size, type, additionalNote, developerPassword } =
    body;
  if (!name || !magnetLink || !size || !developerPassword)
    return new Response(
      "'name', 'magnet link', 'size' and 'developer password' parameters are required.",
      { status: 400 }
    );
  if (developerPassword !== process.env.DEVELOPER_PASSWORD)
    return new Response("Incorrect developer password.", { status: 400 });

  const added = await db.torrent.create({
    data: { name, magnetLink, size, type, additionalNote },
  });
  if (added) return new Response("Successfully added!");

  return new Response("Something went wrong.", { status: 500 });
}
