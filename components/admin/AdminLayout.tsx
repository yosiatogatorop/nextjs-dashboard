'use client';

import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';
import { ReactNode } from 'react';

export default function AdminLayout({ 
  children, 
  title 
}: { 
  children: ReactNode, 
  title: string 
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminSidebar />
      
      <div className="lg:pl-64">
        <AdminNavbar title={title} />
        
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}