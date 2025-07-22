import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UsersManager = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Users Manager</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          User management functionality will be implemented with proper backend integration.
        </p>
      </CardContent>
    </Card>
  );
};

export default UsersManager;
