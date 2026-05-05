import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Table from '../components/Table';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MdEdit, MdDelete, MdCheckCircle, MdCancel } from 'react-icons/md';
import { useAuth } from '../context/AuthContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  openedDashboard?: boolean;
  lastVisited?: any;
  lastDashboardAccess?: any;
}

const Users = () => {
  const { isAdmin } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersSnapshot = await getDocs(collection(db, 'users'));
        const usersData = usersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as User[];
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    role: Yup.string()
      .required('Role is required'),
  });

  const handleAddUser = (values: Omit<User, 'id'>, { resetForm }: any) => {
    const newUser = {
      id: users.length + 1,
      ...values,
    };
    setUsers([...users, newUser]);
    setIsModalOpen(false);
    resetForm();
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const columns = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'role', header: 'Role' },
    {
      key: 'openedDashboard',
      header: 'Dashboard Access',
      render: (value: boolean, row: User) => (
        <div className="flex items-center gap-2">
          {value ? (
            <>
              <MdCheckCircle className="text-green-600 dark:text-green-400" size={20} />
              <span className="text-sm text-green-600 dark:text-green-400">Accessed</span>
            </>
          ) : (
            <>
              <MdCancel className="text-gray-400 dark:text-gray-600" size={20} />
              <span className="text-sm text-gray-500 dark:text-gray-500">Not Yet</span>
            </>
          )}
        </div>
      ),
    },
    {
      key: 'lastVisited',
      header: 'Last Visited',
      render: (value: any) => {
        if (!value) return <span className="text-sm text-gray-500">Never</span>;
        try {
          const date = value.toDate ? value.toDate() : new Date(value);
          return (
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {date.toLocaleDateString()} {date.toLocaleTimeString()}
            </span>
          );
        } catch {
          return <span className="text-sm text-gray-500">-</span>;
        }
      },
    },
    ...(isAdmin ? [{
      key: 'actions',
      header: 'Actions',
      render: (_: any, row: User) => (
        <div className="flex gap-2">
          <button
            className="p-2 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900 rounded transition-colors"
            aria-label="Edit user"
          >
            <MdEdit size={18} />
          </button>
          <button
            onClick={() => handleDeleteUser(row.id)}
            className="p-2 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900 rounded transition-colors"
            aria-label="Delete user"
          >
            <MdDelete size={18} />
          </button>
        </div>
      ),
    }] : []),
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Users Management
        </h1>
        {isAdmin && (
          <Button onClick={() => setIsModalOpen(true)}>
            Add User
          </Button>
        )}
      </div>

      {isAdmin && (
        <Card className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>📊 Dashboard Access Tracking:</strong> The "Dashboard Access" column shows which users have opened the dashboard. 
            The "Last Visited" column displays the most recent login timestamp for each user.
          </p>
        </Card>
      )}

      {loading ? (
        <Card>
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading users...</p>
          </div>
        </Card>
      ) : (
        <Card>
          <Table columns={columns} data={users} />
        </Card>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New User"
      >
        <Formik
          initialValues={{ name: '', email: '', role: '' }}
          validationSchema={validationSchema}
          onSubmit={handleAddUser}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-600 dark:text-red-400 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 dark:text-red-400 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Role
                </label>
                <Field
                  as="select"
                  id="role"
                  name="role"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Select a role</option>
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="User">User</option>
                </Field>
                <ErrorMessage
                  name="role"
                  component="div"
                  className="text-red-600 dark:text-red-400 text-sm mt-1"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  Add User
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default Users;
