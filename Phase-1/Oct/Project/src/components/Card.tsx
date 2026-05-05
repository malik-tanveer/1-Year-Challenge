import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

const Card = ({ children, title, className = '' }: CardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg border-2 border-gray-200 p-6 ${className}`}>
      {title && (
        <h2 className="text-xl font-semibold text-black mb-4">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

export default Card;