import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 py-2 inset-x-0 bg-gray-600 border-b border-zinc-500">
      <div className="max-w-7xl h-full mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-gray-300 text-sm font-medium">
          Help
        </Link>

        <div className="flex items-center mx-auto">
          <Link href="/" className="text-gray-200 text-md font-bold">
            Forge Torrent
          </Link>
        </div>

        <Link href="/add" className="text-gray-300 text-sm font-medium">
          Add
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
