import React, { useEffect, useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface InnovationCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  benefits: string;
  index: number;
  isVisible: boolean;
}

const InnovationCard: React.FC<InnovationCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  benefits,
  index,
  isVisible
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setTimeout(() => {
        setHasAnimated(true);
      }, index * 150);
    }
  }, [isVisible, hasAnimated, index]);

  return (
    <div 
      ref={cardRef}
      className={`group relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 ${
        hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative p-8">
        {/* Icon Container */}
        <div className="flex items-start space-x-6 mb-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Icon className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* Features Grid */}
        <div className="mb-6">
          <h4 className="font-semibold mb-4 text-gray-900 flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            Key Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className={`flex items-center text-sm group-hover:translate-x-1 transition-transform duration-300`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 p-6 rounded-2xl border border-primary/20 group-hover:border-primary/30 transition-colors duration-300">
          <h4 className="font-semibold text-primary mb-3 flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
            Impact & Benefits
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">{benefits}</p>
        </div>

        {/* Hover Accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </div>
  );
};

export default InnovationCard;