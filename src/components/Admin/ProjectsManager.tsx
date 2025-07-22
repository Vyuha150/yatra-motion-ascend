import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building } from 'lucide-react';

const ProjectsManager = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building className="h-5 w-5" />
          Projects Management
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">
          Project management functionality will be available after backend integration.
        </p>
      </CardContent>
    </Card>
  );
};

export default ProjectsManager;