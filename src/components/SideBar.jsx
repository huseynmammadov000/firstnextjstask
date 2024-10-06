import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <ul>
        <li className="mb-2">
          <Link href="/admin/courses" className="hover:text-gray-400">
           Courses
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/admin/blogs"  className="hover:text-gray-400">
           Blogs
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/admin/profile" className="hover:text-gray-400"> 
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
