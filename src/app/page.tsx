import Torrent from "@/components/Torrent";
import Torrents from "../../Torrents.json";

const page = () => {
  return (
    <div className="text-black">
      <div className="flex justify-center items-center">
        <input type="text" className="text-black" />
      </div>

      <div className="flex flex-col gap-6 items-center mt-6">
        {Torrents.map((t) => (
          <Torrent
            key={Torrents.findIndex(Torrent)}
            name={t.name}
            magnetLink={t.magnetLink}
            size={t.size}
            additionalNote={t.additionalNote}
          />
        ))}
      </div>
    </div>
  );
};

export default page;

/*  Object type 

    {
        "name": *name of the game,movie etc.*
        "magnetLink": *magnet link of the torrent file* 
        "size": *file size*
        "additionalNote": *version number or installation tip* -This part is optional-
    }

*/
