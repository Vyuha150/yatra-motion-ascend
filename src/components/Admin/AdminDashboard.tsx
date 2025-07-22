import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { dashboardService, DashboardStats, RecentActivity } from '@/services/dashboardService';
import { Users, ShoppingCart, AlertTriangle, DollarSign, TrendingUp, Building2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalInstallations: 0,
    activeAMCContracts: 0,
    pendingServiceTickets: 0,
    totalRevenue: 0,
    newLeadsThisMonth: 0,
    showrooms: 0
  });
  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchDashboardData = useCallback(async () => {
    try {
      const [statsResponse, activitiesResponse] = await Promise.all([
        dashboardService.getDashboardStats(),
        dashboardService.getRecentActivities()
      ]);

      if (statsResponse.success && statsResponse.data) {
        setStats(statsResponse.data);
      }

      if (activitiesResponse.success && activitiesResponse.data) {
        setRecentActivities(activitiesResponse.data);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast({
        title: "Error",
        description: "Failed to load dashboard data. Using fallback data.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  const handleGenerateReport = async () => {
    try {
      const response = await dashboardService.generateMonthlyReport();
      if (response.success && response.data) {
        toast({
          title: "Report Generated",
          description: "Monthly report has been generated successfully.",
        });
        // You could open the report URL here: window.open(response.data.reportUrl)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate monthly report.",
        variant: "destructive",
      });
    }
  };

  const handleSendAMCNotifications = async () => {
    try {
      const response = await dashboardService.sendAMCRenewalNotifications();
      if (response.success && response.data) {
        toast({
          title: "Notifications Sent",
          description: `AMC renewal notifications sent to ${response.data.sent} customers.`,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send AMC renewal notifications.",
        variant: "destructive",
      });
    }
  };

  const handleBackupDatabase = async () => {
    try {
      const response = await dashboardService.backupDatabase();
      if (response.success && response.data) {
        toast({
          title: "Backup Created",
          description: `Database backup created with ID: ${response.data.backupId}`,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create database backup.",
        variant: "destructive",
      });
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
              {recentActivities.length > 0 ? (
                recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.status === 'completed' ? 'bg-green-500' :
                      activity.status === 'pending' ? 'bg-orange-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New AMC contract signed</p>
                    <p className="text-xs text-muted-foreground">Tech Tower Ltd - ₹2,00,000</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <button 
                onClick={handleGenerateReport}
                className="w-full text-left p-3 rounded-lg border hover:bg-muted transition-colors"
              >
                <div className="font-medium">Generate Monthly Report</div>
                <div className="text-sm text-muted-foreground">Download comprehensive business report</div>
              </button>
              <button 
                onClick={handleSendAMCNotifications}
                className="w-full text-left p-3 rounded-lg border hover:bg-muted transition-colors"
              >
                <div className="font-medium">Send AMC Renewal Notifications</div>
                <div className="text-sm text-muted-foreground">Notify customers about upcoming renewals</div>
              </button>
              <button 
                onClick={handleBackupDatabase}
                className="w-full text-left p-3 rounded-lg border hover:bg-muted transition-colors"
              >
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