import { NavLink } from 'react-router-dom';
import { MdDashboard, MdPeople, MdSettings, MdInventory } from 'react-icons/md';
import { useAuth } from '../context/AuthContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { isAdmin } = useAuth();

  const navItems = [
    { path: '/', icon: MdDashboard, label: 'Dashboard', adminOnly: false },
    { path: '/users', icon: MdPeople, label: 'Users', adminOnly: false },
    { path: '/products', icon: MdInventory, label: 'Products', adminOnly: true },
    { path: '/settings', icon: MdSettings, label: 'Settings', adminOnly: false },
  ];

  const filteredNavItems = navItems.filter(item => !item.adminOnly || isAdmin);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-white border-r-2 border-gray-200 transition-all duration-300 z-30 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Brand */}
          <div className="p-6 border-b-2 border-gray-200">
            <h1 className="text-2xl font-bold text-black">
              Admin Panel
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {filteredNavItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    onClick={() => onClose()}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                        isActive
                          ? 'bg-black text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`
                    }
                  >
                    <item.icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
