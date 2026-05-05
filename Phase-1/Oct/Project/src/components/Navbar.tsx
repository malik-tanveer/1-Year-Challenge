import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { MdMenu, MdLogout } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 lg:left-64 right-0 h-16 bg-white border-b-2 border-gray-200 transition-all duration-300 z-10">
      <div className="h-full px-4 lg:px-6 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Menu Toggle (Mobile) */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <MdMenu size={24} />
          </button>

          {/* Project Title */}
          <h2 className="text-xl font-semibold text-black">
            Dashboard
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 lg:gap-4">

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Profile"
            >
              <FaUserCircle size={24} />
              <span className="hidden md:block text-sm font-medium text-black">
                {user?.name}
              </span>
            </button>

            {showDropdown && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowDropdown(false)}
                />
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border-2 border-gray-200 z-20">
                  <div className="p-3 border-b border-gray-200">
                    <p className="text-sm font-medium text-black">
                      {user?.name}
                    </p>
                    <p className="text-xs text-gray-600">
                      {user?.email}
                    </p>
                    <p className="text-xs text-gray-900 font-semibold mt-1">
                      {user?.role}
                    </p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors"
                  >
                    <MdLogout size={18} />
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
