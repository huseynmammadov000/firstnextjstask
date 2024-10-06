import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex justify-around p-4 bg-gray-800">
      <Link href="/" className="text-white no-underline text-lg">Home</Link>
      <Link href="/about" className="text-white no-underline text-lg">About</Link>
      <Link href="/contact" className="text-white no-underline text-lg">Contact</Link>
      <Link href="/admin" className="text-white no-underline text-lg">Admin</Link>
    </div>
  );
};

export default Navbar;
