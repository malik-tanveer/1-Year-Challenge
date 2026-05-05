import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Card from '../components/Card';
import Button from '../components/Button';
import { MdCheckCircle, MdWarning, MdSecurity, MdPeople, MdInventory } from 'react-icons/md';

const AdminCommunity = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Welcome Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            🎉 Welcome to the Admin Community!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Hello <span className="font-semibold text-blue-600 dark:text-blue-400">{user?.name}</span>, 
            you now have full administrative access.
          </p>
        </div>

        {/* Important Notice */}
        <Card className="border-l-4 border-yellow-500">
          <div className="flex items-start gap-3">
            <MdWarning className="text-yellow-500 text-2xl flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Important Security Notice
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                As an administrator, you have elevated privileges. Please:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                <li>Keep your credentials secure and never share them</li>
                <li>Use strong, unique passwords</li>
                <li>Log out when using shared computers</li>
                <li>Monitor user activity regularly</li>
                <li>Report any suspicious activity immediately</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Admin Capabilities */}
        <Card title="Your Admin Capabilities">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <MdPeople className="text-blue-600 dark:text-blue-400 text-2xl flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  User Management
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  View all users, track dashboard access, add/edit/delete user accounts
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <MdInventory className="text-green-600 dark:text-green-400 text-2xl flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Product Management
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full CRUD operations on products, manage inventory and pricing
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <MdSecurity className="text-purple-600 dark:text-purple-400 text-2xl flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Access Control
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Manage roles, permissions, and security settings
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <MdCheckCircle className="text-orange-600 dark:text-orange-400 text-2xl flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Activity Monitoring
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Track user logins, dashboard access, and system activity
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Setup Instructions */}
        <Card title="Getting Started - Admin Setup">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Configure Firebase Security Rules
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Ensure your Firestore security rules are properly configured to enforce role-based access.
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs font-mono overflow-x-auto">
                  <pre>{`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'Admin';
    }
    match /products/{productId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'Admin';
    }
  }
}`}</pre>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Review User Activity
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Navigate to the Users page to see all registered users and track who has accessed the dashboard.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Add Products
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Go to the Products page to start adding items. Regular users will see these products on their dashboard.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Manage Settings
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Customize your preferences, theme, and notification settings in the Settings page.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Root Admin Password Info */}
        <Card className="border-l-4 border-red-500">
          <div className="flex items-start gap-3">
            <MdSecurity className="text-red-500 text-2xl flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Root Admin Password
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                The root admin password is required to create new admin accounts. This password is:
              </p>
              <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg mb-2">
                <p className="text-sm font-mono text-red-800 dark:text-red-200">
                  <strong>Current Root Password:</strong> RootAdmin@2024
                </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ⚠️ <strong>IMPORTANT:</strong> Change this password in production by updating the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">src/config/admin.ts</code> file 
                and storing it securely in environment variables.
              </p>
            </div>
          </div>
        </Card>

        {/* Development Admin Info */}
        <Card className="border-l-4 border-blue-500">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Development Admin Account
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A default admin account is available for development and testing:
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg space-y-2">
              <p className="text-sm">
                <strong>Email:</strong> <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">admin@admin.com</code>
              </p>
              <p className="text-sm">
                <strong>Password:</strong> <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">admin</code>
              </p>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                ⚠️ This account is marked as "Development Only" and will require a password change on first login.
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              <strong>Note:</strong> Remove or disable this account in production environments.
            </p>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center pt-4">
          <Button onClick={() => navigate('/')} size="lg">
            Go to Dashboard
          </Button>
          <Button onClick={() => navigate('/users')} variant="secondary" size="lg">
            Manage Users
          </Button>
          <Button onClick={() => navigate('/products')} variant="secondary" size="lg">
            Manage Products
          </Button>
        </div>

        {/* Footer Note */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 pt-6">
          <p>
            Need help? Check the documentation or contact your system administrator.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminCommunity;
