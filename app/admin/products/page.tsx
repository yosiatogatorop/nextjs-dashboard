'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const products = [
  { id: 1, name: 'Heart-Shaped Chocolate', price: 52.99, stock: 15, category: 'Special Occasion' },
  { id: 2, name: 'Romantic Red Velvet', price: 45.99, stock: 22, category: 'Classic' },
  { id: 3, name: 'Love Blossom Cake', price: 59.99, stock: 8, category: 'Premium' },
  { id: 4, name: 'Strawberry Romance', price: 48.99, stock: 12, category: 'Fruit' },
];

export default function AdminProductsPage() {
  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      alert(`Product ${id} would be deleted in a real app`);
    }
  };

  return (
    <AdminLayout title="Products">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-rose-800">Product Management</h1>
        <button className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 flex items-center">
          <FaPlus className="mr-2" />
          Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-rose-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-rose-800 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-rose-800 uppercase tracking-wider">Product Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-rose-800 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-rose-800 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-rose-800 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-rose-800 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-rose-800">{product.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-rose-600 hover:text-rose-800 mr-4">
                      <FaEdit />
                    </button>
                    <button 
                      className="text-rose-600 hover:text-rose-800"
                      onClick={() => handleDelete(product.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}