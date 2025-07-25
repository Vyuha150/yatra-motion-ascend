
import React, { useState } from 'react';
import { useAuth } from '../Auth/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  LogOut, 
  Users, 
  MessageSquare, 
  Building, 
  Package, 
  BarChart3, 
  ShoppingCart, 
  FileText, 
  Wrench, 
  Shield,
  Settings,
  FileCheck,
  Star
} from 'lucide-react';
import ContactsManager from './ContactsManager';
import ProjectsManager from './ProjectsManager';
import ProductsManager from './ProductsManager';
import UsersManager from './UsersManager';
import AdminDashboard from './AdminDashboard';
import OrdersManager from './OrdersManager';
import InvoicesManager from './InvoicesManager';
import LeadsManager from './LeadsManager';
import ServiceTicketsManager from './ServiceTicketsManager';
import AMCManager from './AMCManager';
import RequirementsManager from './RequirementsManager';
import FeedbackManager from './FeedbackManager';

const AdminLayout = () => {
  const auth = useAuth();
  const profile = auth.user || auth.profile; // Use the correct property from your Auth context
  
  const handleSignOut = async () => {
    auth.logout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Enhanced Header */}
      <div className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Yatra Elevators
                  </h1>
                  <p className="text-xs text-slate-500">Admin Control Panel</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-slate-700">
                  {profile?.firstName} {profile?.lastName}
                </p>
                <p className="text-xs text-slate-500 capitalize">{profile?.role} Access</p>
              </div>
              <Button onClick={handleSignOut} variant="outline" size="sm" className="border-red-200 text-red-600 hover:bg-red-50">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          {/* Enhanced Tab Navigation */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-2 border border-white/20 shadow-lg">
            <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10 gap-1 bg-transparent h-auto p-1">
              <TabsTrigger 
                value="dashboard" 
                className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-xl transition-all"
              >
                <BarChart3 className="h-5 w-5" />
                <span className="text-xs font-medium">Dashboard</span>
              </TabsTrigger>
              <TabsTrigger 
                value="contacts" 
                className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-green-500 data-[state=active]:text-white rounded-xl transition-all"
              >
                <MessageSquare className="h-5 w-5" />
                <span className="text-xs font-medium">Contacts</span>
              </TabsTrigger>
              <TabsTrigger 
                value="leads" 
                className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-purple-500 data-[state=active]:text-white rounded-xl transition-all"
              >
                <Users className="h-5 w-5" />
                <span className="text-xs font-medium">Leads</span>
              </TabsTrigger>
              <TabsTrigger 
                value="orders" 
                className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-xl transition-all"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="text-xs font-medium">Orders</span>
              </TabsTrigger>
              <TabsTrigger 
                value="projects" 
                className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-indigo-500 data-[state=active]:text-white rounded-xl transition-all"
              >
                <Building className="h-5 w-5" />
                <span className="text-xs font-medium">Projects</span>
              </TabsTrigger>
              <TabsTrigger 
                value="products" 
                className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-cyan-500 data-[state=active]:text-white rounded-xl transition-all"
              >
                <Package className="h-5 w-5" />
                <span className="text-xs font-medium">Products</span>
              </TabsTrigger>
              <TabsTrigger 
                value="invoices" 
                className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-emerald-500 data-[state=active]:text-white rounded-xl transition-all"
              >
                <FileText className="h-5 w-5" />
                <span className="text-xs font-medium">Invoices</span>
              </TabsTrigger>
              <TabsTrigger 
                value="amc" 
                className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-teal-500 data-[state=active]:text-white rounded-xl transition-all"
              >
                <Shield className="h-5 w-5" />
                <span className="text-xs font-medium">AMC</span>
              </TabsTrigger>
              <TabsTrigger 
                value="tickets" 
                className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-red-500 data-[state=active]:text-white rounded-xl transition-all"
              >
                <Wrench className="h-5 w-5" />
                <span className="text-xs font-medium">Tickets</span>
              </TabsTrigger>
              <TabsTrigger 
                value="users" 
                className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-gray-500 data-[state=active]:text-white rounded-xl transition-all"
              >
                <Settings className="h-5 w-5" />
                <span className="text-xs font-medium">Users</span>
              </TabsTrigger>
              <TabsTrigger 
                value="requirements" 
                className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-purple-500 data-[state=active]:text-white rounded-xl transition-all"
              >
                <FileCheck className="h-5 w-5" />
                <span className="text-xs font-medium">Requirements</span>
              </TabsTrigger>
              <TabsTrigger 
                value="feedback" 
                className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-yellow-500 data-[state=active]:text-white rounded-xl transition-all"
              >
                <Star className="h-5 w-5" />
                <span className="text-xs font-medium">Feedback</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Content */}
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg overflow-hidden">
            <TabsContent value="dashboard" className="p-6 m-0">
              <AdminDashboard />
            </TabsContent>

            <TabsContent value="contacts" className="p-6 m-0">
              <ContactsManager />
            </TabsContent>

            <TabsContent value="leads" className="p-6 m-0">
              <LeadsManager />
            </TabsContent>

            <TabsContent value="orders" className="p-6 m-0">
              <OrdersManager />
            </TabsContent>

            <TabsContent value="projects" className="p-6 m-0">
              <ProjectsManager />
            </TabsContent>

            <TabsContent value="products" className="p-6 m-0">
              <ProductsManager />
            </TabsContent>

            <TabsContent value="invoices" className="p-6 m-0">
              <InvoicesManager />
            </TabsContent>

            <TabsContent value="amc" className="p-6 m-0">
              <AMCManager />
            </TabsContent>

            <TabsContent value="tickets" className="p-6 m-0">
              <ServiceTicketsManager />
            </TabsContent>

            <TabsContent value="users" className="p-6 m-0">
              <UsersManager />
            </TabsContent>

            <TabsContent value="requirements" className="p-6 m-0">
              <RequirementsManager />
            </TabsContent>

            <TabsContent value="feedback" className="p-6 m-0">
              <FeedbackManager />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminLayout;

