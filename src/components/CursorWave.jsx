'use client';
import { useEffect, useState } from 'react';

export default function CursorWave() {
  const [trails, setTrails] = useState([]);
  
  const vibgyorColors = [
    'rgba(255, 0, 150, 0.2)',   
    'rgba(255, 100, 0, 0.2)',   
    'rgba(255, 255, 0, 0.2)',   
    'rgba(0, 255, 100, 0.2)',   
    'rgba(0, 150, 255, 0.2)',   
    'rgba(150, 0, 255, 0.2)',   
  ];

  useEffect(() => {
    let throttle = false;
    
    const handleMouseMove = (e) => {
      if (throttle) return;
      throttle = true;
      
      setTimeout(() => { throttle = false; }, 30);
      
      const randomColor = vibgyorColors[Math.floor(Math.random() * vibgyorColors.length)];
      
      const newTrail = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        color: randomColor,
      };
      
      setTrails(prev => [...prev, newTrail]);
      
      setTimeout(() => {
        setTrails(prev => prev.filter(trail => trail.id !== newTrail.id));
      }, 200);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trails.map(trail => (
        <div
          key={trail.id}
          className="absolute jellyfish-trail"
          style={{
            left: trail.x - 100,
            top: trail.y - 100,
            width: '200px',
            height: '200px',
            background: `radial-gradient(circle, ${trail.color} 0%, transparent 60%)`,
            borderRadius: '50%',
            filter: 'blur(30px)',
          }}
        />
      ))}
    </div>
  );
}
