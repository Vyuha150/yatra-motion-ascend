import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { Users, ShoppingCart, AlertTriangle, DollarSign, TrendingUp, Building2 } from 'lucide-react';

interface DashboardStats {
  totalInstallations: number;
  activeAMCContracts: number;
  pendingServiceTickets: number;
  totalRevenue: number;
  newLeadsThisMonth: number;
  showrooms: number;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalInstallations: 0,
    activeAMCContracts: 0,
    pendingServiceTickets: 0,
    totalRevenue: 0,
    newLeadsThisMonth: 0,
    showrooms: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const [
        installationsResult,
        amcResult,
        ticketsResult,
        revenueResult,
        leadsResult,
        showroomsResult
      ] = await Promise.all([
        supabase.from('orders').select('*', { count: 'exact' }).eq('status', 'installed'),
        supabase.from('amc_contracts').select('*', { count: 'exact' }).eq('status', 'active'),
        supabase.from('service_tickets').select('*', { count: 'exact' }).in('status', ['open', 'in_progress']),
        supabase.from('invoices').select('total_amount').eq('status', 'paid'),
        supabase.from('leads').select('*', { count: 'exact' }).gte('created_at', new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString()),
        supabase.from('showrooms').select('*', { count: 'exact' })
      ]);

      const totalRevenue = revenueResult.data?.reduce((sum, invoice) => sum + (invoice.total_amount || 0), 0) || 0;

      setStats({
        totalInstallations: installationsResult.count || 0,
        activeAMCContracts: amcResult.count || 0,
        pendingServiceTickets: ticketsResult.count || 0,
        totalRevenue,
        newLeadsThisMonth: leadsResult.count || 0,
        showrooms: showroomsResult.count || 0
      });
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statsCards = [
    {
      title: 'Total Installations',
      value: stats.totalInstallations,
      icon: Building2,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Active AMC Contracts',
      value: stats.activeAMCContracts,
      icon: ShoppingCart,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Pending Service Tickets',
      value: stats.pendingServiceTickets,
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Total Revenue',
      value: `₹${(stats.totalRevenue / 100000).toFixed(1)}L`,
      icon: DollarSign,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      title: 'New Leads This Month',
      value: stats.newLeadsThisMonth,
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Active Showrooms',
      value: stats.showrooms,
      icon: Users,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Dashboard Overview</h2>
            <p className="text-muted-foreground">Loading real-time data...</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="h-4 bg-muted rounded w-32"></div>
                  <div className="h-8 w-8 bg-muted rounded"></div>
                </div>
                <div className="h-8 bg-muted rounded w-16 mb-2"></div>
                <div className="h-3 bg-muted rounded w-24"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        <p className="text-muted-foreground">Welcome to Yatra Elevators Admin Panel</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statsCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                <div className={`p-2 rounded-lg ${card.bgColor}`}>
                  <Icon className={`h-5 w-5 ${card.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Showing real-time data
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New AMC contract signed</p>
                  <p className="text-xs text-muted-foreground">Tech Tower Ltd - ₹2,00,000</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Service ticket resolved</p>
                  <p className="text-xs text-muted-foreground">Raj Apartments - Elevator maintenance</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New lead received</p>
                  <p className="text-xs text-muted-foreground">Commercial complex in Mumbai</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <button className="w-full text-left p-3 rounded-lg border hover:bg-muted transition-colors">
                <div className="font-medium">Generate Monthly Report</div>
                <div className="text-sm text-muted-foreground">Download comprehensive business report</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border hover:bg-muted transition-colors">
                <div className="font-medium">Send AMC Renewal Notifications</div>
                <div className="text-sm text-muted-foreground">Notify customers about upcoming renewals</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border hover:bg-muted transition-colors">
                <div className="font-medium">Backup Database</div>
                <div className="text-sm text-muted-foreground">Create system backup</div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;