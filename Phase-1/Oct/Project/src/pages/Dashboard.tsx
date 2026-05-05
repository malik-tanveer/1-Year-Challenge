import { useEffect, useState } from 'react';
import StatCard from '../components/StatCard';
import Card from '../components/Card';
import { MdPeople, MdShoppingCart, MdAttachMoney, MdTrendingUp } from 'react-icons/md';
import { useAuth } from '../context/AuthContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const Dashboard = () => {
  const { isAdmin, trackDashboardAccess } = useAuth();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Track that user opened dashboard
    trackDashboardAccess();

    // Fetch products for non-admin users
    const fetchProducts = async () => {
      try {
        const productsSnapshot = await getDocs(collection(db, 'products'));
        const productsData = productsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [trackDashboardAccess]);
  const stats = [
    {
      title: 'Total Users',
      value: '2,543',
      icon: <MdPeople size={32} />,
      trend: { value: '12% from last month', isPositive: true },
      color: 'blue',
    },
    {
      title: 'Total Orders',
      value: '1,234',
      icon: <MdShoppingCart size={32} />,
      trend: { value: '8% from last month', isPositive: true },
      color: 'green',
    },
    {
      title: 'Revenue',
      value: '$45,678',
      icon: <MdAttachMoney size={32} />,
      trend: { value: '5% from last month', isPositive: true },
      color: 'purple',
    },
    {
      title: 'Growth',
      value: '23.5%',
      icon: <MdTrendingUp size={32} />,
      trend: { value: '3% from last month', isPositive: true },
      color: 'orange',
    },
  ];

  // Admin view - full dashboard
  if (isAdmin) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard Overview
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              trend={stat.trend}
              color={stat.color}
            />
          ))}
        </div>

        {/* Additional Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card title="Recent Activity">
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">New user registered</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Order #1234 completed</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Payment received</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">1 hour ago</p>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Quick Stats">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Active Users</span>
                <span className="font-semibold text-gray-900 dark:text-white">1,234</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Pending Orders</span>
                <span className="font-semibold text-gray-900 dark:text-white">45</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Completed Today</span>
                <span className="font-semibold text-gray-900 dark:text-white">89</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Revenue Today</span>
                <span className="font-semibold text-gray-900 dark:text-white">$2,345</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Regular user view - minimal with products
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Welcome to Your Dashboard
      </h1>

      {loading ? (
        <Card>
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
          </div>
        </Card>
      ) : products.length === 0 ? (
        <Card>
          <div className="text-center py-12">
            <MdShoppingCart className="mx-auto text-gray-400 dark:text-gray-600 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No Products Yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              The administrator hasn't added any products yet. Check back soon!
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Products will appear here once they're added by an administrator.
            </p>
          </div>
        </Card>
      ) : (
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Available Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  ${product.price}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {product.category}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {product.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
