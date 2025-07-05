
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Calendar, Users, Package, TrendingUp, Settings, Bell, FileText, Phone, Mail, MapPin, DollarSign, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import PageLayout from '@/components/PageLayout';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Sample data for charts
  const salesData = [
    { month: 'Jan', sales: 12, installations: 8 },
    { month: 'Feb', sales: 19, installations: 15 },
    { month: 'Mar', sales: 15, installations: 12 },
    { month: 'Apr', sales: 25, installations: 20 },
    { month: 'May', sales: 22, installations: 18 },
    { month: 'Jun', sales: 30, installations: 25 }
  ];

  const elevatorTypes = [
    { name: 'Passenger', value: 45, color: '#3B82F6' },
    { name: 'Freight', value: 25, color: '#10B981' },
    { name: 'Hospital', value: 20, color: '#F59E0B' },
    { name: 'Home', value: 10, color: '#EF4444' }
  ];

  const recentOrders = [
    { id: 'ORD-001', client: 'Phoenix Mall', type: 'Passenger Elevator', status: 'In Progress', amount: '₹15,00,000' },
    { id: 'ORD-002', client: 'Prestige Apartments', type: 'Home Elevator', status: 'Completed', amount: '₹8,50,000' },
    { id: 'ORD-003', client: 'Apollo Hospital', type: 'Hospital Elevator', status: 'Planning', amount: '₹22,00,000' },
    { id: 'ORD-004', client: 'Tech Park', type: 'High Speed', status: 'Installation', amount: '₹35,00,000' },
    { id: 'ORD-005', client: 'Residential Complex', type: 'Passenger Elevator', status: 'Maintenance', amount: '₹12,75,000' }
  ];

  const upcomingTasks = [
    { task: 'Installation at Phoenix Mall', date: '2024-01-15', priority: 'High' },
    { task: 'Maintenance at Prestige Tower', date: '2024-01-16', priority: 'Medium' },
    { task: 'Client Meeting - Tech Park', date: '2024-01-18', priority: 'High' },
    { task: 'Quality Inspection', date: '2024-01-20', priority: 'Low' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-600 bg-green-100';
      case 'In Progress': return 'text-blue-600 bg-blue-100';
      case 'Planning': return 'text-yellow-600 bg-yellow-100';
      case 'Installation': return 'text-purple-600 bg-purple-100';
      case 'Maintenance': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-600 bg-red-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50 pt-24">
        {/* Admin Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-8 mt-6 border-b">
              {['dashboard', 'orders', 'projects', 'clients', 'reports'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-2 text-sm font-medium capitalize transition-colors ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8">
          {activeTab === 'dashboard' && (
            <>
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total Projects</p>
                      <p className="text-3xl font-bold text-gray-900">124</p>
                      <p className="text-sm text-green-600">+12% from last month</p>
                    </div>
                    <Package className="h-12 w-12 text-blue-600" />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Active Clients</p>
                      <p className="text-3xl font-bold text-gray-900">89</p>
                      <p className="text-sm text-green-600">+8% from last month</p>
                    </div>
                    <Users className="h-12 w-12 text-green-600" />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Monthly Revenue</p>
                      <p className="text-3xl font-bold text-gray-900">₹1.2Cr</p>
                      <p className="text-sm text-green-600">+15% from last month</p>
                    </div>
                    <DollarSign className="h-12 w-12 text-yellow-600" />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Pending Tasks</p>
                      <p className="text-3xl font-bold text-gray-900">16</p>
                      <p className="text-sm text-red-600">3 high priority</p>
                    </div>
                    <Clock className="h-12 w-12 text-red-600" />
                  </div>
                </div>
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Sales Chart */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold mb-4">Sales & Installations</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="sales" fill="#3B82F6" name="Sales" />
                      <Bar dataKey="installations" fill="#10B981" name="Installations" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Elevator Types Distribution */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold mb-4">Elevator Types Distribution</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={elevatorTypes}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {elevatorTypes.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Recent Orders & Tasks */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Orders */}
                <div className="bg-white rounded-lg shadow-sm border">
                  <div className="p-6 border-b">
                    <h3 className="text-lg font-semibold">Recent Orders</h3>
                  </div>
                  <div className="p-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Order ID</TableHead>
                          <TableHead>Client</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentOrders.slice(0, 5).map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.client}</TableCell>
                            <TableCell>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                {order.status}
                              </span>
                            </TableCell>
                            <TableCell>{order.amount}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* Upcoming Tasks */}
                <div className="bg-white rounded-lg shadow-sm border">
                  <div className="p-6 border-b">
                    <h3 className="text-lg font-semibold">Upcoming Tasks</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {upcomingTasks.map((task, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{task.task}</p>
                            <p className="text-sm text-gray-600">{task.date}</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'orders' && (
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold">All Orders</h3>
              </div>
              <div className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.client}</TableCell>
                        <TableCell>{order.type}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </TableCell>
                        <TableCell>{order.amount}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">View Details</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}

          {(activeTab === 'projects' || activeTab === 'clients' || activeTab === 'reports') && (
            <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 capitalize">{activeTab} Management</h3>
              <p className="text-gray-600 mb-6">This section is under development and will be available soon.</p>
              <Button>Coming Soon</Button>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Admin;
