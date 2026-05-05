import type { ReactNode } from 'react';
import Card from './Card';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  color?: string;
}

const StatCard = ({ title, value, icon, trend, color = 'gray' }: StatCardProps) => {
  const colorClasses = {
    gray: 'bg-gray-100 text-gray-900',
    black: 'bg-black text-white',
    light: 'bg-gray-50 text-gray-900',
    dark: 'bg-gray-900 text-white',
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">
            {title}
          </p>
          <p className="text-3xl font-bold text-black">
            {value}
          </p>
          {trend && (
            <p className={`text-sm mt-2 font-medium ${trend.isPositive ? 'text-gray-900' : 'text-gray-600'}`}>
              {trend.isPositive ? '↑' : '↓'} {trend.value}
            </p>
          )}
        </div>
        <div className={`p-4 rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.gray}`}>
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
