'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import { FaBirthdayCake, FaShoppingCart, FaUsers, FaDollarSign } from 'react-icons/fa';

export default function AdminDashboard() {
  const stats = [
    { title: 'Total Products', value: 42, icon: <FaBirthdayCake className="text-rose-500" />, change: '+12%' },
    { title: 'Total Orders', value: 156, icon: <FaShoppingCart className="text-rose-500" />, change: '+5%' },
    { title: 'Customers', value: 89, icon: <FaUsers className="text-rose-500" />, change: '+8%' },
    { title: 'Revenue', value: '$4,256', icon: <FaDollarSign className="text-rose-500" />, change: '+23%' },
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'Sarah Johnson', product: 'Heart-Shaped Chocolate', date: '2025-02-14', status: 'Delivered' },
    { id: '#ORD-002', customer: 'Michael Smith', product: 'Romantic Red Velvet', date: '2025-02-13', status: 'Shipped' },
    { id: '#ORD-003', customer: 'Emily Davis', product: 'Love Blossom Cake', date: '2025-02-12', status: 'Processing' },
  ];

  return (
    <AdminLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold text-rose-800 mt-1">{stat.value}</p>
                <p className="text-xs text-green-500 mt-1">{stat.change} from last month</p>
              </div>
              <div className="h-12 w-12 bg-rose-50 rounded-full flex items-center justify-center">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
        <h2 className="text-xl font-bold text-rose-800 mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-rose-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-rose-800 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-rose-800 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-rose-800 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-rose-800 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-rose-800 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-rose-800">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 
                        'bg-yellow-100 text-yellow-800'}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-rose-800 mb-4">Popular Products</h2>
          <div className="space-y-4">
            {[
              { name: 'Heart-Shaped Chocolate', sales: 45, revenue: '$2,025' },
              { name: 'Romantic Red Velvet', sales: 38, revenue: '$1,710' },
              { name: 'Love Blossom Cake', sales: 29, revenue: '$1,305' },
            ].map((product, index) => (
              <div key={index} className="flex items-center">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mr-4">
                  <FaBirthdayCake className="text-rose-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-rose-800">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.sales} sales</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-rose-800">{product.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-rose-800 mb-4">Recent Messages</h2>
          <div className="space-y-4">
            {[
              { name: 'Jessica Wilson', message: 'Can I customize the heart cake for anniversary?', time: '2h ago' },
              { name: 'David Thompson', message: 'Do you offer gluten-free options?', time: '5h ago' },
              { name: 'Olivia Martinez', message: 'Thank you for the beautiful cake!', time: '1d ago' },
            ].map((msg, index) => (
              <div key={index} className="border-b border-rose-50 pb-4 last:border-0 last:pb-0">
                <div className="flex justify-between mb-1">
                  <h3 className="font-medium text-rose-800">{msg.name}</h3>
                  <span className="text-xs text-gray-400">{msg.time}</span>
                </div>
                <p className="text-sm text-gray-600">{msg.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}