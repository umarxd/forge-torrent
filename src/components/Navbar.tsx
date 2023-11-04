import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 py-2 inset-x-0 bg-gray-600 border-b border-zinc-500">
      <div className="max-w-7xl h-full mx-auto flex items-center justify-center gap-2">
        <Link href="/" className="flex gap-2 items-center">
          <p className="text-gray-300 text-sm font-medium">Forge Torrent</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
