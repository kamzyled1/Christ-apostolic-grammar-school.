import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const role = localStorage.getItem('role') || 'Student'; // Replace with real auth
  return (
    <div className="flex">
      <Sidebar role={role} />
      <div className="flex-1 p-8">
        <h2 className="text-3xl mb-4">Welcome, {role}</h2>
        {/* Dashboard cards, notifications, etc */}
      </div>
    </div>
  );
};

export default Dashboard;
