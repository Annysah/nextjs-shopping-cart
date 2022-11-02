import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-white p-6 border-b-2 border-gray-100">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/" passHref>
            <h1 className="font-bold text-3xl tracking-tight font-mono text-green-400">
              Plantly
            </h1>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
