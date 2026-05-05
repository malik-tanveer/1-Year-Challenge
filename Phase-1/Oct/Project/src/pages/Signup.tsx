import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import Card from '../components/Card';
import { FcGoogle } from 'react-icons/fc';

const Signup = () => {
  const navigate = useNavigate();
  const { signup, loginWithGoogle } = useAuth();
  const [error, setError] = useState('');
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'Admin' | 'User'>('User');

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm password is required'),
    role: Yup.string()
      .oneOf(['Admin', 'User'], 'Invalid role')
      .required('Role is required'),
    rootAdminPassword: selectedRole === 'Admin' 
      ? Yup.string().required('Root admin password is required for Admin role')
      : Yup.string(),
  });

  const handleSubmit = async (
    values: { name: string; email: string; password: string; role: 'Admin' | 'User'; rootAdminPassword?: string },
    { setSubmitting }: any
  ) => {
    try {
      setError('');
      await signup(values.email, values.password, values.name, values.role, values.rootAdminPassword);
      navigate(values.role === 'Admin' ? '/admin-community' : '/');
    } catch (err: any) {
      setError(err.message || 'Failed to create account');
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setError('');
      setIsGoogleLoading(true);
      await loginWithGoogle();
      navigate('/');
    } catch (err: any) {
      setError(err.message || 'Failed to sign in with Google');
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">
            Create Account
          </h1>
          <p className="text-gray-600">
            Sign up to get started
          </p>
        </div>

        <Card>
          {error && (
            <div className="mb-4 p-3 bg-gray-100 border border-gray-400 text-gray-900 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Google Sign-In Button */}
          <button
            onClick={handleGoogleSignIn}
            disabled={isGoogleLoading}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-black rounded-lg hover:bg-gray-50 transition-colors duration-200 mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FcGoogle size={24} />
            <span className="font-medium text-black">
              {isGoogleLoading ? 'Signing in...' : 'Continue with Google'}
            </span>
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or sign up with email</span>
            </div>
          </div>

          <Formik
            initialValues={{ name: '', email: '', password: '', confirmPassword: '', role: 'User', rootAdminPassword: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, values, setFieldValue }) => (
              <Form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    Full Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black bg-white text-gray-900"
                    placeholder="Enter your name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-gray-700 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black bg-white text-gray-900"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-gray-700 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black bg-white text-gray-900"
                    placeholder="Enter your password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-gray-700 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black bg-white text-gray-900"
                    placeholder="Confirm your password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-gray-700 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    Role
                  </label>
                  <Field
                    as="select"
                    id="role"
                    name="role"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      const newRole = e.target.value as 'Admin' | 'User';
                      setFieldValue('role', newRole);
                      setSelectedRole(newRole);
                    }}
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black bg-white text-gray-900"
                  >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </Field>
                  <ErrorMessage
                    name="role"
                    component="div"
                    className="text-gray-700 text-sm mt-1"
                  />
                </div>

                {values.role === 'Admin' && (
                  <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4">
                    <p className="text-sm text-gray-900 mb-3">
                      ⚠️ <strong>Admin Role Requires Authorization</strong><br />
                      Only authorized personnel can create admin accounts. Enter the root admin password to proceed.
                    </p>
                    <label
                      htmlFor="rootAdminPassword"
                      className="block text-sm font-medium text-gray-900 mb-1"
                    >
                      Root Admin Password
                    </label>
                    <Field
                      type="password"
                      id="rootAdminPassword"
                      name="rootAdminPassword"
                      className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black bg-white text-gray-900"
                      placeholder="Enter root admin password"
                    />
                    <ErrorMessage
                      name="rootAdminPassword"
                      component="div"
                      className="text-gray-700 text-sm mt-1"
                    />
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Creating account...' : 'Sign Up'}
                </Button>
              </Form>
            )}
          </Formik>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-black hover:underline font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
