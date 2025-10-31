import type { ReactNode } from 'react';

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: string;
  rotation?: number;
}

export default function FloatingCard({ 
  children, 
  className = '', 
  delay = '0s',
  rotation = 0 
}: FloatingCardProps) {
  return (
    <div
      className={`floating-card ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        animationDelay: delay,
      }}
    >
      {children}
    </div>
  );
}
