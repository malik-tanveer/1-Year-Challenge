import { useState } from 'react';
import Card from '../components/Card';
import Table from '../components/Table';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MdEdit, MdDelete } from 'react-icons/md';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Laptop Pro',
      price: 1299.99,
      category: 'Electronics',
      description: 'High-performance laptop for professionals',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      price: 29.99,
      category: 'Accessories',
      description: 'Ergonomic wireless mouse',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'USB-C Cable',
      price: 12.99,
      category: 'Accessories',
      description: 'Fast charging USB-C cable',
      image: 'https://via.placeholder.com/150'
    },
  ]);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    price: Yup.number()
      .positive('Price must be positive')
      .required('Price is required'),
    category: Yup.string()
      .required('Category is required'),
    description: Yup.string()
      .min(10, 'Description must be at least 10 characters')
      .required('Description is required'),
    image: Yup.string()
      .url('Must be a valid URL')
      .required('Image URL is required'),
  });

  const handleAddProduct = (values: Omit<Product, 'id'>, { resetForm }: any) => {
    const newProduct = {
      id: products.length + 1,
      ...values,
    };
    setProducts([...products, newProduct]);
    setIsModalOpen(false);
    resetForm();
  };

  const handleEditProduct = (values: Omit<Product, 'id'>, { resetForm }: any) => {
    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id ? { ...editingProduct, ...values } : p
        )
      );
      setEditingProduct(null);
      setIsModalOpen(false);
      resetForm();
    }
  };

  const handleDeleteProduct = (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const columns = [
    {
      key: 'image',
      header: 'Image',
      render: (value: string) => (
        <img
          src={value}
          alt="Product"
          className="w-12 h-12 object-cover rounded"
        />
      ),
    },
    { key: 'name', header: 'Name' },
    {
      key: 'price',
      header: 'Price',
      render: (value: number) => `$${value.toFixed(2)}`,
    },
    { key: 'category', header: 'Category' },
    {
      key: 'description',
      header: 'Description',
      render: (value: string) => (
        <span className="line-clamp-2">{value}</span>
      ),
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (_: any, row: Product) => (
        <div className="flex gap-2">
          <button
            onClick={() => openEditModal(row)}
            className="p-2 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900 rounded transition-colors"
            aria-label="Edit product"
          >
            <MdEdit size={18} />
          </button>
          <button
            onClick={() => handleDeleteProduct(row.id)}
            className="p-2 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900 rounded transition-colors"
            aria-label="Delete product"
          >
            <MdDelete size={18} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Products Management
        </h1>
        <Button onClick={() => setIsModalOpen(true)}>
          Add Product
        </Button>
      </div>

      <Card>
        <Table columns={columns} data={products} />
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={editingProduct ? 'Edit Product' : 'Add New Product'}
      >
        <Formik
          initialValues={{
            name: editingProduct?.name || '',
            price: editingProduct?.price || 0,
            category: editingProduct?.category || '',
            description: editingProduct?.description || '',
            image: editingProduct?.image || '',
          }}
          validationSchema={validationSchema}
          onSubmit={editingProduct ? handleEditProduct : handleAddProduct}
          enableReinitialize
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Product Name
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
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Price
                </label>
                <Field
                  type="number"
                  id="price"
                  name="price"
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-red-600 dark:text-red-400 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Category
                </label>
                <Field
                  as="select"
                  id="category"
                  name="category"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Select a category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Books">Books</option>
                  <option value="Home & Garden">Home & Garden</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-red-600 dark:text-red-400 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Description
                </label>
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-600 dark:text-red-400 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Image URL
                </label>
                <Field
                  type="text"
                  id="image"
                  name="image"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <ErrorMessage
                  name="image"
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
                  {editingProduct ? 'Update Product' : 'Add Product'}
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={closeModal}
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

export default Products;
