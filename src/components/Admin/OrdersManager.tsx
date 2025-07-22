import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OrdersManager = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Orders Manager</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Orders management functionality will be implemented with proper backend integration.
        </p>
      </CardContent>
    </Card>
  );
};

export default OrdersManager;
