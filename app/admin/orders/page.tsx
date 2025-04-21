'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import { FaSearch, FaFileExport } from 'react-icons/fa';

const orders = [
  { id: '#ORD-001', customer: 'Sarah Johnson', date: '2025-02-14', total: 52.99, status: 'Delivered' },
  { id: '#ORD-002', customer: 'Michael Smith', date: '2025-02-13', total: 45.99, status: 'Shipped' },
  { id: '#ORD-003', customer: 'Emily Davis', date: '2025-02-12', total: 119.98, status: 'Processing' },
  { id: '#ORD-004', customer: 'Robert Wilson', date: '2025-02-11', total: 59.99, status: 'Cancelled' },
];

export default function AdminOrdersPage() {
  return (
    <AdminLayout title="Orders">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-rose-800">Order Management</h1>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search orders..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
          
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500">
            <option>All Status</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
          
          <button className="bg-white border border-rose-600 text-rose-600 px-4 py-2 rounded-lg hover:bg-rose-50 flex items-center justify-center">
            <FaFileExport className="mr-2" />
            Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-rose-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-rose-800 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-rose-800 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-rose-800 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-rose-800 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-rose-800 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-rose-800 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-rose-800">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.total.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 
                        order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-rose-600 hover:text-rose-800">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-500">
          Showing 1 to {orders.length} of {orders.length} orders
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}